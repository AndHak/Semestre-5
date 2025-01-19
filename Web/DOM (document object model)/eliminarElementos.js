
function eliminarCaja() {
    try {
        const contenedor = document.getElementById('contenedor1');
        if (!contenedor) {
            throw new Error('El contenedor con ID contenedor1 no existe');
        }

        const cajaAEliminar = contenedor.querySelector('.caja');
        if (!cajaAEliminar) {
            throw new Error('No hay ninguna caja con la clase .caja para eliminar');
        }
    
        contenedor.removeChild(cajaAEliminar);
        console.log('Caja elimiada correctamente')
    } catch (error) {
        console.error('Error:', error.message);
    }
}