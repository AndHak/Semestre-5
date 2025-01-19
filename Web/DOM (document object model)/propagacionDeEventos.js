
const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', () => {
    console.log('Click en contenedor');
})

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en caja');
})

