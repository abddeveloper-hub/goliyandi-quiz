/**
 * Meelad Fest Goliyangadi - Admin Question & Round Manager Logic
 * Manages full CRUD operations for Questions & Rounds with Firestore Live Sync & LocalStorage fallback.
 */

class AdminManager {
  constructor() {
    this.storageKey = 'meelad_quiz_questions_v3';
    this.pinStorageKey = 'meelad_quiz_admin_auth';
    this.defaultPin = '2026';
    this.isAuthenticated = false;

    this.questions = [];
    this.filteredQuestions = [];
    this.activeFilterRound = 'all';
    this.activeFilterDifficulty = 'all';
    this.searchQuery = '';
    this.editingQuestionId = null;

    this.init();
  }

  init() {
    this.checkAuthStatus();
    this.loadQuestions();
  }

  // ════════════════════ AUTHENTICATION & PIN GATE ════════════════════

  checkAuthStatus() {
    const authSession = sessionStorage.getItem(this.pinStorageKey);
    if (authSession === 'true') {
      this.isAuthenticated = true;
    }
  }

  verifyPin(inputPin) {
    const cleanPin = String(inputPin || '').trim();
    if (cleanPin === this.defaultPin || cleanPin === 'admin2026' || cleanPin === '786') {
      this.isAuthenticated = true;
      sessionStorage.setItem(this.pinStorageKey, 'true');
      return { success: true };
    }
    return { success: false, message: 'Invalid Admin PIN. Please try again.' };
  }

  logout() {
    this.isAuthenticated = false;
    sessionStorage.removeItem(this.pinStorageKey);
  }

  // ════════════════════ DATA LOADING & PERSISTENCE ═══════════════════

