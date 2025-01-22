import React from 'react'

const Persona = {
    nombre: 'Andres',
    apellido: 'Guerra',
    edad: 23
}

export const EnviarObjeto = () => {
  return (
    <div>
        <p>Objeto</p>
        <code> {JSON.stringify(Persona)} </code>
    </div>
  )
}


export default EnviarObjeto;