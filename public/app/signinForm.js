import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';

const signInForm = document.querySelector("#login");

signInForm.addEventListener('submit', async e => {
    e.preventDefault();

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    verificarEmailAndPassword(email,password);
})

async function iniciarSesion(email,password){
    try {
        await signInWithEmailAndPassword(auth,email,password);
        showMessage("Iniciado Correctamente","success");
    } catch (error) {
        console.log(error.code);
        switch(error.code) {
            case 'auth/user-not-found':
                showMessage("No se Encontro el Usuario","error");
                break;
            case 'auth/network-request-failed':
                showMessage("Error al iniciar sesion","error");
                break;
            case 'auth/wrong-password':
                showMessage("Error en el email o password","error");
                break;
        }
    }
}

let isCheckPassword = false;    
let isCheckEmail = false;
function verificarEmailAndPassword(email,password) {

    const verificarPassword = new Promise( (resolve, reject) => {
        if(password.length != 0) {
            resolve(true);
        }else reject("Campo Password Vacio")
    });

    const verificarEmail = new Promise( (resolve, reject) => {
        if(email.length != 0){
            if(email.includes("@")){
                if(email.includes(".com") || email.includes(".ar")){
                    resolve(true);
                } else reject("Error Email"); 
            }else reject("Email No Contine @");
        } else reject("Email Vacio");
    });
    
    verificarPassword.then( resultado => {
        isCheckPassword = resultado;
    }).catch( e => {
        showMessage(e, "error")
    });

    verificarEmail.then( resultado => {
        isCheckEmail = resultado;
    }).catch(e => {
        showMessage(e, "error");
    });

    if(isCheckEmail && isCheckPassword) { 
        iniciarSesion(email,password);
    }
}