/**
 * Meelad Fest Goliyangadi - Authentication & Session Manager
 * Provides Contestant and Host/Admin role management with persistence.
 */

class AuthManager {
  constructor() {
    this.sessionKey = 'meelad_quiz_auth_session_v1';
    this.adminPinKey = 'meelad_quiz_admin_pin_v1';
    this.defaultAdminPin = 'meelad2026';
    
    this.currentUser = null;
    this.onAuthChange = null;

    this.loadSession();
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

  loginAdmin(pin) {
    const validPin = this.getAdminPin();
    if (!pin || pin.trim() !== validPin) {
      return { success: false, message: 'Invalid Admin PIN. Please try again.' };
    }

    this.currentUser = {
      id: 'admin_host',
      name: 'Host Admin',
      role: 'admin',
      loginTime: new Date().toISOString()
    };

    this.saveSession();
    if (this.onAuthChange) this.onAuthChange(this.currentUser);
    return { success: true, user: this.currentUser };
  }

  loginContestant(name) {
    const trimmed = (name || '').trim();
    if (!trimmed || trimmed.length < 2) {
      return { success: false, message: 'Please enter a valid contestant name (at least 2 characters).' };
    }

    // Ensure participant exists in scoreboardManager if available
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
      role: 'contestant',
      loginTime: new Date().toISOString()
    };

    this.saveSession();
    if (this.onAuthChange) this.onAuthChange(this.currentUser);
    return { success: true, user: this.currentUser };
  }

  logout() {
    this.currentUser = null;
    this.saveSession();
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
