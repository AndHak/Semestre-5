


console.log(document.forms);

console.log(document.forms['formulario-donacion'])

const formularioDonacion = document.forms['formulario-donacion']['correo'].value;

console.log(formularioDonacion);


document.getElementById('botonEnviar').addEventListener('click', (e) => {
    e.preventDefault();
    const correo = document.querySelector('#formulario-donacion [name="correo"]');
    console.log(correo.value); // valor del input
    console.log(document.forms['formulario-donacion']['pais'].value); // valor de selectbox
    
    const formulario = document.forms['formulario-donacion']
    console.log(formulario['donacion'].value) // aceder radiobutton

    console.log(formulario.fecha.value); // acceder fecha

    console.log(formulario['terminos-y-condiciones'].checked); //  
})