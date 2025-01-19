
const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Foto1', 'Foto2'];
            const error = true;

            if (error){
                reject('Failed');
            } else {
                resolve(posts);
            }
        }, 2000);
    });
}

fetchPosts().then((posts) => {{
    console.log(posts);
}}).catch((error) => {
    console.log(error);
}) 