var nombre = 'Andres';
console.log(nombre);

const saludo = () => {
    console.log('Hola ' + nombre);

    nombre = 'AndHak';

    console.log(`Tu apodo será ${nombre}`);
}

saludo();