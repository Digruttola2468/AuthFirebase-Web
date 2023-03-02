const signupForm = document.querySelector("#login");

signupForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = signupForm['login-email'].value;
    const password = signupForm['login-password'].value;

    console.log(`El usuario ${email} ha iniciado Sesion donde su contraseña es: ${password}`);
})