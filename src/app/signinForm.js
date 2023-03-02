const signInForm = document.querySelector("#login");

signInForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    console.log(`El usuario ${email} ha iniciado Sesion donde su contraseña es: ${password}`);
})