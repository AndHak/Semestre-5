import { useForm } from 'react-hook-form'

function App() {

  const {register, handleSubmit, 
        formState: {errors}, watch, setValue} = useForm({
          // defaultValues: {
          //   nombre: 'Andres',
          // }
        })

  const onSubmit = handleSubmit((data) => {
    console.log('Formulario enviado')
    console.log(data)
  })

  const selectedCountry = watch('pais', 'none');

  return (
    <form action="" onSubmit={onSubmit} >
      {/* nombre  */}
      <label htmlFor="nombre">Nombre</label>
      <input type="text" {...register('nombre', {
        required: {
          value: true,
          message: 'Escriba un nombre'
        },
        minLength: {
          value: 3,
          message: 'El nombre debe tener mas de 2 carácteres'
        },
        maxLength: {
          value: 20,
          message: 'El nombre debe tener menos de 20 carácteres'
        }
      })} />
      {
        errors.nombre && <span>{errors.nombre.message}</span>
      }
      

      {/* correo */}
      <label htmlFor="correo">Correo</label>
      <input type="email" {...register('email', {
        required: {
          value: true,
          message: 'Escriba el correo electronico'
        },
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'El correo electronico no es valido'
        }
      })} />
      {
        errors.email && <span>{errors.email.message}</span>
      }

      {/* contraseña */}
      <label htmlFor="password">Password</label>
      <input type="password" {...register('password', {
        required: {
          value: true,
          message: 'Escriba una contraseña'
        },
        minLength: {
          value: 8,
          message: 'La contraseña debe tener almenos 8 carácteres'
        }
      })} />
      {
        errors.password && <span>{errors.password.message}</span>
      }

      {/* confirmar contraseña */}
      <label htmlFor="confirmpassword">Confirm Password</label>
      <input type="password" {...register('confirmpassword', {
        required: {
          value: true,
          message: 'Confirme la contraseña'
        },
        // validate: (value) => {
        //   if (value === watch('password')) {
        //     return true;
        //   } else {
        //     return 'Las contraseñas no coinciden'
        //   }
        // }
        validate: value => value === watch('password') || 'Las contraseñas no coinciden'
      })} />
      {
        errors.confirmpassword && <span>{errors.confirmpassword.message}</span>
      }

      {/* fecha de nacimiento */}
      <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
      <input type="date" {...register('fechaNacimiento', {
        required: {
          value: true,
          message: 'Seleccione su fecha de nacimiento'
        },
        validate: (value) => {
          const fechaNacimiento = new Date(value)
          const fechaActual = new Date()
          const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
          
          // if (edad <= 18) {
          //   return 'Debes ser mayor de edad';
          // } else {
          //   return true;
          // }

          return edad >= 18 || 'Debe ser mayor de edad';
        }
      })} />
      {
        errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>
      }

      {/* pais */}
      <label htmlFor="pais">País</label>
      <select defaultValue="none" {...register('pais', {
        required: {
          value: true,
          message: 'Seleccione un pais'
        },
        validate: (value) => value !== 'none' || 'Seleccione un país'
      })}>
        <option value="none" disabled>Seleccione un pais</option>
        <option value="co">Colombia</option>
        <option value="mx">México</option>
        <option value="br">Brasil</option>
      </select>
      {
        errors.pais && <span>{errors.pais.message}</span>
      }
      {selectedCountry !== 'none' && (
        <>
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            placeholder="Ciudad"
            {...register('ciudad', {
              required: {
                value: true,
                message: 'Escriba su ciudad',
              },
            })}
          />
          {/* Mensaje de error para la ciudad */}
          {errors.ciudad && <span>{errors.ciudad.message}</span>}
        </>
      )}


      {/* file */}
      <label htmlFor="foto">Foto</label>
      <input type="file" onChange={(e) => {
        setValue('fotoDelUsuario', e.target.files[0].name)
      }} />

      {/* terminos */}
      <label htmlFor="terminos">Acepto términos y condiciones</label>
      <input type="checkbox" {...register('terminos', {
        required: {
          value: true,
          message: 'Debe aceptar los terminos y condiciones'
        }
      })} />
      {
        errors.terminos && <span>{errors.terminos.message}</span>
      }

      <button type="submit">Enviar</button>

      {/* <pre>
        {JSON.stringify(watch(), null, 2)}
      </pre> */}
    </form>
  );
}

export default App;
