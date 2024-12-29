
const botonAgregarEvento = document.getElementById('agregarEvento')
const botonEliminarEvento = document.getElementById('eliminarEvento')
const primeraCaja = document.querySelector('.caja')

function toggleClase() {
    primeraCaja.classList.toggle('activa')
}

botonAgregarEvento.addEventListener('click', () => {
    primeraCaja.addEventListener('click', toggleClase)
})

botonEliminarEvento.addEventListener('click', () => {
    primeraCaja.removeEventListener('click', toggleClase)
})

