

class Usuario {
    tipo = 'usuario';
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;

        console.log('Nuevo usuario registrado')
    }

    obtenerNombreCompleto(){
        console.log(`${this.nombre} ${this.apellido}`)
    }
}

const usuario = new Usuario('Andres', 'Guerra');
console.log(usuario)

const usuario2 = new Usuario('Felipe', 'Martinez');
console.log(usuario2)

usuario.obtenerNombreCompleto()
usuario2.obtenerNombreCompleto()
