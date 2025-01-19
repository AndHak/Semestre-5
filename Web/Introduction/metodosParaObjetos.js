const usuario = {
    nombre: 'Andres',
    edad: 23,
    amigos: ['Alejandro', 'Maximo', 'Abelardo'],
    saludo: () => {
        console.log('Hola!');
    },
}


usuario.saludo();

const keys = Object.keys(usuario);
console.log(keys);

const values = Object.values(usuario);
console.log(values);

const items = Object.entries(usuario);
console.log(items);