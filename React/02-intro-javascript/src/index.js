const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
})

promesa.then(() => {
    console.log('Then de la promesa')
})