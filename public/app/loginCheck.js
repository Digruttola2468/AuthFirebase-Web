const containerRegistrarse = document.querySelector(".containerRegistrarse");
const containerLogin = document.querySelector(".containerLogin");
const containerInciadoSesion = document.querySelector(".containerInciadoSesion");

export const loginCheck = user => {
    if(user) {
        console.log("Mostrar")
        containerLogin.classList.add("ocultar")
        containerRegistrarse.classList.add("ocultar");
        containerInciadoSesion.classList.remove("ocultar");
    }else {
        console.log("ocultar")
        containerLogin.classList.remove("ocultar")
        containerRegistrarse.classList.remove("ocultar");
        containerInciadoSesion.classList.add("ocultar");
    }
}