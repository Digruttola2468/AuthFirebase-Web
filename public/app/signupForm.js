import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';

const signUpform = document.querySelector("#registrarse");

let nombre = "";
let apellido = "";
signUpform.addEventListener('submit', e => {
    e.preventDefault();

    // Obtenemos los valores del campo Registrarse
    nombre = signUpform['regis-name'].value;
    apellido = signUpform['regis-apellido'].value;
    const email = signUpform['regis-email'].value;
    const password = signUpform['regis-password'].value;
    const reptPassword = signUpform['regis-rept-password'].value;

    //Verificamos los campos 
    verificarEmailAndPassword(email, password, reptPassword);
})

function emptyCampus () {
    signUpform['regis-name'].value = "";
    signUpform['regis-apellido'].value = "";
    signUpform['regis-email'].value = "";
    signUpform['regis-password'].value = "";
    signUpform['regis-rept-password'].value = "";
}

async function createUser(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);

        updateProfile(auth.currentUser, {
            displayName: `${nombre} ${apellido}`, photoURL: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
        }).then();

        sendEmailVerification(auth.currentUser)
        .then(() => {
            showMessage("Se envio un Email Verification", "success");
            window.open("./sendEmailVerification.html");
        });

        showMessage("Se creo Correctamente", "success");
        emptyCampus();
    } catch (error) {
        console.log(error.message);
        console.log(error.code);

        switch (error.code) {
            case 'auth/weak-password':
                showMessage("La contraseña es muy debil", "error");
                break;
            case 'auth/internal-error':
                showMessage("Error Enviar Email");
                break;
            case 'auth/network-request-failed':
                showMessage("Error en el Email", "error")
                break;
            case 'auth/email-already-in-use':
                showMessage("El Email ya Existe", "error");
                break;
        }
    }
}

let isCheckPassword = false;
let isCheckEmail = false;
function verificarEmailAndPassword(email, password, reptPassword) {


    const verificarPassword = new Promise((resolve, reject) => {
        if (password.length != 0) {
            if (reptPassword.length != 0) {
                if (password === reptPassword) {
                    resolve(true);
                } else reject("La contraseña no son iguales");
            } else reject("Campo Repetir Password Vacio");
        } else reject("Campo Password Vacio")
    });

    const verificarEmail = new Promise((resolve, reject) => {
        if (email.length != 0) {
            if (email.includes("@")) {
                if (email.includes(".com") || email.includes(".ar")) {
                    resolve(true);
                } else reject("Error Email");
            } else reject("Email No Contine @");
        } else reject("Email Vacio");
    });

    verificarPassword.then(resultado => {
        isCheckPassword = resultado;
    }).catch(e => {
        showMessage(e, "error")
    });

    verificarEmail.then(resultado => {
        isCheckEmail = resultado;
    }).catch(e => {
        showMessage(e, "error");
    });

    if (isCheckEmail && isCheckPassword) {
        createUser(email, password);
    }
}