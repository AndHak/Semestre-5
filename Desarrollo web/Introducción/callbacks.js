


const obtenerPostsDeUsuario = (usuario, callbacks) => {
    console.log(`obteniendo posts de ${usuario}`);

    setTimeout(() => {
        let posts = ['Foto1', 'Foto2'];
        callbacks(posts)
    }, 2000)
}

obtenerPostsDeUsuario('Andres', (posts) => {
    console.log(posts);
})