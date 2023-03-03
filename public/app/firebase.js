// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyBSqtde50MPDLQfb5wlBUdOskdRT0XALtg",
    authDomain: "fir-auth-974a3.firebaseapp.com",
    projectId: "fir-auth-974a3",
    storageBucket: "fir-auth-974a3.appspot.com",
    messagingSenderId: "667328101116",
    appId: "1:667328101116:web:caa0771f47d520a4bf7579",
    measurementId: "G-0B5SX2D8YY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
