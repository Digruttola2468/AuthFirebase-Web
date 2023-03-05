import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import { setupPosts } from "./app/postList.js";

import './app/signupForm.js'
import './app/signinForm.js'
import './app/postList.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'
import './app/logout.js'
import { showMessage } from "./app/showMessage.js";

// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    if(user.emailVerified){
      console.log("Bienvenido: " + user.displayName);
      loginCheck(user);
    }
  }
});


const eyePasswordLogin = document.querySelector(".eyeLogin");
const loginPassword = document.querySelector("#login-password")
eyePasswordLogin.addEventListener('click', e => {
  e.preventDefault();

  eyePasswordLogin.classList.toggle("fa-eye");
  eyePasswordLogin.classList.toggle("fa-eye-slash");
  
  if(eyePasswordLogin.classList.contains("fa-eye"))loginPassword.type = "password";
  else loginPassword.type = "text";
  
});

