/**
 * Meelad Fest Goliyangadi - Individual Participant Scoreboard & Leaderboard Manager
 * Synchronized with Firebase Firestore Database & localStorage
 * Includes Olympic-Style Shared Rankings, Accuracy Tie-Breaker & Sudden Death Engine
 */

class ScoreboardManager {
  constructor() {
    this.storageKey = 'meelad_quiz_participants_v2';
    this.defaultParticipants = [];
    this.participants = this.loadParticipants();
    this.activeParticipantId = null;
    this.onScoreboardChange = null;

    this.initFirestoreListener();
    this.initStorageListener();
  }

  initFirestoreListener() {
    if (window.firebaseService) {
      window.firebaseService.listenToParticipants((remoteParticipants) => {
        if (Array.isArray(remoteParticipants)) {
          // Filter out dummy placeholders
          this.participants = remoteParticipants.filter(p => p && p.name && !p.name.startsWith('Participant '));
          this.saveLocalOnly();
          if (this.onScoreboardChange) this.onScoreboardChange(this.participants);
        }
      });
    }
  }

  initStorageListener() {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (e) => {
        if (e.key === this.storageKey && e.newValue) {
          try {
            const parsed = JSON.parse(e.newValue);
            if (Array.isArray(parsed)) {
              this.participants = parsed.filter(p => p && p.name && !p.name.startsWith('Participant '));
              if (this.onScoreboardChange) this.onScoreboardChange(this.participants);
            }
          } catch (err) {
            console.warn('Storage sync error:', err);
          }
        }
      });
    }
  }

  loadParticipants() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter(p => p && p.name && !p.name.startsWith('Participant '));
        }
      }
    } catch (e) {
      console.error('Error reading participants from storage:', e);
    }
    return [];
  }

  saveLocalOnly() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.participants));
      localStorage.setItem('meelad_quiz_teams_v1', JSON.stringify(this.participants));
    } catch (e) {
      console.error('Error saving participants locally:', e);
    }
  }

  saveParticipants() {
    this.saveLocalOnly();
    if (this.onScoreboardChange) this.onScoreboardChange(this.participants);
  }

  getParticipants() {
    return this.participants;
  }

  /**
   * Sorts participants using tournament criteria:
   * 1. Total Score (highest first)
   * 2. Fewest Wrong Answers (least mistakes first)
   * 3. Highest Correct Answers (most correct first)
   * 4. Total Response Time (fastest first)
   */
  getRankedParticipants() {
    return [...this.participants].sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const wrongA = a.wrong || 0;
      const wrongB = b.wrong || 0;
      if (wrongA !== wrongB) return wrongA - wrongB; // fewer mistakes is better
      const corrA = a.correct || 0;
      const corrB = b.correct || 0;
      if (corrA !== corrB) return corrB - corrA;
      const timeA = a.totalTime || 9999;
      const timeB = b.totalTime || 9999;
      return timeA - timeB;
    });
  }

  /**
   * Computes Olympic standard rankings with joint tie positions
   * E.g. If two people tie for 1st with same score, ranks are: [1, 1, 3, 4]
   */
  getRankedParticipantsWithTies() {
    const sorted = this.getRankedParticipants();
    if (!sorted.length) return [];

    let currentRank = 1;
    return sorted.map((p, idx, arr) => {
      if (idx > 0) {
        const prev = arr[idx - 1];
        const isIdentical = (
          p.score === prev.score &&
          (p.wrong || 0) === (prev.wrong || 0) &&
          (p.correct || 0) === (prev.correct || 0)
        );
        if (!isIdentical) {
          currentRank = idx + 1; // Olympic skip (e.g. 1, 1 -> 3)
        }
      }

      // Check if this participant is part of a tie group
      const sameRankCount = arr.filter(item => 
        item.score === p.score &&
        (item.wrong || 0) === (p.wrong || 0) &&
        (item.correct || 0) === (p.correct || 0)
      ).length;

      return {
        ...p,
        olympicRank: currentRank,
        isTied: sameRankCount > 1,
        tieCount: sameRankCount
      };
    });
  }

  /**
   * Checks if there is a 1st Place tie
   */
  get1stPlaceTie() {
    const ranked = this.getRankedParticipantsWithTies();
    if (ranked.length < 2) return { hasTie: false, participants: [] };

    const firstRank = ranked[0];
    if (firstRank.score === 0) return { hasTie: false, participants: [] }; // No score yet

    const tiedWinners = ranked.filter(p => p.olympicRank === 1);
    if (tiedWinners.length > 1) {
      return {
        hasTie: true,
        score: firstRank.score,
        participants: tiedWinners
      };
    }

    return { hasTie: false, participants: [] };
  }

  /**
   * Sudden Death Tie-Breaker Resolution:
   * Awards bonus points to break the tie and crown the winner
   */
  resolveSuddenDeath(winnerId, bonusPoints = 10) {
    const winner = this.participants.find(p => p.id === winnerId);
    if (winner) {
      winner.score += bonusPoints;
      winner.correct = (winner.correct || 0) + 1;
      this.saveParticipants();

      if (window.firebaseService && window.firebaseService.isAvailable()) {
        window.firebaseService.updateParticipantScore(winner.id, winner.score, winner.correct, winner.wrong);
      }
      return winner;
    }
    return null;
  }

  addParticipant(name, color) {
    const cleanName = (name || '').trim();
    if (!cleanName) return null;

    // Check if participant already exists with this name
    const existing = this.participants.find(p => p.name.toLowerCase() === cleanName.toLowerCase());
    if (existing) {
      if (color) existing.color = color;
      this.saveParticipants();
      return existing;
    }

    // Check if we can replace an unscored default placeholder
    const defaultPlaceholder = this.participants.find(p => p.name.startsWith('Participant ') && p.score === 0 && (p.correct || 0) === 0);
    if (defaultPlaceholder) {
      defaultPlaceholder.name = cleanName;
      if (color) defaultPlaceholder.color = color;
      this.saveParticipants();
      if (window.firebaseService && window.firebaseService.isAvailable()) {
        window.firebaseService.addParticipant(defaultPlaceholder);
      }
      return defaultPlaceholder;
    }

    const colors = ['#10b981', '#f59e0b', '#06b6d4', '#a855f7', '#ec4899', '#3b82f6', '#14b8a6', '#f97316'];
    const chosenColor = color || colors[this.participants.length % colors.length];
    const newParticipant = {
      id: 'p_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      name: cleanName,
      score: 0,
      correct: 0,
      wrong: 0,
      totalTime: 0,
      color: chosenColor
    };
    this.participants.push(newParticipant);
    this.saveParticipants();

    // Sync to Firestore
    if (window.firebaseService && window.firebaseService.isAvailable()) {
      window.firebaseService.addParticipant(newParticipant);
    }

    return newParticipant;
  }

  updateParticipantName(id, newName) {
    const p = this.participants.find(item => item.id === id);
    if (p && newName.trim()) {
      p.name = newName.trim();
      this.saveParticipants();

      if (window.firebaseService && window.firebaseService.isAvailable()) {
        window.firebaseService.addParticipant(p);
      }
    }
  }

  removeParticipant(id) {
    this.participants = this.participants.filter(item => item.id !== id);
    if (this.activeParticipantId === id) {
      this.activeParticipantId = null;
    }
    this.saveParticipants();

    // Delete in Firestore
    if (window.firebaseService && window.firebaseService.isAvailable()) {
      window.firebaseService.deleteParticipant(id);
    }
  }

  adjustScore(id, delta, isCorrect = null) {
    const p = this.participants.find(item => item.id === id);
    if (p) {
      p.score = Math.max(0, p.score + delta);
      if (isCorrect === true) {
        p.correct = (p.correct || 0) + 1;
      } else if (isCorrect === false) {
        p.wrong = (p.wrong || 0) + 1;
      }
      this.saveParticipants();

      // Sync in Firestore
      if (window.firebaseService && window.firebaseService.isAvailable()) {
        window.firebaseService.updateParticipantScore(id, p.score, p.correct, p.wrong);
      }
      return p;
    }
    return null;
  }

  setScore(id, newScore, correct = null, wrong = null) {
    let p = this.participants.find(item => item.id === id);
    if (!p && id) {
      p = this.participants.find(item => item.name.toLowerCase() === id.toLowerCase() || (item.phone && item.phone === id));
    }
    if (!p && id) {
      const cleanName = (window.authManager && window.authManager.getCurrentUser() && window.authManager.getCurrentUser().name) || id;
      p = this.addParticipant(cleanName);
    }

    if (p) {
      p.score = Math.max(0, parseInt(newScore, 10) || 0);
      if (correct !== null) p.correct = Math.max(0, parseInt(correct, 10) || 0);
      if (wrong !== null) p.wrong = Math.max(0, parseInt(wrong, 10) || 0);
      this.saveParticipants();

      // Sync in Firestore
      if (window.firebaseService && window.firebaseService.isAvailable()) {
        window.firebaseService.updateParticipantScore(p.id, p.score, p.correct, p.wrong);
      }
      return p;
    }
    return null;
  }

  updateParticipantScore(id, score, correct = null, wrong = null) {
    return this.setScore(id, score, correct, wrong);
  }

  resetAllScores() {
    this.participants.forEach(p => {
      p.score = 0;
      p.correct = 0;
      p.wrong = 0;
      p.totalTime = 0;
    });
    this.saveParticipants();

    // Sync in Firestore
    if (window.firebaseService && window.firebaseService.isAvailable()) {
      window.firebaseService.resetAllScores(this.participants);
    }
  }

  resetAndClearAllParticipants() {
    this.participants = [];
    this.saveLocalOnly();
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem('meelad_quiz_teams_v1');
    localStorage.removeItem('meelad_quiz_progress_v2');
    if (this.onScoreboardChange) this.onScoreboardChange(this.participants);

    if (window.firebaseService && window.firebaseService.isAvailable() && window.firestoreDb) {
      window.firestoreDb.collection('participants').get().then(snap => {
        const batch = window.firestoreDb.batch();
        snap.forEach(doc => batch.delete(doc.ref));
        return batch.commit();
      }).catch(e => console.warn('Clear firestore participants:', e));
    }
  }

  resetToDefault() {
    this.participants = [];
    this.saveParticipants();
  }

  setActiveParticipant(id) {
    this.activeParticipantId = id;
  }

  getActiveParticipant() {
    return this.participants.find(p => p.id === this.activeParticipantId) || null;
  }

  // ── Backward-compatible Aliases ───────────────────────────
  getTeams() { return this.getParticipants(); }
  getRankedTeams() { return this.getRankedParticipants(); }
  addTeam(name, color) { return this.addParticipant(name, color); }
  updateTeamName(id, name) { return this.updateParticipantName(id, name); }
  removeTeam(id) { return this.removeParticipant(id); }
  resetToDefaultTeams() { return this.resetToDefault(); }
  setActiveTeam(id) { return this.setActiveParticipant(id); }
  getActiveTeam() { return this.getActiveParticipant(); }
}

window.scoreboardManager = new ScoreboardManager();
