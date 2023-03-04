import { signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js';

const logout = document.querySelector("#LogOut");

logout.addEventListener('click', async () => {
    await signOut(auth);
    showMessage("User signed out","error");
    window.location.reload();
})