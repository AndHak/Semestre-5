//Estructura condicional

// Ejemplo 1

const Usuario = {
    edad: 23,
    pais: 'Colombia',
    ticket: true,
};

if (Usuario.edad > 18) {
    console.log('El usuario es mayor de edad')
} else {
    console.log('El usuario no es mayor de edad')
}

// Ejemplo 2

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
console.log(es_primo(11));
console.log(es_primo(88));

// Ejemplo 3

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
console.log(es_fibonacci(8));
console.log(es_fibonacci(11));
console.log(es_fibonacci(13));