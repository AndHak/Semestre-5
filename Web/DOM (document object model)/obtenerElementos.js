
// getElementById

const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1);

// children

console.log(contenedor1.children);

// Parents

console.log(contenedor1.parentElement);

// getElementByTagName

const divs = document.getElementsByTagName('div')
console.log(divs);
console.log(`tenemos ${divs.length} divs en la pagina`);

// getElementByClassName

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores)

// querySelector

const caja = document.querySelector('#contenedor1');
console.log(caja);

const caja2 = document.querySelector('#contenedor1 .caja');
console.log(caja2);

// querySelectorAll

const cajas = document.querySelectorAll('#contenedor1 .caja');
console.log(cajas)

cajas.forEach((caja) => {
    console.log(caja);
})

// closest (permite buscar de dentro hacia afuera)
const ultimaCaja = document.querySelector('.caja:last-child');
console.log(ultimaCaja)

const ultimaCaja2 = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja2)

// empieza del ultimo buscando la clase que estoy buscando

console.log(ultimaCaja.closest('.contenedor-principal'));

// Encadenacion

console.log(document.getElementById('contenedor2').querySelectorAll('.caja'));