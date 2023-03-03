import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';

const signInForm = document.querySelector("#login");

signInForm.addEventListener('submit', async e => {
    e.preventDefault();

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth,email,password);
        showMessage("Iniciado Correctamente","success");
    } catch (error) {
        if(error.code === "auth/network-request-failed"){
            showMessage("Error al iniciar sesion","error");
        }
    }
})