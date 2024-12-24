
const Usuario = {
    nombre: 'Andres',
    pais: 'Peru',
};

switch(Usuario.pais) {
    case 'Colombia':
        console.log('Eres Colombiano');
        break;
    case 'España':
        console.log('Eres Español');
        break;
    default:
        console.log('Eres desconocido');
}