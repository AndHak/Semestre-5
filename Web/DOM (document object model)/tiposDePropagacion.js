
/*
	📌 Bubbling (false, por defecto)
	En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre.
	
	📌 Capturing (true)
	En capturing el elemento padre reacciona primero y despues el elemento hijo.
*/

const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', () => {
    console.log('Click en contenedor');
}, true)

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    console.log('Click en caja');
})

