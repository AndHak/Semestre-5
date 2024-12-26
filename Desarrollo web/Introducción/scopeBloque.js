

// se puede acceder a const o let dentro de un bloque { }

let accesoPermitido = false; // 1

const edad = 23;
if (edad >= 18) {
    const accesoPermitido = true; // 2
    console.log(accesoPermitido); // conecta a 2

    if (true) {
        console.log(accesoPermitido); // conecta a 2
    }

    var test = 'fuera del bloque'
    let test2 = 'fuera del bloques'
}

console.log(accesoPermitido); // conecta a 1
console.log(test);
console.log(test2); // no se puede acceder