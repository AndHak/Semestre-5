
function saludo(nombre) {
    if (nombre === undefined) {
        nombre = 'desconocido';
    }
    console.log('Hola! Bienvenido ' + nombre);
}

saludo('AndHak');
saludo();


function es_primo(numero) {
    if (numero <= 1) {
        return false;
    }
    let contador = 2;
    while (contador < numero) {
        if (numero % contador == 0) {
            return false;
        }
        contador++;
    }
    return true;
};

console.log('Evaluando primos')
console.log(es_primo(2));
console.log(es_primo(3));
console.log(es_primo(5));
console.log(es_primo(8));

function es_fibonacci(numero) {
    let fibo1 = 0;
    let fibo2 = 1;
    if (numero === 0 || numero === 1) return true;
    let secuencia = 0;
    while (secuencia <= numero) {
        secuencia = fibo1 + fibo2;
        fibo1 = fibo2;
        fibo2 = secuencia;
        if (secuencia === numero) {
            return true;
        }
    }
    return false;
}

console.log('Evaluando fibonaccis')
console.log(es_fibonacci(3));
console.log(es_fibonacci(5));
console.log(es_fibonacci(6));

const factorial = (numero) => {
    if (numero === 1){
        return 1;
    }
    return numero * factorial(numero - 1)
}


console.log(`factorial de 3 es ${factorial(3)}`);
console.log(`factorial de 4 es ${factorial(4)}`);