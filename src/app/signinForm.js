const signInform = document.querySelector("#registrarse");

signInform.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = signInform['regis-name'].value;
    const apellido = signInform['regis-apellido'].value;
    const email = signInform['regis-email'].value;
    const password = signInform['regis-password'].value;
    const reptPassword = signInform['regis-rept-password'].value;

    console.log(`El usuario ${nombre} ${apellido} se ha registrado 
    con el email: ${email}`);
})