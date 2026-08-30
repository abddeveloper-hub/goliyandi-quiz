/**
 * Meelad Fest Goliyangadi - Quiz State Engine & Timer Controller
 * Includes State & Score Persistence in localStorage + Live Sync
 */

class QuizEngine {
  constructor() {
    this.storageProgressKey = 'meelad_quiz_progress_v2';
    this.questions = [];
    this.currentRound = 'all';
    this.filteredQuestions = [];
    this.currentIndex = 0;
    this.maxVisitedIndex = 0;
    this.questionStates = {};
    
    // Timer state & settings (Locked to 15s)
    this.timerDuration = 15; // Fixed 15 seconds
    this.timeRemaining = 15;
    this.timerInterval = null;
    this.isTimerRunning = false;
    this.hasStarted = false;
    this.autoStartTimer = false;
    this.autoRevealOnTimeUp = false;
    this.urgentThreshold = 5; // seconds
    this.soundMode = 'all'; // 'all' | 'urgent_only' | 'silent'
    this.isUntimed = false;
    
    // Display language mode: 'dual', 'ml', 'en', 'kn'
    this.langMode = 'dual';

    // State per active question
    this.isAnswerRevealed = false;
    this.isLocked = false;
    this.selectedOptionIndex = null;
    this.eliminatedOptions = [];
    this.audiencePollData = null;

    // Lifeline availability tracking
    this.lifelinesUsed = {
      fiftyFifty: false,
      audiencePoll: false,
      extraTime: false
    };

    // Callbacks
    this.onTick = null;
    this.onTimeUp = null;
    this.onStateChange = null;

    this.loadTimerSettings();
    this.init();
  }

  init() {
    if (typeof getStoredQuestions === 'function') {
      this.questions = getStoredQuestions();
    }
    this.setRound('all', false);
    this.loadProgress();
  }

