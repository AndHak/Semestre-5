
/* 
	📌 Ciclo For
	Repite un bloque de código mientras se cumpla una condición.

	Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
	Expresión 2: Una condicion, mientras se cumpla se ejecutara el bloque de código.
	Expresión 3: Esta expresion se ejecuta siempre y despues de que se ejecute el bloque de código.
*/


for (let numero = 0; numero < 11; numero++) {
    //codigo 
    console.log(numero);
}

function es_primo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let contador = 2; contador < Math.sqrt(numero); contador++) {
        if (numero % contador == 0) {
            return false;
        }
    }
    return true;
}

console.log('Evaluando primos')
console.log(es_primo(1));
console.log(es_primo(2));
console.log(es_primo(3));
console.log(es_primo(5));
console.log(es_primo(8));

function es_fibonacci(numero){
    let fibo1 = 0;
    let fibo2 = 1;

    if (numero === 0 || numero === 1){
        return true;
    }
    for (let secuencia = 0; secuencia <= numero; fibo1 = fibo2, fibo2 = secuencia){
        secuencia = fibo1 + fibo2
        if (secuencia === numero){
            return true;
        }
    }
    return false;
}

console.log('Evaluando fibonaccis')
console.log(es_fibonacci(1));
console.log(es_fibonacci(2));
console.log(es_fibonacci(3));
console.log(es_fibonacci(5));
console.log(es_fibonacci(6));
console.log(es_fibonacci(8));
console.log(es_fibonacci(10));
console.log(es_fibonacci(13));


for (let numero = 50; numero > 0; numero -= 5) {
    console.log(numero)
}




const nombres = ['Andres', 'Felipe', 'Christian', 'Estefania', 'Lady'];

for (let contador = 1; contador <= nombres.length; contador++) {
    console.log(nombres[contador-1])
}

console.log('segunda forma')
for (let contador = 0; contador < nombres.length; contador++) {
    console.log(nombres[contador])
}