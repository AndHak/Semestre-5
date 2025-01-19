const formulario = document.getElementById('form-register')
const inputNombres = formulario.nombres;
const inputApellidos = formulario.apellidos;

document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');
    const togglePasswordConfirm = document.getElementById('togglePasswordConfirm');
    const passwordConfirmField = document.getElementById('password-confirm');

    // Mostrar/Ocultar Contraseña
    togglePassword.addEventListener('click', function () {
        // Alternar tipo de input entre 'password' y 'text'
        const currentType = passwordField.getAttribute('type');
        const newType = currentType === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', newType);

        // Cambiar el texto del botón de "Ver" y el estilo
        if (newType === 'password') {
            togglePassword.innerHTML = '<i class="fas fa-eye"></i>';
        } else {
            togglePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
        }
    });

    // Mostrar/Ocultar Confirmar Contraseña
    togglePasswordConfirm.addEventListener('click', function () {
        // Alternar tipo de input entre 'password' y 'text'
        const currentType = passwordConfirmField.getAttribute('type');
        const newType = currentType === 'password' ? 'text' : 'password';
        passwordConfirmField.setAttribute('type', newType);

        // Cambiar el texto del botón de "Ver" y el estilo
        if (newType === 'password') {
            togglePasswordConfirm.innerHTML = '<i class="fas fa-eye"></i>';
        } else {
            togglePasswordConfirm.innerHTML = '<i class="fas fa-eye-slash"></i>';
        }
    });
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = {
        nombre: formulario.nombres.value,
        apellido: formulario.apellidos.value,
        correo: formulario.correo.value,
        contraseña: formulario.password.value,
        terminos: formulario['terminos-y-condiciones'].checked
    }
    
    // Normalización de los datos
    let nombreLimpio = datos.nombre.trim();
    nombreLimpio = nombreLimpio.replace(/\s+/g, ' ');
    nombreLimpio = nombreLimpio.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
    inputNombres.value = nombreLimpio;

    let apellidoLimpio = datos.apellido.trim();
    apellidoLimpio = apellidoLimpio.replace(/\s+/g, ' ');
    apellidoLimpio = apellidoLimpio.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
    inputApellidos.value = apellidoLimpio;

    const correoValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contrasenaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    // validación de nombre
    if (nombreLimpio == '' || nombreLimpio.split(' ').length > 3 ||
        nombreLimpio.length <= 1 || nombreLimpio.length >= 30) {
        formulario.nombres.classList.add('input-error');
        return;
    }

    // validación de apellido
    if (apellidoLimpio == '' || apellidoLimpio.split(' ').length > 3 ||
        apellidoLimpio.length <= 1 || apellidoLimpio.length >= 30) {
        formulario.apellidos.classList.add('input-error');
        return;
    }

    // validación de correo
    if (correoValido.test(datos.correo.trim()) == false) {
        formulario.correo.classList.add('input-error');
        return;
    }

    // validación de contraseña
    if (contrasenaValida.test(datos.contraseña) == false) {
        formulario.password.classList.add('input-error');
        formulario['password-confirm'].classList.add('input-error');
        return;
    }

    // validación de confirmación de contraseña
    if (datos.contraseña !== formulario['password-confirm'].value) {
        formulario.password.classList.add('input-error');
        formulario['password-confirm'].classList.add('input-error');
        return;
    }

    // Términos y condiciones
    if (formulario['terminos-y-condiciones'].checked == false) {
        console.log('acepte los terminos y condiciones');
        return;
    }

    console.log('datos enviados', datos);
});

// Eliminar la clase de error cuando el usuario cambia el valor de los campos
formulario.nombres.addEventListener('input', () => {
    formulario.nombres.classList.remove('input-error');
});

formulario.apellidos.addEventListener('input', () => {
    formulario.apellidos.classList.remove('input-error');
});

formulario.correo.addEventListener('input', () => {
    formulario.correo.classList.remove('input-error');
});

formulario.password.addEventListener('input', () => {
    formulario.password.classList.remove('input-error');
});

formulario['password-confirm'].addEventListener('input', () => {
    formulario['password-confirm'].classList.remove('input-error');
});