  loadQuestions() {
    // 1. First try localStorage
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.questions = parsed;
          this.applyFilters();
          return;
        }
      }
    } catch (e) {
      console.warn('Error reading from localStorage:', e);
    }

    // 2. Fallback to default questions from questions-data.js
    if (typeof DEFAULT_QUESTIONS !== 'undefined' && Array.isArray(DEFAULT_QUESTIONS)) {
      this.questions = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS));
    } else {
      this.questions = [];
    }

    this.saveToLocalStorage();
    this.applyFilters();

    // 3. Check Firestore asynchronously for synced questions
    this.fetchQuestionsFromFirestore();
  }

  async fetchQuestionsFromFirestore() {
    if (window.firebaseService && window.firebaseService.isAvailable() && window.firestoreDb) {
      try {
        const docSnap = await window.firestoreDb.collection('quiz_bank').doc('master_questions_v3').get();
        if (docSnap.exists) {
          const data = docSnap.data();
          if (data && Array.isArray(data.questions) && data.questions.length > 0) {
            this.questions = data.questions;
            this.saveToLocalStorage();
            this.applyFilters();
            if (typeof this.onDataUpdated === 'function') {
              this.onDataUpdated();
            }
          }
        }
      } catch (err) {
        console.warn('Firestore questions fetch notice:', err);
      }
    }
  }

  saveToLocalStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.questions));
      return true;
    } catch (e) {
      console.error('Error writing questions to localStorage:', e);
      return false;
    }
  }

  async syncToFirestore() {
    if (window.firebaseService && window.firebaseService.isAvailable() && window.firestoreDb) {
      try {
        await window.firestoreDb.collection('quiz_bank').doc('master_questions_v3').set({
          questions: this.questions,
          updatedAt: (window.firebase && window.firebase.firestore && window.firebase.firestore.FieldValue)
            ? firebase.firestore.FieldValue.serverTimestamp()
            : new Date().toISOString(),
          totalCount: this.questions.length
        });
        return { success: true };
      } catch (err) {
        console.error('Error saving to Firestore:', err);
        return { success: false, error: err.message };
      }
    }
    return { success: false, error: 'Firestore offline or unavailable' };
  }

  saveAll() {
    this.saveToLocalStorage();
    this.syncToFirestore();
  }

  // ════════════════════ CRUD OPERATIONS ════════════════════

  getQuestionById(id) {
    return this.questions.find(q => String(q.id) === String(id));
  }

  addQuestion(questionData) {
    const id = questionData.id || `custom_q_${Date.now()}`;
    const newQuestion = {
      id: id,
      round: questionData.round || 'r1',
      roundName: questionData.roundName || 'General Round',
      roundNameMl: questionData.roundNameMl || questionData.roundName || 'പൊതു റൗണ്ട്',
      category: questionData.category || 'General',
      difficulty: questionData.difficulty || 'Medium',
      questionEn: String(questionData.questionEn || '').trim(),
      questionMl: String(questionData.questionMl || '').trim(),
      questionKn: String(questionData.questionKn || '').trim(),
      options: Array.isArray(questionData.options) ? questionData.options : ['', '', '', ''],
      correctIndex: Number(questionData.correctIndex) || 0,
      explanationEn: String(questionData.explanationEn || '').trim(),
      explanationMl: String(questionData.explanationMl || '').trim(),
      points: Number(questionData.points) || 10
    };

    this.questions.push(newQuestion);
    this.saveAll();
    this.applyFilters();
    return newQuestion;
  }

  updateQuestion(id, updatedData) {
    const index = this.questions.findIndex(q => String(q.id) === String(id));
    if (index === -1) return false;

    this.questions[index] = {
      ...this.questions[index],
      round: updatedData.round || this.questions[index].round,
      roundName: updatedData.roundName || this.questions[index].roundName,
      roundNameMl: updatedData.roundNameMl || this.questions[index].roundNameMl,
      category: updatedData.category || this.questions[index].category,
      difficulty: updatedData.difficulty || this.questions[index].difficulty,
      questionEn: String(updatedData.questionEn !== undefined ? updatedData.questionEn : this.questions[index].questionEn).trim(),
      questionMl: String(updatedData.questionMl !== undefined ? updatedData.questionMl : this.questions[index].questionMl).trim(),
      questionKn: String(updatedData.questionKn !== undefined ? updatedData.questionKn : (this.questions[index].questionKn || '')).trim(),
      options: Array.isArray(updatedData.options) ? updatedData.options : this.questions[index].options,
      correctIndex: updatedData.correctIndex !== undefined ? Number(updatedData.correctIndex) : this.questions[index].correctIndex,
      explanationEn: String(updatedData.explanationEn !== undefined ? updatedData.explanationEn : this.questions[index].explanationEn).trim(),
      explanationMl: String(updatedData.explanationMl !== undefined ? updatedData.explanationMl : this.questions[index].explanationMl).trim(),
      points: updatedData.points !== undefined ? Number(updatedData.points) : this.questions[index].points
    };

    this.saveAll();
    this.applyFilters();
    return this.questions[index];
  }

  deleteQuestion(id) {
    const initialLen = this.questions.length;
    this.questions = this.questions.filter(q => String(q.id) !== String(id));
    if (this.questions.length < initialLen) {
      this.saveAll();
      this.applyFilters();
      return true;
    }
    return false;
  }

  cloneQuestion(id) {
    const original = this.getQuestionById(id);
    if (!original) return null;

    const cloned = JSON.parse(JSON.stringify(original));
    cloned.id = `q_copy_${Date.now()}`;
    cloned.questionEn = `${cloned.questionEn} (Copy)`;
    if (cloned.questionMl) {
      cloned.questionMl = `${cloned.questionMl} (പകർപ്പ്)`;
    }

    const index = this.questions.findIndex(q => String(q.id) === String(id));
    this.questions.splice(index + 1, 0, cloned);
    this.saveAll();
    this.applyFilters();
    return cloned;
  }

  moveQuestion(id, direction) {
    const index = this.questions.findIndex(q => String(q.id) === String(id));
    if (index === -1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= this.questions.length) return;

    const temp = this.questions[index];
    this.questions[index] = this.questions[newIndex];
    this.questions[newIndex] = temp;

    this.saveAll();
    this.applyFilters();
  }

  resetToDefaultQuestions() {
    if (typeof DEFAULT_QUESTIONS !== 'undefined' && Array.isArray(DEFAULT_QUESTIONS)) {
      this.questions = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS));
      this.saveAll();
      this.applyFilters();
      return true;
    }
    return false;
  }

  // ════════════════════ ROUNDS & CATEGORIES ════════════════════

  getRoundsList() {
    const roundMap = new Map();
    this.questions.forEach(q => {
      const rKey = q.round || 'r1';
      if (!roundMap.has(rKey)) {
        roundMap.set(rKey, {
          key: rKey,
          name: q.roundName || rKey,
          nameMl: q.roundNameMl || q.roundName || rKey,
          count: 0
        });
      }
      roundMap.get(rKey).count++;
    });
    return Array.from(roundMap.values());
  }

  getCategoriesList() {
    const categories = new Set();
    this.questions.forEach(q => {
      if (q.category) categories.add(q.category);
    });
    return Array.from(categories);
  }

  // ════════════════════ SEARCH & FILTERS ════════════════════

  setFilterRound(roundKey) {
    this.activeFilterRound = roundKey || 'all';
    this.applyFilters();
  }

  setFilterDifficulty(difficulty) {
    this.activeFilterDifficulty = difficulty || 'all';
    this.applyFilters();
  }

  setSearchQuery(query) {
    this.searchQuery = String(query || '').trim().toLowerCase();
    this.applyFilters();
  }

  applyFilters() {
    this.filteredQuestions = this.questions.filter(q => {
      // Round filter
      if (this.activeFilterRound !== 'all' && q.round !== this.activeFilterRound) {
        return false;
      }
      // Difficulty filter
      if (this.activeFilterDifficulty !== 'all' && (q.difficulty || '').toLowerCase() !== this.activeFilterDifficulty.toLowerCase()) {
        return false;
      }
      // Search query
      if (this.searchQuery) {
        const qEn = (q.questionEn || '').toLowerCase();
        const qMl = (q.questionMl || '').toLowerCase();
        const qKn = (q.questionKn || '').toLowerCase();
        const rName = (q.roundName || '').toLowerCase();
        const cat = (q.category || '').toLowerCase();
        const opts = (q.options || []).join(' ').toLowerCase();
        const expEn = (q.explanationEn || '').toLowerCase();
        const expMl = (q.explanationMl || '').toLowerCase();

        const match = qEn.includes(this.searchQuery) ||
          qMl.includes(this.searchQuery) ||
          qKn.includes(this.searchQuery) ||
          rName.includes(this.searchQuery) ||
          cat.includes(this.searchQuery) ||
          opts.includes(this.searchQuery) ||
          expEn.includes(this.searchQuery) ||
          expMl.includes(this.searchQuery);

        if (!match) return false;
      }
      return true;
    });

    if (typeof this.onRenderNeeded === 'function') {
      this.onRenderNeeded();
    }
  }

  // ════════════════════ IMPORT / EXPORT ════════════════════

  exportQuestionsToJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.questions, null, 2));
    const downloadAnchor = document.createElement('a');
    const timestamp = new Date().toISOString().slice(0, 10);
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `meelad_quiz_bank_${timestamp}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importQuestionsFromJson(jsonContent, mode = 'replace') {
    try {
      const parsed = JSON.parse(jsonContent);
      if (!Array.isArray(parsed)) {
        return { success: false, message: 'Invalid format: JSON must be an array of question objects.' };
      }

      // Basic validation
      const validQuestions = parsed.filter(q => q && (q.questionEn || q.questionMl) && Array.isArray(q.options) && q.options.length >= 2);
      if (validQuestions.length === 0) {
        return { success: false, message: 'No valid questions found in file.' };
      }

      if (mode === 'replace') {
        this.questions = validQuestions;
      } else {
        // Merge mode: avoid duplicate IDs
        const existingIds = new Set(this.questions.map(q => String(q.id)));
        validQuestions.forEach(q => {
          if (existingIds.has(String(q.id))) {
            q.id = `imported_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
          }
          this.questions.push(q);
        });
      }

      this.saveAll();
      this.applyFilters();
      return { success: true, count: validQuestions.length };
    } catch (e) {
      return { success: false, message: 'JSON parsing failed: ' + e.message };
    }
  }

  getStats() {
    const totalQuestions = this.questions.length;
    const rounds = this.getRoundsList().length;
    const categories = this.getCategoriesList().length;
    const totalPoints = this.questions.reduce((sum, q) => sum + (Number(q.points) || 10), 0);

    return {
      totalQuestions,
      rounds,
      categories,
      totalPoints
    };
  }
}

// Global instance
window.adminManager = new AdminManager();
