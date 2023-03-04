import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';

const signUpform = document.querySelector("#registrarse");

signUpform.addEventListener('submit', e => {
    e.preventDefault();

    // Obtenemos los valores del campo Registrarse
    const nombre = signUpform['regis-name'].value;
    const apellido = signUpform['regis-apellido'].value;
    const email = signUpform['regis-email'].value;
    const password = signUpform['regis-password'].value;
    const reptPassword = signUpform['regis-rept-password'].value;

    //Verificamos los campos 
    verificarEmailAndPassword(email,password,reptPassword);
})

async function createUser(email,password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        showMessage("Se creo Correctamente", "success"); 
    } catch (error) {
        console.log(error.message);
        console.log(error.code);

        switch (error.code) {
            case 'auth/weak-password':
                showMessage("La contraseña es muy debil","error");
                break;
            case 'auth/internal-error': 
                showMessage("Error Enviar Email");
                break;
            case 'auth/network-request-failed':
                showMessage("Error en el Email","error")
                break;
            case 'auth/email-already-in-use':
                showMessage("El Email ya Existe", "error");
                break;
        }
    }
}

let isCheckPassword = false;    
let isCheckEmail = false;
function verificarEmailAndPassword(email,password,reptPassword) {
    

    const verificarPassword = new Promise( (resolve, reject) => {
        if(password.length != 0) {
            if(reptPassword.length != 0){
                if(password === reptPassword) {
                    resolve(true);
                } else reject("La contraseña no son iguales");
            }else reject("Campo Repetir Password Vacio");
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
        createUser(email,password);
    }
}