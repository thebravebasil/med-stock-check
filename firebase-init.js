// Shared Firebase setup, imported by both login.html and index.html.
// This config is safe to be public — it identifies your project, it's
// not a secret key. Your actual security lives in Firestore's Rules tab.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbSROo_syHFJgL-Oks5MfC4Qd4OOQZQwA",
  authDomain: "med-stock-check.firebaseapp.com",
  projectId: "med-stock-check",
  storageBucket: "med-stock-check.firebasestorage.app",
  messagingSenderId: "909449340331",
  appId: "1:909449340331:web:1b67d3bfa2de356f185eee",
  measurementId: "G-PC20VEDB2Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
