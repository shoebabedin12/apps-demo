// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaA6lr0gMwjyvBST87kyf6msMASsFWaz4",
  authDomain: "watch-faces-watchwizard-web.firebaseapp.com",
  projectId: "watch-faces-watchwizard-web",
  storageBucket: "watch-faces-watchwizard-web.appspot.com",
  messagingSenderId: "615578886921",
  appId: "1:615578886921:web:52a787e57b56064b38a9d8",
  measurementId: "G-PCFQJZHLZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
