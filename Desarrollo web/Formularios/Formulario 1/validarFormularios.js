

const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = {
        correo: formulario.correo.value,
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked,
    };

    if (datos.correo <= 2) {
        console.log('correo invalido');
        return;
    } 

    if (datos.pais === '') {
        console.log('debe seleccionar un pais');
        return;
    }

    if (datos.donacion === '') {
        console.log('selecciona una cantidad a donar');
        return;
    }

    if (datos.fecha === '') {
        console.log('seleccione una fecha');
        return;
    }

    if (datos.terminos == false) {
        console.log('Debe aceptar los terminos y condiciones');
        return;
    }

    console.log('todos los datos son correctos')
    console.log(datos)
})