/**
 * Meelad Fest Goliyangadi - Firebase Configuration & Initialization
 * Project: goliyangadi-quiz
 */

// Default Firebase Configuration for goliyangadi-quiz
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDummyKeyReplaceWithYourOwnIfCustom",
  authDomain: "goliyangadi-quiz.firebaseapp.com",
  projectId: "goliyangadi-quiz",
  storageBucket: "goliyangadi-quiz.firebasestorage.app",
  messagingSenderId: "1008766776695",
  appId: "1:1008766776695:web:goliyangadi_quiz_app"
};

// Check if user has saved custom Firebase config in localStorage
function getActiveFirebaseConfig() {
  try {
    const saved = localStorage.getItem('meelad_firebase_config_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.projectId) return parsed;
    }
  } catch (e) {
    console.warn('Could not read saved Firebase config:', e);
  }
  return DEFAULT_FIREBASE_CONFIG;
}

function saveCustomFirebaseConfig(config) {
  try {
    localStorage.setItem('meelad_firebase_config_v1', JSON.stringify(config));
    window.location.reload();
  } catch (e) {
    console.error('Error saving Firebase config:', e);
  }
}

// Initialize Firebase
let firebaseApp = null;
let firebaseAuth = null;
let firestoreDb = null;
let isFirebaseInitialized = false;

try {
  const config = getActiveFirebaseConfig();
  if (typeof firebase !== 'undefined' && firebase.initializeApp) {
    if (!firebase.apps.length) {
      firebaseApp = firebase.initializeApp(config);
    } else {
      firebaseApp = firebase.app();
    }
    
    if (firebase.auth) {
      firebaseAuth = firebase.auth();
    }
    
    if (firebase.firestore) {
      firestoreDb = firebase.firestore();
      // Enable offline persistence
      try {
        firestoreDb.enablePersistence({ synchronizeTabs: true }).catch(err => {
          if (err.code === 'failed-precondition' || err.code === 'unimplemented') {
            console.info('Firestore offline persistence not available in this mode.');
          }
        });
      } catch (e) {
        // Ignored
      }
    }
    
    isFirebaseInitialized = true;
    console.log('✅ Firebase initialized successfully for project:', config.projectId);
  }
} catch (error) {
  console.warn('⚠️ Firebase initialization deferred or requires credentials:', error.message);
  isFirebaseInitialized = false;
}

window.firebaseApp = firebaseApp;
window.firebaseAuth = firebaseAuth;
window.firestoreDb = firestoreDb;
window.isFirebaseInitialized = isFirebaseInitialized;
window.getActiveFirebaseConfig = getActiveFirebaseConfig;
window.saveCustomFirebaseConfig = saveCustomFirebaseConfig;
