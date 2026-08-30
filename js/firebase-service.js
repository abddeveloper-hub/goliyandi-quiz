/**
 * Meelad Fest Goliyangadi - Firebase Service Layer
 * Manages Firebase Email/Password Auth & Real-Time Firestore Database
 */

class FirebaseService {
  constructor() {
    this.auth = window.firebaseAuth || null;
    this.db = window.firestoreDb || null;
    this.participantsUnsubscribe = null;
  }

  isAvailable() {
    const config = (typeof window.getActiveFirebaseConfig === 'function') ? window.getActiveFirebaseConfig() : null;
    if (!config || !config.apiKey || config.apiKey.includes('DummyKey') || config.apiKey.length < 20) {
      return false;
    }
    return Boolean(window.isFirebaseInitialized && this.auth && this.db);
  }

  // ════ AUTHENTICATION METHODS (NAME & PHONE) ═══════════════

  /**
   * Register a new user with User Name & Phone Number
   */
  async signUpWithPhone(name, phone, role = 'contestant') {
    const cleanPhone = String(phone || '').trim().replace(/[^0-9+]/g, '');
    const cleanName = String(name || '').trim();

    if (!cleanName || cleanName.length < 2) {
      return { success: false, message: 'Please enter a valid contestant / team name.' };
    }
    if (!cleanPhone || cleanPhone.length < 5) {
      return { success: false, message: 'Please enter a valid phone number (at least 5-10 digits).' };
    }

    const userId = 'u_' + cleanPhone.replace(/\+/g, '');
    const userDoc = {
      uid: userId,
      displayName: cleanName,
      name: cleanName,
      phone: cleanPhone,
      role: role || 'contestant',
      updatedAt: (window.firebase && window.firebase.firestore && window.firebase.firestore.FieldValue) ? 
        firebase.firestore.FieldValue.serverTimestamp() : new Date().toISOString()
    };

    if (this.isAvailable() && this.db) {
      try {
        await this.db.collection('users').doc(userId).set(userDoc, { merge: true });
        await this.ensureParticipantRecord(userId, cleanName, cleanPhone);
      } catch (err) {
        console.warn('Firestore user save notice:', err);
      }
    }

    return { success: true, user: userDoc };
  }

