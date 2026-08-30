/**
 * Meelad Fest Goliyangadi - Firebase Configuration & Initialization
 * Project: goliyangadi-quiz
 */

// Default Firebase Configuration for goliyangadi-quiz
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyA6EkfYXyjNQtxUlyXVXuxpLBjHa_M9N_I",
  authDomain: "goliyangadi-quiz.firebaseapp.com",
  databaseURL: "https://goliyangadi-quiz-default-rtdb.firebaseio.com",
  projectId: "goliyangadi-quiz",
  storageBucket: "goliyangadi-quiz.firebasestorage.app",
  messagingSenderId: "470818301689",
  appId: "1:470818301689:web:ede3b4871fc296c9e6e428",
  measurementId: "G-RYER1NMGZ1"
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
