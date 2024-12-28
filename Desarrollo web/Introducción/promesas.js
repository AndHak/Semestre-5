
const promesa = new Promise((resolve, reject) => {
    // Acción que se ejecutará
    setTimeout(() => {
        const exito = false;

        if (exito){
            resolve('Succes');
        } else {
            reject('Failed');
        }
    }, 4000);
});

promesa.then((mensaje) => {
    alert(mensaje);
});

promesa.catch((mensaje) => {
    alert(mensaje);
})