/*
	📌 Modificar estilos CSS mediante clases
*/


// classList.add() - Nos permite agregar clases a un elemento.
const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList);

function agregarClase(){
    primeraCaja.classList.add('activa');
}


// classList.remove() - Nos permite eliminar clases de un elemento
function eliminarClase(){
    primeraCaja.classList.remove('activa');
}

// classList.toggle() - Nos permite alternar clases de un elemento
function toggleClase(){
    primeraCaja.classList.toggle('activa');
}

// classList.contains() - Nos permite comprobar si el elemento contiene una clase
function comprobarClase(){
    if (primeraCaja.classList.contains('activa')) {
        console.log('Clase activa');
    } else {
        console.log('La clase esta inactiva');
    }
}