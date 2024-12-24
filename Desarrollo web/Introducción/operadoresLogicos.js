
// And &&

const nombre = 'Andres';
const edad = 23;
const tieneEntrada = false;
const tienePermiso = true;

const permitirAcceso = edad >= 18 && tieneEntrada;
console.log(`Acceso permidito al concierto: ${permitirAcceso}`);


// Or ||
const permitirAcceso2 = (edad >= 18 && tieneEntrada) || tienePermiso;
console.log(permitirAcceso2)

// Not !
const contrarioTrue = !false
console.log(contrarioTrue) // true


