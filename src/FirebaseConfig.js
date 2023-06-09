// import firebase, { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// import fires from "firebase/firestore";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_KEY,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BACKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = firebaseApp.firestore();
// getFirestore(firebaseApp);
