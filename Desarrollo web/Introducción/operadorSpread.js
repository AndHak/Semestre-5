
// toma y expande elementos

const frutas = ['Manzana', 'Pera', 'Piña', 'Kiwi'];
const comidaFavorita = ['Sushi', 'Pizza', 'Camarones', ...frutas];

console.log(comidaFavorita)

const datosLogin = {
    nombre: 'AndHak',
    correo: 'andres@correo.com',
    password: '123',
}

const usuario = {
    nombre: 'Andres',
    ...datosLogin,
    edad: 23,
}

console.log(usuario)


const usuario2 = {
    ...datosLogin,
    nombre: 'Andres',
    edad: 23,
}

console.log(usuario2)

// parametro rest

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(correo, nombre, datosAdicionales);
}

registrarUsuario('Andres', 'andres@gmail.com')
registrarUsuario('AndHak', 'andresfg@gmail.com', 23, 'Colombia')


// Destructuracion de objetos
const amigos = ['Andres', 'Felipe', 'Manuel'];

const [primerAmigo, segundoAmigo] = amigos;

console.log(primerAmigo, segundoAmigo)

const persona = {
    nombre: 'Andres',
    edad: 23,
    pais: 'Colombia',
}

const {nombre, pais} = persona;
console.log(nombre, pais)


const mostrarEdad = (nombre, edad) => {
    console.log(`${nombre} tiene ${edad} años`);
}

mostrarEdad(persona.nombre, persona.edad)
mostrarEdad(persona);