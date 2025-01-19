var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;

    console.log(`${nombre} tiene ${numero} letras`);

    var funcionAnidada = () => {
        console.log(numero);
    }
    funcionAnidada();

}

// Solo se puede acceder a la variabe numero dentro de la funcion, no desde fuera
obtenerNumeroLetras('Andres')