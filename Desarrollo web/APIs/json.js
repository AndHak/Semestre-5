const datos = `{
    "id": 1,
    "nombre": "Andres Guerra",
    "suscriptor_activo": true,
    "posts": [
        {
            "id": 1,
            "titulo": "titulo del primer post",
            "texto": "descripcion del primer post"
        },
        {
            "id": 2,
            "titulo": "titulo del segundo post",
            "texto": "descripcion del segundo post"
        }
    ]
}`;

const objeto = JSON.parse(datos)
console.log(objeto)
console.log(objeto.nombre) 


const usuario = {
    nombre: 'Andres',
    correo: 'andresfg13789@gmail.com',
    coloresFavoritos: ['Azul', 'rojo', 'negro']
}

console.log(JSON.stringify(usuario));