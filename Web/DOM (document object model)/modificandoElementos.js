// elemento.InnerHTML
// cambia el contenido html de un elemento

const primeraCaja = document.querySelector('.caja');
console.log(primeraCaja)
primeraCaja.innerHTML = '<b>Hola bb</b>';


// elemento.attribute
// nnos permite acceder y cambiar los atributos

primeraCaja.id = 'Nuevo-id';

// setAttribute()
// agrega atributos personalizados

primeraCaja.setAttribute('class', 'caja activa');
primeraCaja.setAttribute('data-id', '123-456-789');

// style.property

const contenedor2Caja1 = document.querySelector('#contenedor2 .caja')
console.log(contenedor2Caja1);

contenedor2Caja1.style.background = '#000';
contenedor2Caja1.style.color = '#fff';
contenedor2Caja1.style.textTransform = 'uppercase';

