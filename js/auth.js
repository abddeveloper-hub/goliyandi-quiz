/**
 * Meelad Fest Goliyangadi - Authentication & Session Manager
 * Powered by Contestant Name & Phone Number Authentication + Live Firestore Sync
 */

class AuthManager {
  constructor() {
    this.sessionKey = 'meelad_quiz_auth_session_v2';
    this.legacySessionKey = 'meelad_quiz_auth_session_v1';
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
            name: firebaseUserDoc.displayName || firebaseUserDoc.name || 'Contestant',
            phone: firebaseUserDoc.phone || '',
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
      let data = localStorage.getItem(this.sessionKey);
      if (!data) {
        data = localStorage.getItem(this.legacySessionKey);
      }
      if (data) {
        this.currentUser = JSON.parse(data);
        if (this.currentUser && !this.currentUser.phone && this.currentUser.email) {
          this.currentUser.phone = this.currentUser.email.replace(/@.*$/, '');
        }
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
        localStorage.setItem(this.legacySessionKey, JSON.stringify(this.currentUser));
      } else {
        localStorage.removeItem(this.sessionKey);
        localStorage.removeItem(this.legacySessionKey);
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

  // ════ USER NAME & PHONE NUMBER SIGN IN ══════════════════
  async loginWithPhone(name, phone) {
    const cleanName = (name || '').trim();
    const cleanPhone = (phone || '').trim().replace(/[^0-9+]/g, '');

    if (!cleanName || cleanName.length < 2) {
      return { success: false, message: 'Please enter your Contestant / User Name (at least 2 characters).' };
    }
    if (!cleanPhone || cleanPhone.length < 5) {
      return { success: false, message: 'Please enter a valid phone number (at least 5 digits).' };
    }

    const userId = 'usr_' + cleanPhone.replace(/\+/g, '');
    let userObj = {
      id: userId,
      name: cleanName,
      phone: cleanPhone,
      role: 'contestant',
      isFirebase: false,
      loginTime: new Date().toISOString()
    };

    if (window.firebaseService) {
      try {
        const res = await window.firebaseService.signInWithPhone(cleanName, cleanPhone);
        if (res.success && res.user) {
          userObj.id = res.user.uid || userObj.id;
          userObj.role = res.user.role || 'contestant';
          userObj.isFirebase = window.firebaseService.isAvailable();
        }
      } catch (err) {
        console.warn('Firebase signIn notice:', err);
      }
    }

    this.currentUser = userObj;
    this.saveSession();

    // Ensure participant is in scoreboardManager
    if (window.scoreboardManager) {
      const existing = window.scoreboardManager.getParticipants().find(
        p => (p.name && p.name.toLowerCase() === cleanName.toLowerCase()) || (p.phone && p.phone === cleanPhone)
      );
      if (existing) {
        window.scoreboardManager.updateParticipantName(existing.id, cleanName);
        this.currentUser.id = existing.id;
        window.scoreboardManager.setActiveParticipant(existing.id);
        this.saveSession();
      } else {
        const added = window.scoreboardManager.addParticipant(cleanName);
        if (added) {
          this.currentUser.id = added.id;
          window.scoreboardManager.setActiveParticipant(added.id);
          this.saveSession();
        }
      }
    }

    if (this.onAuthChange) this.onAuthChange(this.currentUser);
    return { success: true, user: this.currentUser };
  }

  // ════ USER NAME & PHONE NUMBER SIGN UP ══════════════════
  async signUpWithPhone(name, phone, role = 'contestant') {
    const cleanName = (name || '').trim();
    const cleanPhone = (phone || '').trim().replace(/[^0-9+]/g, '');

    if (!cleanName || cleanName.length < 2) {
      return { success: false, message: 'Please enter Full Name / Team Name (at least 2 characters).' };
    }
    if (!cleanPhone || cleanPhone.length < 5) {
      return { success: false, message: 'Please enter a valid phone number (at least 5 digits).' };
    }

    const userId = 'usr_' + cleanPhone.replace(/\+/g, '');
    let userObj = {
      id: userId,
      name: cleanName,
      phone: cleanPhone,
      role: role || 'contestant',
      isFirebase: false,
      loginTime: new Date().toISOString()
    };

    if (window.firebaseService) {
      try {
        const res = await window.firebaseService.signUpWithPhone(cleanName, cleanPhone, role);
        if (res.success && res.user) {
          userObj.id = res.user.uid || userObj.id;
          userObj.role = res.user.role || role;
          userObj.isFirebase = window.firebaseService.isAvailable();
        }
      } catch (err) {
        console.warn('Firebase signUp notice:', err);
      }
    }

    this.currentUser = userObj;
    this.saveSession();

    if (window.scoreboardManager) {
      const existing = window.scoreboardManager.getParticipants().find(
        p => (p.name && p.name.toLowerCase() === cleanName.toLowerCase()) || (p.phone && p.phone === cleanPhone)
      );
      if (existing) {
        window.scoreboardManager.updateParticipantName(existing.id, cleanName);
        this.currentUser.id = existing.id;
        window.scoreboardManager.setActiveParticipant(existing.id);
        this.saveSession();
      } else {
        const added = window.scoreboardManager.addParticipant(cleanName);
        if (added) {
          this.currentUser.id = added.id;
          window.scoreboardManager.setActiveParticipant(added.id);
          this.saveSession();
        }
      }
    }

    if (this.onAuthChange) this.onAuthChange(this.currentUser);
    return { success: true, user: this.currentUser };
  }

  // ════ BACKWARD COMPATIBLE ALIASES ════════════════════════
  async loginWithEmail(nameOrPhone, phoneOrName) {
    return this.loginWithPhone(nameOrPhone, phoneOrName);
  }

  async signUpWithEmail(nameOrPhone, phoneOrPassword, displayName, role = 'contestant') {
    const finalName = displayName || nameOrPhone;
    const finalPhone = phoneOrPassword || nameOrPhone;
    return this.signUpWithPhone(finalName, finalPhone, role);
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
      phone: 'Admin Master',
      role: 'admin',
      isFirebase: false,
      loginTime: new Date().toISOString()
    };

    this.saveSession();
    if (this.onAuthChange) this.onAuthChange(this.currentUser);
    return { success: true, user: this.currentUser };
  }

  // ════ QUICK CONTESTANT NAME LOGIN ════════════════════════
  loginContestant(name, phone = '') {
    const trimmed = (name || '').trim();
    const cleanPhone = (phone || '').trim().replace(/[^0-9+]/g, '');
    if (!trimmed || trimmed.length < 2) {
      return { success: false, message: 'Please enter a valid contestant name (at least 2 characters).' };
    }

    // Ensure participant exists in scoreboardManager / Firestore
    let participantId = cleanPhone ? ('p_' + cleanPhone.replace(/\+/g, '')) : ('p_' + trimmed.toLowerCase().replace(/[^a-z0-9]/g, '_'));
    if (window.scoreboardManager) {
      const existing = window.scoreboardManager.getParticipants().find(
        p => p.name.toLowerCase() === trimmed.toLowerCase() || (cleanPhone && p.phone === cleanPhone)
      );
      if (existing) {
        participantId = existing.id;
      } else {
        const added = window.scoreboardManager.addParticipant(trimmed);
        if (added) participantId = added.id;
      }
      window.scoreboardManager.setActiveParticipant(participantId);
    }

    this.currentUser = {
      id: participantId,
      name: trimmed,
      phone: cleanPhone || '',
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
