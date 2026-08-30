/**
 * Meelad Fest Goliyangadi - Authentication & Session Manager
 * Integrated with Firebase Authentication (Email/Password) & Firestore User Profiles
 */

class AuthManager {
  constructor() {
    this.sessionKey = 'meelad_quiz_auth_session_v1';
    this.adminPinKey = 'meelad_quiz_admin_pin_v1';
    this.defaultAdminPin = 'meelad2026';
    
    this.currentUser = null;
    this.onAuthChange = null;

    this.loadSession();
    this.initFirebaseListener();
  }

  initFirebaseListener() {
    // Check if Firebase Service is available and hook into real-time auth changes
    if (window.firebaseService) {
      window.firebaseService.onAuthStateChanged((firebaseUserDoc) => {
        if (firebaseUserDoc) {
          this.currentUser = {
            id: firebaseUserDoc.uid,
            name: firebaseUserDoc.displayName || firebaseUserDoc.email,
            email: firebaseUserDoc.email,
            role: firebaseUserDoc.role || 'contestant',
            isFirebase: true,
            loginTime: new Date().toISOString()
          };
          this.saveSession();
          if (this.onAuthChange) this.onAuthChange(this.currentUser);
        }
      });
    }
  }

  loadSession() {
    try {
      const data = localStorage.getItem(this.sessionKey);
      if (data) {
        this.currentUser = JSON.parse(data);
      } else {
        this.currentUser = null;
      }
    } catch (e) {
      console.warn('Could not parse auth session:', e);
      this.currentUser = null;
    }
  }

  saveSession() {
    try {
      if (this.currentUser) {
        localStorage.setItem(this.sessionKey, JSON.stringify(this.currentUser));
      } else {
        localStorage.removeItem(this.sessionKey);
      }
    } catch (e) {
      console.warn('Could not save auth session:', e);
    }
  }

  getAdminPin() {
    return localStorage.getItem(this.adminPinKey) || this.defaultAdminPin;
  }

  setAdminPin(newPin) {
    if (!newPin || newPin.trim().length < 4) {
      throw new Error('PIN must be at least 4 characters long.');
    }
    localStorage.setItem(this.adminPinKey, newPin.trim());
  }

  // ════ FIREBASE EMAIL / PASSWORD SIGN IN ══════════════════
  async loginWithEmail(email, password) {
    if (!email || !password) {
      return { success: false, message: 'Please provide both email and password.' };
    }

    if (window.firebaseService && window.firebaseService.isAvailable()) {
      const res = await window.firebaseService.signIn(email, password);
      if (res.success) {
        this.currentUser = {
          id: res.user.uid,
          name: res.user.displayName || res.user.email.split('@')[0],
          email: res.user.email,
          role: res.user.role || 'contestant',
          isFirebase: true,
          loginTime: new Date().toISOString()
        };
        this.saveSession();
        if (this.onAuthChange) this.onAuthChange(this.currentUser);
        return { success: true, user: this.currentUser };
      }
      return res;
    }

    // Local simulated auth if Firebase is waiting for credentials
    const cleanName = email.split('@')[0];
    this.currentUser = {
      id: 'usr_' + Date.now(),
      name: cleanName.charAt(0).toUpperCase() + cleanName.slice(1),
      email: email.trim(),
      role: 'contestant',
      isFirebase: false,
      loginTime: new Date().toISOString()
    };
    this.saveSession();
    if (this.onAuthChange) this.onAuthChange(this.currentUser);
    return { success: true, user: this.currentUser };
  }

  // ════ FIREBASE EMAIL / PASSWORD SIGN UP ══════════════════
  async signUpWithEmail(email, password, displayName, role = 'contestant') {
    if (!email || !password || !displayName) {
      return { success: false, message: 'Please fill in all required fields (Name, Email, Password).' };
    }

    if (password.length < 6) {
      return { success: false, message: 'Password must be at least 6 characters.' };
    }

    if (window.firebaseService && window.firebaseService.isAvailable()) {
      const res = await window.firebaseService.signUp(email, password, displayName, role);
      if (res.success) {
        this.currentUser = {
          id: res.user.uid,
          name: res.user.displayName,
          email: res.user.email,
          role: res.user.role,
          isFirebase: true,
          loginTime: new Date().toISOString()
        };
        this.saveSession();
        if (this.onAuthChange) this.onAuthChange(this.currentUser);
        return { success: true, user: this.currentUser };
      }
      return res;
    }

    // Local fallback if Firebase not configured
    this.currentUser = {
      id: 'usr_' + Date.now(),
      name: displayName.trim(),
      email: email.trim(),
      role: role,
      isFirebase: false,
      loginTime: new Date().toISOString()
    };
    this.saveSession();
    if (this.onAuthChange) this.onAuthChange(this.currentUser);
    return { success: true, user: this.currentUser };
  }

  // ════ HOST ADMIN MASTER PIN LOGIN ════════════════════════
  loginAdmin(pin) {
    const validPin = this.getAdminPin();
    if (!pin || pin.trim() !== validPin) {
      return { success: false, message: 'Invalid Admin PIN. Please try again.' };
    }

    this.currentUser = {
      id: 'admin_host',
      name: 'Host Admin',
      email: 'admin@goliyangadi.quiz',
      role: 'admin',
      isFirebase: false,
      loginTime: new Date().toISOString()
    };

    this.saveSession();
    if (this.onAuthChange) this.onAuthChange(this.currentUser);
    return { success: true, user: this.currentUser };
  }

  // ════ QUICK CONTESTANT NAME LOGIN ════════════════════════
  loginContestant(name) {
    const trimmed = (name || '').trim();
    if (!trimmed || trimmed.length < 2) {
      return { success: false, message: 'Please enter a valid contestant name (at least 2 characters).' };
    }

    // Ensure participant exists in scoreboardManager / Firestore
    let participantId = 'p_' + trimmed.toLowerCase().replace(/[^a-z0-9]/g, '_');
    if (window.scoreboardManager) {
      const existing = window.scoreboardManager.getParticipants().find(
        p => p.name.toLowerCase() === trimmed.toLowerCase()
      );
      if (existing) {
        participantId = existing.id;
      } else {
        const added = window.scoreboardManager.addParticipant(trimmed);
        if (added) participantId = added.id;
      }
    }

    this.currentUser = {
      id: participantId,
      name: trimmed,
      email: `${participantId}@goliyangadi.quiz`,
      role: 'contestant',
      isFirebase: false,
      loginTime: new Date().toISOString()
    };

    this.saveSession();
    if (this.onAuthChange) this.onAuthChange(this.currentUser);
    return { success: true, user: this.currentUser };
  }

  // ════ LOGOUT ═════════════════════════════════════════════
  async logout() {
    this.currentUser = null;
    this.saveSession();
    if (window.firebaseService) {
      await window.firebaseService.signOut();
    }
    if (this.onAuthChange) this.onAuthChange(null);
  }

  isLoggedIn() {
    return this.currentUser !== null;
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role === 'admin';
  }

  isContestant() {
    return this.currentUser && this.currentUser.role === 'contestant';
  }

  getCurrentUser() {
    return this.currentUser;
  }
}

// Global Singleton
window.authManager = new AuthManager();
