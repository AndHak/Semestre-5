class Usuario {
    constructor(usuario, password){
        this.usuario = usuario;
        this.password = password;
    }

    obtenerPosts(){
        const posts = ['posts1', 'posts2'];
        return posts
    }
}

const usuario = new Usuario('AndHak', '0000');
console.log(usuario.obtenerPosts());


class Moderador extends Usuario {
    constructor(usuario, password, permisos){
        super(usuario, password);
        this.permisos = permisos;
    }

    borrarPost(id){
        if(this.permisos.includes('borrar')){
            console.log(`el post ${id} ha sido borrado`);
        }
    }
}

const usuario2 = new Moderador('Hacker', 'root', ['borrar', 'editar']);
console.log(usuario2);
console.log(usuario2.obtenerPosts())
usuario2.borrarPost(7)


