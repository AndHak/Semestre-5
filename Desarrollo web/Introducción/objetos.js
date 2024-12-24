

const Persona = {
    nombre: 'Andres',
    edad: 23,
    nacionalidad: 'Colombia',
    correo: 'andresfg13789@gmail.com',
    mayorDeEdad: 23 > 18,
    suscripciones: {
        web: true,
        correo: true,
    },
    coloresFavoritos: ['Negro', 'Rojo'],
    saludo: function() {
        alert('Hola!');
    },
};

console.log(Persona.nombre);
console.log(Persona['edad']);

const variable = 'correo';
console.log(Persona[variable])

console.log(Persona.suscripciones.correo)

Persona.pais = 'Colombia';
console.log(Persona.pais);

Persona.saludo();