  /**
   * Sign In with User Name & Phone Number
   */
  async signInWithPhone(name, phone) {
    const cleanPhone = String(phone || '').trim().replace(/[^0-9+]/g, '');
    const cleanName = String(name || '').trim();

    if (!cleanName || cleanName.length < 2) {
      return { success: false, message: 'Please enter your registered user name.' };
    }
    if (!cleanPhone || cleanPhone.length < 5) {
      return { success: false, message: 'Please enter your phone number.' };
    }

    const userId = 'u_' + cleanPhone.replace(/\+/g, '');
    let userDoc = {
      uid: userId,
      displayName: cleanName,
      name: cleanName,
      phone: cleanPhone,
      role: 'contestant'
    };

    if (this.isAvailable() && this.db) {
      try {
        const snap = await this.db.collection('users').doc(userId).get();
        if (snap.exists) {
          userDoc = { ...userDoc, ...snap.data(), name: cleanName, displayName: cleanName, phone: cleanPhone };
          await this.db.collection('users').doc(userId).set(userDoc, { merge: true });
        } else {
          await this.db.collection('users').doc(userId).set({
            ...userDoc,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        }
        await this.ensureParticipantRecord(userId, cleanName, cleanPhone);
      } catch (err) {
        console.warn('Firestore read error during signIn:', err);
      }
    }

    return { success: true, user: userDoc };
  }

  /**
   * Legacy alias for backward compatibility
   */
  async signUp(emailOrName, passwordOrPhone, displayName, role = 'contestant') {
    const name = displayName || emailOrName;
    const phone = passwordOrPhone || emailOrName;
    return this.signUpWithPhone(name, phone, role);
  }

  /**
   * Legacy alias for backward compatibility
   */
  async signIn(emailOrName, passwordOrPhone) {
    return this.signInWithPhone(emailOrName, passwordOrPhone);
  }

  /**
   * Sign out current user
   */
  async signOut() {
    if (this.auth) {
      try {
        await this.auth.signOut();
      } catch (e) {
        console.warn('Sign out error:', e);
      }
    }
  }

  /**
   * Listen to Auth state changes
   */
  onAuthStateChanged(callback) {
    if (!this.auth) return () => {};
    return this.auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        let userDocData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName || firebaseUser.email.split('@')[0],
          role: 'contestant'
        };
        try {
          if (this.db) {
            const snap = await this.db.collection('users').doc(firebaseUser.uid).get();
            if (snap.exists) userDocData = { ...userDocData, ...snap.data() };
          }
        } catch (e) {
          // Fallback
        }
        callback(userDocData);
      } else {
        callback(null);
      }
    });
  }

  // ════ FIRESTORE REAL-TIME DATABASE METHODS ════════════════

  /**
   * Real-time listener for the participants leaderboard collection
   */
  listenToParticipants(onUpdate, onError) {
    if (!this.db) return () => {};

    try {
      this.participantsUnsubscribe = this.db.collection('participants')
        .onSnapshot((snapshot) => {
          const participants = [];
          snapshot.forEach(doc => {
            participants.push({ id: doc.id, ...doc.data() });
          });
          onUpdate(participants);
        }, (error) => {
          console.warn('Firestore participants listen error:', error);
          if (onError) onError(error);
        });

      return this.participantsUnsubscribe;
    } catch (e) {
      console.warn('Could not attach Firestore listener:', e);
      return () => {};
    }
  }

  /**
   * Ensure a participant record exists for a contestant
   */
  async ensureParticipantRecord(id, name, phone = '') {
    if (!this.db) return;
    try {
      const ref = this.db.collection('participants').doc(id);
      const snap = await ref.get();
      if (!snap.exists) {
        await ref.set({
          name: name.trim(),
          phone: phone ? phone.trim() : '',
          score: 0,
          correct: 0,
          wrong: 0,
          color: '#10b981',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      } else {
        const update = {};
        if (name) update.name = name.trim();
        if (phone) update.phone = phone.trim();
        await ref.set(update, { merge: true });
      }
    } catch (e) {
      console.warn('Error ensuring participant doc:', e);
    }
  }

  /**
   * Update participant score in Firestore
   */
  async updateParticipantScore(id, score, correct = null, wrong = null) {
    if (!this.db) return;
    try {
      const updateData = {
        score: Math.max(0, parseInt(score, 10) || 0),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      };
      if (correct !== null) updateData.correct = correct;
      if (wrong !== null) updateData.wrong = wrong;

      await this.db.collection('participants').doc(id).set(updateData, { merge: true });
    } catch (e) {
      console.warn('Error updating score in Firestore:', e);
    }
  }

  /**
   * Add a new participant to Firestore
   */
  async addParticipant(participant) {
    if (!this.db) return;
    try {
      const id = participant.id || ('p_' + Date.now());
      await this.db.collection('participants').doc(id).set({
        ...participant,
        id: id,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } catch (e) {
      console.warn('Error adding participant to Firestore:', e);
    }
  }

  /**
   * Delete participant from Firestore
   */
  async deleteParticipant(id) {
    if (!this.db) return;
    try {
      await this.db.collection('participants').doc(id).delete();
    } catch (e) {
      console.warn('Error deleting participant from Firestore:', e);
    }
  }

  /**
   * Reset all participant scores to 0 in Firestore
   */
  async resetAllScores(participants) {
    if (!this.db) return;
    try {
      const batch = this.db.batch();
      participants.forEach(p => {
        const ref = this.db.collection('participants').doc(p.id);
        batch.update(ref, {
          score: 0,
          correct: 0,
          wrong: 0,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      });
      await batch.commit();
    } catch (e) {
      console.warn('Error resetting scores in Firestore:', e);
    }
  }

  // ════ ERROR HANDLING HELPER ══════════════════════════════
  getFriendlyErrorMessage(error) {
    if (!error) return 'An unknown error occurred.';
    switch (error.code) {
      case 'auth/invalid-email':
        return 'The email address is invalid.';
      case 'auth/user-disabled':
        return 'This account has been disabled.';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'Incorrect email or password. Please verify and try again.';
      case 'auth/email-already-in-use':
        return 'An account already exists with this email. Please log in.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters long.';
      case 'auth/operation-not-allowed':
        return 'Email/Password sign-in is not enabled in Firebase Console. Please enable it under Firebase Authentication -> Sign-in method.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection.';
      default:
        return error.message || 'Authentication failed. Please try again.';
    }
  }
}

window.firebaseService = new FirebaseService();
