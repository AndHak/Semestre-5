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


let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);