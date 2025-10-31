// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBloxz9fF45enDd3KgRig7_MheHmLTHz9Q",
    authDomain: "neural-nexus-3297e.firebaseapp.com",
    projectId: "neural-nexus-3297e",
    storageBucket: "neural-nexus-3297e.firebasestorage.app",
    messagingSenderId: "1062225093853",
    appId: "1:1062225093853:web:b660531a412c8629f0e734",
    measurementId: "G-NJ7G5NPSDX"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
