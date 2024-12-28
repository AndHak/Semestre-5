
// function saludo() {
//     console.log('Hola despues de 5')
// }
// setTimeout(saludo, 5000)
// setTimeout(iniciar, 5000)


// let id;
// function iniciar() {
//     console.log('Iniciando adios!');
//     id = setTimeout(() => {
//         console.log('Adios perra!')
//     }, 5000);
// }

// function parar() {
//     console.log('jejeje whyy');
//     clearTimeout(id);
// }

let id;
let cuenta = 0;

function reset() {
    cuenta = 0;
    iniciar();
}

function iniciar() {
    id = setInterval(() => {
        console.log(cuenta);
        cuenta++
    }, 1000);
}

function parar() {
    clearInterval(id);
}