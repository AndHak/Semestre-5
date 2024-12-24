
// Cadena de texto
let nombre = 'Andres';

// Numero
const numero = 4;
const numero2 = -4.123;

// Boleano
const usuarioConectado = false;
const mayorQue = 10 > 2;

console.log(mayorQue);

// Arrays
const arreglo = [1, 10, 5];
console.log(arreglo);

const arreglo_polimorfico = ['Andres', 'Felipe', 22, true, {correo: 'andresfg13789@gmail.com'}, [1,2,3]];
console.log(arreglo_polimorfico)

// Objeto
const Persona = {
    nombre: 'Andres',
    edad: 23,
    carro: {
        marca: 'Mazda',
        modelo: '2024',
        color: 'negro',
    },
};

console.log(`Mostrando nombre: ${Persona.nombre}`);
console.log(`Mostrando carro: ${Persona.carro.marca} Modelo: ${Persona.carro.modelo} Color: ${Persona.carro.color}`);

// Funcion
function hola() {
    console.log('Hola de nuevo');
}

hola();

// Null
const miVariable = null

// Undefined
const miVariable2 = undefined;