import './app/signinForm.js';
import './app/signupForm.js';
import './app/logout.js';
import { loginCheck } from './app/loginCheck.js'

import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { auth } from './app/firebase.js';

onAuthStateChanged(auth, async (user) => {
    if(user) {
        loginCheck(user);
    }
})
