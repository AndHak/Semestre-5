
const formulario = document.forms['formulario-donacion'];

// submit

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Enviando datos');
})


// event change

formulario.pais.addEventListener('change', (e) => {
    console.log('El pais cambio');
    console.log(`el nuevo valor es ${e.target.value}`)
})


// radio buton change


formulario['cantidad-5'].addEventListener('change', (e) => {
    console.log(`la cantidad cambio a ${e.target.value}`);
})

formulario['cantidad-10'].addEventListener('change', (e) => {
    console.log(`la cantidad cambio a ${e.target.value}`);
})

// evento focus

formulario.correo.addEventListener('focus', () => {
    console.log('El input correo ahora es el foco de atencion');
})

formulario.correo.addEventListener('blur', () => {
    console.log('El input correo ya no es foco de atencion');
})

// evento keydown

formulario.correo.addEventListener('keydown', (e) => {
    console.log(e);
})


formulario.correo.addEventListener('keyup', (e) => {
    console.log(e);
})

