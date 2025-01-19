

const endpoint = "https://api.npoint.io/b66602f7f3c48b0bf2f1";

// ejemplo principiante

// fetch(endpoint).then((respuesta) => {
//     console.log('el servidor respondio')
//     console.log(respuesta)
    
//     const promesa = respuesta.json();
//     promesa.then((datos) => {
//         console.log(datos)
//     }).catch((error) => {
//         console.log(error)
//     })
// }).catch((error) => {
//     console.log(error)
// })

// uso profesional

async function obtenerDatos() {
    try {
        const respuesta = await fetch(endpoint);

        // Verifica si la respuesta es exitosa
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        const datos = await respuesta.json(); // Esperar a que la Promesa se resuelva
        console.log(datos); // Aquí puedes trabajar con los datos obtenidos
    } catch (error) {
        console.error('Ocurrió un error:', error); // Manejo de errores
    }
}

obtenerDatos();
