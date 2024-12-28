
function crearCookie() {
    document.cookie = 'nombre=Andres';
    document.cookie = 'nombre=Andres4; expires=28 Dec 2024 01:31:00 UTC';
}


function iniciarSesion() {
    const usuario = prompt('User: ');
    document.cookie = `nombre=${usuario}; expires=29 Dec 2024 12:00:00 UTC`;
    alert('Sesion iniciada');
}


let usuario;
const cookies = document.cookie.split()
cookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0]
    if (propiedad === 'nombre') {
        usuario = cookie.split('=')[1];
    }
})

if (usuario) {
    console.log('Hola ' + usuario)
} else {
    console.log('Inicia sesion')
}

function cerrarSesion() {
    document.cookie = 'nombre=; expires = 1 Jan 2020 01:00:00 UTC';
    console.log('Hasta luego!');
}