console.log(window);

// window.alert('Hola');

console.log(`la ventana mide ${window.innerWidth} x ${window.innerHeight}`);

/* 
	📌 window.open()
	Nos permite abrir ventanas del navegador
	Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

	- 1er parametro: Dirección de la nueva ventana
	- 2do parametro: Nombre de la ventana
	- 3er parametro: Cadena de texto de opciones

	Nos devuelve un objeto para aceder a esa ventana
*/

let ventana;
const abrirVentana = () => {
    ventana = window.open('', 'Ventana', 'width=500, height=500');
    ventana.document.write('<h1>Hola, desde la ventana!</h1>');
}

const cerrarVentana = () => {
    ventana.close();
}

// screen object
// Esta es la pantalla del usuario

console.log('Ancho de pantalla: ', window.screen.width);
console.log('Alto de pantalla: ', window.screen.height);
console.log('Alto de pantalla full: ', window.screen.availHeight);

