import { signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { auth } from './firebase.js'

const logout = document.querySelector("#LogOut");

logout.addEventListener('click', async () => {
    await signOut(auth);
    console.log("User signed out");
})