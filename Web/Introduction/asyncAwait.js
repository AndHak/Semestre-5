const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Foto1', 'Foto2', 'Foto3'];
            const error = true;

            if (error) {
                reject('Hubo un error al cargar fotos');
            } else {
                resolve(posts);
            }
        }, 2000);
    })
}

const mostrarPosts = async() => {
    try {
        const posts = await fetchPosts();
        console.log(posts);
    } catch(error) {
        console.log(error);
    }
}

mostrarPosts();
