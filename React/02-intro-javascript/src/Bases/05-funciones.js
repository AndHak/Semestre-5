
function saludar(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => `Hola ${nombre}`;


console.log(saludar('Andres'));
console.log(saludar2('Felipe'));


const getUsuarioActivo = (nombre) =>  ({
        uid: '23034091',
        usuarme: nombre
    })

const usuarioActivo = getUsuarioActivo('Andresito');
console.log(usuarioActivo);


