// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

console.log(app);
