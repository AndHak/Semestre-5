
class Usuario {
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrarUsuario(id_usuario){
        console.log(`El usuario con el id: ${id_usuario} ha sido borrado`)
    }
}

// const usuario = new Usuario('Andres', 'correo@correo.com');
// console.log(usuario)
// usuario.borrarUsuario(1)

Usuario.borrarUsuario(7)

