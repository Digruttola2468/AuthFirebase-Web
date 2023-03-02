import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './firebase.js'


const signUpform = document.querySelector("#registrarse");

signUpform.addEventListener('submit', async e => {
    e.preventDefault();

    const nombre = signUpform['regis-name'].value;
    const apellido = signUpform['regis-apellido'].value;
    const email = signUpform['regis-email'].value;
    const password = signUpform['regis-password'].value;
    const reptPassword = signUpform['regis-rept-password'].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
        
    } catch (error) {
        console.log(error.message);
        console.log(error.code);

        switch(error.code) {
            case 'auth/weak-password': 
                alert("La contraseña es muy debil");
                break;
            case 'auth/network-request-failed': 
                alert("Error en el Email")
                break;
        }
    }
})

