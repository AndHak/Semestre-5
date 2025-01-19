
const boleto = 'vip';

// if(boleto === 'vip'){
//     codigoDeAcceso = 'VIP-123-456'
// } else {
//     codigoDeAcceso = 'REGULAR'
// }

const codigoDeAcceso = (boleto === 'vip') ? 'VIP-123-456' : 'REGULAR';
console.log(codigoDeAcceso)