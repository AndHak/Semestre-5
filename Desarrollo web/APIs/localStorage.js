
document.getElementById('boton1').addEventListener('click', () => {
    const nombre = prompt('escribe tu nombre: ');
    window.localStorage.setItem('nombre', nombre);
    console.log('el nombre ha sido guardado')
})

document.getElementById('boton2').addEventListener('click', () => {
    window.localStorage.removeItem('nombre');
    console.log('Se ha eliminado el nombre')
})

if (window.localStorage.nombre) {
    console.log('Hola ' + window.localStorage.nombre)
} else {
    console.log('Escribe tu nombre')
}