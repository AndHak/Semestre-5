import PropTypes from "prop-types"
import { useState } from "react"

export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState( 0 )

    function Aumentar() {
        setCounter( counter + 1 )
    }

    function Disminuir() {
        setCounter( counter - 1 )
    }

    function Reset() {
        setCounter( value )
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ Aumentar }>
            +1
        </button>
        <button onClick={ Disminuir }> -1 </button>
        <button onClick={ Reset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 'Escriba un numero'
}