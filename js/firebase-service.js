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
    return Boolean(window.isFirebaseInitialized && this.auth && this.db);
  }

  // ════ AUTHENTICATION METHODS ═════════════════════════════

  /**
   * Register a new user with Email & Password
   */
  async signUp(email, password, displayName, role = 'contestant') {
    if (!this.isAvailable()) {
      return { success: false, message: 'Firebase service is not initialized yet. Check your config.' };
    }

    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(email.trim(), password);
      const user = userCredential.user;

      if (displayName) {
        await user.updateProfile({ displayName: displayName.trim() });
      }

      // Save user profile in Firestore
      const userDoc = {
        uid: user.uid,
        email: user.email,
        displayName: displayName ? displayName.trim() : user.email.split('@')[0],
        role: role,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      };

      await this.db.collection('users').doc(user.uid).set(userDoc, { merge: true });

      // If registered as contestant, ensure participant doc exists
      if (role === 'contestant') {
        await this.ensureParticipantRecord(user.uid, userDoc.displayName);
      }

      return { success: true, user: userDoc };
    } catch (error) {
      console.error('Firebase SignUp Error:', error);
      return { success: false, message: this.getFriendlyErrorMessage(error) };
    }
  }

  /**
   * Sign In with Email & Password
   */
  async signIn(email, password) {
    if (!this.isAvailable()) {
      return { success: false, message: 'Firebase service is not initialized yet.' };
    }

    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email.trim(), password);
      const user = userCredential.user;

      // Fetch user profile from Firestore
      let userDocData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || user.email.split('@')[0],
        role: 'contestant'
      };

      try {
        const docSnap = await this.db.collection('users').doc(user.uid).get();
        if (docSnap.exists) {
          userDocData = { ...userDocData, ...docSnap.data() };
        } else {
          await this.db.collection('users').doc(user.uid).set(userDocData, { merge: true });
        }
      } catch (docErr) {
        console.warn('Could not read user doc from Firestore:', docErr);
      }

      return { success: true, user: userDocData };
    } catch (error) {
      console.error('Firebase SignIn Error:', error);
      return { success: false, message: this.getFriendlyErrorMessage(error) };
    }
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
  async ensureParticipantRecord(id, name) {
    if (!this.db) return;
    try {
      const ref = this.db.collection('participants').doc(id);
      const snap = await ref.get();
      if (!snap.exists) {
        await ref.set({
          name: name.trim(),
          score: 0,
          correct: 0,
          wrong: 0,
          color: '#10b981',
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
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
