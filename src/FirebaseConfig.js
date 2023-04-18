
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_KEY,
    storageBucket: process.env.FIREBASE_STORAGE_BACKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  export default firebase;