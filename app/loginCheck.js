const containerRegistrarse = document.querySelector(".containerRegistrarse");
const containerLogin = document.querySelector(".containerLogin");
const containerInciadoSesion = document.querySelector(".containerInciadoSesion");

export const loginCheck = user => {
    if(user) {
        containerLogin.classList.toggle("ocultar")
        containerRegistrarse.classList.toggle("ocultar");
        containerInciadoSesion.classList.remove("ocultar");
    }else {
        containerLogin.classList.remove("ocultar")
        containerRegistrarse.classList.remove("ocultar");
        containerInciadoSesion.classList.add("ocultar");
    }
}