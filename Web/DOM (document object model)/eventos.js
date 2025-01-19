

const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');

function haciendoClick(e) {
    console.log(`Click en ${e.target.innerHTML}`);
}

function activarCaja() {
    primeraCaja.classList.toggle('activa');
    if (primeraCaja.classList.contains('activa')) {
        boton1.innerText = 'Desactivar';
    } else {
        boton1.innerText = 'Activar';
    }
}

boton1.addEventListener('click', activarCaja);

// agregar evento a multiples elementos
const cajas = document.querySelectorAll('.caja');

cajas.forEach((caja) => {
    caja.addEventListener('click', haciendoClick)
})