  loadProgress() {
    try {
      const data = localStorage.getItem(this.storageProgressKey);
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed && typeof parsed.questionStates === 'object') {
          this.questionStates = parsed.questionStates || {};
          this.currentIndex = Math.min(Math.max(0, parsed.currentIndex || 0), (this.filteredQuestions.length || 1) - 1);
          this.maxVisitedIndex = parsed.maxVisitedIndex || 0;
          this.lifelinesUsed = parsed.lifelinesUsed || this.lifelinesUsed;

          const saved = this.questionStates[this.currentIndex];
          if (saved) {
            this.selectedOptionIndex = saved.selectedOptionIndex;
            this.isAnswerRevealed = saved.isAnswerRevealed;
            this.isLocked = saved.isLocked;
            this.eliminatedOptions = saved.eliminatedOptions || [];
            this.audiencePollData = saved.audiencePollData || null;
            this.timeRemaining = saved.timeRemaining !== undefined ? saved.timeRemaining : 0;
          }
          return true;
        }
      }
    } catch (e) {
      console.warn('Could not load saved quiz progress:', e);
    }
    return false;
  }

  saveProgress() {
    try {
      this.saveCurrentQuestionState();
      const payload = {
        currentIndex: this.currentIndex,
        maxVisitedIndex: this.maxVisitedIndex,
        questionStates: this.questionStates,
        lifelinesUsed: this.lifelinesUsed,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(this.storageProgressKey, JSON.stringify(payload));
    } catch (e) {
      console.warn('Could not save quiz progress:', e);
    }
  }

  resetProgress() {
    try {
      localStorage.removeItem(this.storageProgressKey);
    } catch (e) {}
    this.questionStates = {};
    this.currentIndex = 0;
    this.maxVisitedIndex = 0;
    this.resetQuestionState();
    this.notifyStateChange();
  }

  loadTimerSettings() {
    try {
      const data = localStorage.getItem('meelad_quiz_timer_settings_v2');
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed.autoStart !== undefined) this.autoStartTimer = Boolean(parsed.autoStart);
        if (parsed.autoReveal !== undefined) this.autoRevealOnTimeUp = Boolean(parsed.autoReveal);
        if (parsed.soundMode !== undefined) this.soundMode = parsed.soundMode;
        if (parsed.urgentThreshold !== undefined) this.urgentThreshold = parseInt(parsed.urgentThreshold, 10);
      }
    } catch(e) {
      console.warn('Could not load timer settings from storage:', e);
    }
    this.timerDuration = 15;
    this.timeRemaining = 15;
    this.isUntimed = false;
  }

  saveTimerSettings() {
    try {
      const payload = {
        duration: 15,
        autoStart: this.autoStartTimer,
        autoReveal: this.autoRevealOnTimeUp,
        soundMode: this.soundMode,
        urgentThreshold: this.urgentThreshold
      };
      localStorage.setItem('meelad_quiz_timer_settings_v2', JSON.stringify(payload));
    } catch(e) {
      console.warn('Could not save timer settings:', e);
    }
  }

  getTimerSettings() {
    return {
      duration: 15,
      autoStart: this.autoStartTimer,
      autoReveal: this.autoRevealOnTimeUp,
      soundMode: this.soundMode,
      urgentThreshold: this.urgentThreshold,
      isUntimed: false
    };
  }

  setTimerSettings({ autoStart, autoReveal, soundMode, urgentThreshold }) {
    this.timerDuration = 15;
    this.isUntimed = false;
    if (!this.isTimerRunning) {
      this.timeRemaining = 15;
    }
    if (autoStart !== undefined) this.autoStartTimer = Boolean(autoStart);
    if (autoReveal !== undefined) this.autoRevealOnTimeUp = Boolean(autoReveal);
    if (soundMode !== undefined) this.soundMode = soundMode;
    if (urgentThreshold !== undefined) this.urgentThreshold = Math.max(1, parseInt(urgentThreshold, 10) || 5);

    this.saveTimerSettings();
    this.notifyStateChange();
  }

  resetTimerDefaults() {
    this.timerDuration = 15;
    this.autoStartTimer = true;
    this.autoRevealOnTimeUp = false;
    this.soundMode = 'all';
    this.urgentThreshold = 5;
    this.isUntimed = false;
    this.timeRemaining = 15;
    this.saveTimerSettings();
    this.notifyStateChange();
  }

  reloadQuestions() {
    if (typeof getStoredQuestions === 'function') {
      this.questions = getStoredQuestions();
    }
    this.setRound(this.currentRound);
  }

  // ── Round Filtering ─────────────────────────────────────────
  setRound(roundKey = 'all', autoStart = false) {
    this.currentRound = roundKey;
    if (roundKey === 'all') {
      this.filteredQuestions = [...this.questions];
    } else {
      this.filteredQuestions = this.questions.filter(q => q.round === roundKey);
    }
    this.currentIndex = 0;
    this.maxVisitedIndex = 0;
    this.questionStates = {};
    this.hasStarted = Boolean(autoStart);
    this.isTimerRunning = false;
    this.resetQuestionState();
    if (autoStart && !this.isUntimed) {
      this.startTimer();
    }
    this.notifyStateChange();
  }

  setLanguageMode(mode) {
    this.langMode = mode; // 'dual', 'ml', 'en', 'kn'
    this.notifyStateChange();
  }

  getCurrentQuestion() {
    if (!this.filteredQuestions || this.filteredQuestions.length === 0) return null;
    return this.filteredQuestions[this.currentIndex] || null;
  }

  getTotalQuestions() {
    return this.filteredQuestions ? this.filteredQuestions.length : 0;
  }

  getCurrentIndex() {
    return this.currentIndex;
  }

  saveCurrentQuestionState() {
    this.questionStates[this.currentIndex] = {
      selectedOptionIndex: this.selectedOptionIndex,
      isAnswerRevealed: this.isAnswerRevealed,
      isLocked: this.isLocked || this.isAnswerRevealed || this.timeRemaining <= 0,
      eliminatedOptions: [...this.eliminatedOptions],
      audiencePollData: this.audiencePollData,
      timeRemaining: this.timeRemaining
    };
  }

  restoreQuestionState(index, isMovingBackwards) {
    this.stopTimer();
    const saved = this.questionStates[index];

    if (isMovingBackwards || (saved && saved.isLocked) || index < this.maxVisitedIndex) {
      // Previous or completed question -> lock completely, do not allow answering
      this.selectedOptionIndex = saved ? saved.selectedOptionIndex : null;
      this.isAnswerRevealed = true; // Show correct answer / review
      this.isLocked = true;
      this.eliminatedOptions = saved ? saved.eliminatedOptions : [];
      this.audiencePollData = saved ? saved.audiencePollData : null;
      this.timeRemaining = 0;
      if (this.onTick) this.onTick(0, this.timerDuration);
    } else {
      // Active / forward question -> allow answering with 15s timer
      this.maxVisitedIndex = Math.max(this.maxVisitedIndex, index);
      this.selectedOptionIndex = saved ? saved.selectedOptionIndex : null;
      this.isAnswerRevealed = saved ? saved.isAnswerRevealed : false;
      this.isLocked = saved ? saved.isLocked : false;
      this.eliminatedOptions = saved ? saved.eliminatedOptions : [];
      this.audiencePollData = saved ? saved.audiencePollData : null;
      this.timeRemaining = this.timerDuration;
      if (!this.isLocked && !this.isAnswerRevealed) {
        this.startTimer();
      }
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.filteredQuestions.length - 1) {
      this.saveCurrentQuestionState();
      this.currentIndex++;
      this.restoreQuestionState(this.currentIndex, false);
      this.saveProgress();
      this.notifyStateChange();
      return true;
    }
    return false;
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.saveCurrentQuestionState();
      this.currentIndex--;
      this.restoreQuestionState(this.currentIndex, true);
      this.saveProgress();
      this.notifyStateChange();
      return true;
    }
    return false;
  }

  jumpToQuestion(index) {
    if (index >= 0 && index < this.filteredQuestions.length) {
      this.saveCurrentQuestionState();
      const isBackwards = index < this.currentIndex || index < this.maxVisitedIndex;
      this.currentIndex = index;
      this.restoreQuestionState(this.currentIndex, isBackwards);
      this.saveProgress();
      this.notifyStateChange();
      return true;
    }
    return false;
  }

  resetQuestionState() {
    this.stopTimer();
    this.timeRemaining = this.timerDuration;
    this.isAnswerRevealed = false;
    this.isLocked = false;
    this.selectedOptionIndex = null;
    this.eliminatedOptions = [];
    this.audiencePollData = null;
  }

  // ── Scoring & Stats ─────────────────────────────────────────
  getTotalScore() {
    return this.getScoreStats().totalScore;
  }

  getScoreStats() {
    let score = 0;
    let correct = 0;
    let wrong = 0;
    let attempted = 0;
    const questions = this.filteredQuestions || [];
    const totalQuestions = questions.length;
    let maxPossibleScore = 0;

    questions.forEach(q => {
      maxPossibleScore += (q.points || 10);
    });

    const merged = { ...this.questionStates };
    if (this.selectedOptionIndex !== null && this.selectedOptionIndex !== undefined) {
      merged[this.currentIndex] = {
        selectedOptionIndex: this.selectedOptionIndex,
        isAnswerRevealed: this.isAnswerRevealed
      };
    }

    for (const [idxStr, state] of Object.entries(merged)) {
      const idx = parseInt(idxStr, 10);
      const q = questions[idx];
      if (q && state && state.selectedOptionIndex !== null && state.selectedOptionIndex !== undefined) {
        attempted++;
        if (state.selectedOptionIndex === q.correctIndex) {
          correct++;
          score += (q.points || 10);
        } else {
          wrong++;
        }
      }
    }

    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 100;
    const progressPercent = maxPossibleScore > 0 ? Math.min(100, Math.round((score / maxPossibleScore) * 100)) : 0;

    return {
      totalScore: score,
      correctCount: correct,
      wrongCount: wrong,
      attemptedCount: attempted,
      totalQuestions: totalQuestions,
      maxPossibleScore: maxPossibleScore || (totalQuestions * 10),
      accuracyPercent: accuracy,
      progressPercent: progressPercent
    };
  }

  // ── Timer Methods ──────────────────────────────────────────
  setTimerDuration() {
    this.timerDuration = 15;
    this.isUntimed = false;
    if (!this.isTimerRunning) {
      this.timeRemaining = 15;
    }
    this.saveTimerSettings();
    if (this.onTick) {
      this.onTick(this.timeRemaining, 15);
    }
    this.notifyStateChange();
  }

  startTimer() {
    this.hasStarted = true;
    if (this.isTimerRunning) return;
    if (this.isUntimed) {
      this.isTimerRunning = true;
      this.notifyStateChange();
      return;
    }

    this.isTimerRunning = true;

    if (this.timeRemaining <= 0) {
      this.timeRemaining = this.timerDuration;
    }

    if (window.soundEngine) window.soundEngine.init();

    this.timerInterval = setInterval(() => {
      this.timeRemaining--;

      const isUrgent = this.timeRemaining <= this.urgentThreshold && this.timeRemaining > 0;
      if (window.soundEngine && this.timeRemaining > 0) {
        if (this.soundMode === 'all') {
          window.soundEngine.playTick(isUrgent);
        } else if (this.soundMode === 'urgent_only' && isUrgent) {
          window.soundEngine.playTick(true);
        }
      }

      if (this.onTick) {
        this.onTick(this.timeRemaining, this.timerDuration);
      }

      if (this.timeRemaining <= 0) {
        this.stopTimer();
        if (window.soundEngine && this.soundMode !== 'silent') {
          window.soundEngine.playWrong();
        }
        if (this.autoRevealOnTimeUp) {
          this.revealAnswer();
        }
        if (this.onTimeUp) {
          this.onTimeUp();
        }
      }
      this.notifyStateChange();
    }, 1000);

    this.notifyStateChange();
  }

  pauseTimer() {
    this.isTimerRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.notifyStateChange();
  }

  stopTimer() {
    this.pauseTimer();
  }

  resetTimer() {
    this.hasStarted = false;
    this.pauseTimer();
    this.timeRemaining = this.timerDuration;
    if (this.onTick) {
      this.onTick(this.timeRemaining, this.timerDuration);
    }
    this.notifyStateChange();
  }

  addExtraTime(seconds = 5) {
    this.timeRemaining = Math.min(15, this.timeRemaining + seconds);
    this.timerDuration = 15;
    if (window.soundEngine) window.soundEngine.playLifeline();
    if (this.onTick) {
      this.onTick(this.timeRemaining, 15);
    }
    this.notifyStateChange();
  }

  deductTime(seconds = 5) {
    this.timeRemaining = Math.max(0, this.timeRemaining - seconds);
    this.timerDuration = 15;
    if (this.onTick) {
      this.onTick(this.timeRemaining, 15);
    }
    if (this.timeRemaining === 0 && this.isTimerRunning) {
      this.stopTimer();
      if (window.soundEngine && this.soundMode !== 'silent') {
        window.soundEngine.playWrong();
      }
      if (this.autoRevealOnTimeUp) {
        this.revealAnswer();
      }
      if (this.onTimeUp) {
        this.onTimeUp();
      }
    }
    this.notifyStateChange();
  }

  // ── Selection & Answer Reveal ──────────────────────────────
  selectOption(index) {
    if (this.isLocked || this.isAnswerRevealed || this.timeRemaining <= 0) return;
    if (this.eliminatedOptions.includes(index)) return;

    this.selectedOptionIndex = index;
    this.isLocked = true;
    // Reveal answer immediately when participant selects option
    this.revealAnswer();
    this.saveCurrentQuestionState();
    this.saveProgress();
  }

  revealAnswer() {
    this.isAnswerRevealed = true;
    this.pauseTimer();

    const q = this.getCurrentQuestion();
    if (q) {
      const isCorrect = this.selectedOptionIndex === q.correctIndex;
      if (window.soundEngine) {
        if (isCorrect) {
          window.soundEngine.playCorrect();
        } else {
          window.soundEngine.playWrong();
        }
      }
    }
    this.saveProgress();
    this.notifyStateChange();
  }

  toggleAnswerReveal() {
    if (this.isAnswerRevealed) {
      this.isAnswerRevealed = false;
      this.notifyStateChange();
    } else {
      this.revealAnswer();
    }
  }

  // ── Lifelines ──────────────────────────────────────────────
  useFiftyFifty() {
    const q = this.getCurrentQuestion();
    if (!q || this.isAnswerRevealed || this.timeRemaining <= 0 || this.eliminatedOptions.length > 0) return false;

    const wrongIndices = [];
    q.options.forEach((opt, idx) => {
      if (idx !== q.correctIndex) {
        wrongIndices.push(idx);
      }
    });

    wrongIndices.sort(() => Math.random() - 0.5);
    this.eliminatedOptions = wrongIndices.slice(0, 2);

    if (window.soundEngine) window.soundEngine.playLifeline();
    this.saveProgress();
    this.notifyStateChange();
    return true;
  }

  useAudiencePoll() {
    const q = this.getCurrentQuestion();
    if (!q || this.isAnswerRevealed || this.timeRemaining <= 0 || this.audiencePollData) return false;

    const correctIdx = q.correctIndex;
    const percentages = [0, 0, 0, 0];
    const correctPercent = Math.floor(Math.random() * 26) + 60;
    percentages[correctIdx] = correctPercent;
    
    let remaining = 100 - correctPercent;
    const remainingIndices = [0, 1, 2, 3].filter(i => i !== correctIdx && !this.eliminatedOptions.includes(i));
    
    remainingIndices.forEach((idx, i) => {
      if (i === remainingIndices.length - 1) {
        percentages[idx] = remaining;
      } else {
        const share = Math.floor(Math.random() * (remaining - 5));
        percentages[idx] = Math.max(2, share);
        remaining -= percentages[idx];
      }
    });

    this.audiencePollData = percentages;
    if (window.soundEngine) window.soundEngine.playLifeline();
    this.saveProgress();
    this.notifyStateChange();
    return true;
  }

  notifyStateChange() {
    if (this.onStateChange) {
      this.onStateChange(this);
    }
  }
}

window.quizEngine = new QuizEngine();
