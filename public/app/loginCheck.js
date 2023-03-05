const containerRegistrarse = document.querySelector(".containerRegistrarse");
const containerLogin = document.querySelector(".containerLogin");
const containerInciadoSesion = document.querySelector(".containerInciadoSesion");

const iniciadoSesion = document.querySelector(".iniciadoSesion");

export const loginCheck = user => {
    if(user) {
        console.log(user);
        infoUser(user.displayName,user.email,user.phoneNumber,user.photoURL);
        containerLogin.classList.add("ocultar")
        containerRegistrarse.classList.add("ocultar");
        containerInciadoSesion.classList.remove("ocultar");
    }else {
        containerLogin.classList.remove("ocultar")
        containerRegistrarse.classList.remove("ocultar");
        containerInciadoSesion.classList.add("ocultar");
    }
}

function infoUser( displayName,email,phoneNumber,photoURL ) {
    console.log(`Nombre: ${displayName}`);
    console.log(`Email: ${email}`);
    console.log(`phoneNumber: ${phoneNumber}`);
    console.log(`photoURL: ${photoURL}`);
    
    const parrafoNombre = document.createElement("P");
    const parrafoEmail = document.createElement("P");
    const parrafoPhoneNumber = document.createElement("P");
    const imagenURL = document.createElement("IMG");

    parrafoNombre.innerHTML = `Nombre: ${displayName}`;
    parrafoEmail.innerHTML = `Email: ${email}`;
    parrafoPhoneNumber.innerHTML = `Phone Number: ${phoneNumber}`;
    imagenURL.setAttribute("src", photoURL);
    imagenURL.setAttribute("alt", "image user")

    iniciadoSesion.appendChild(parrafoNombre);
    iniciadoSesion.appendChild(parrafoEmail);
    iniciadoSesion.appendChild(parrafoPhoneNumber);
    iniciadoSesion.appendChild(imagenURL);
}