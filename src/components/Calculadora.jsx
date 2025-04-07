import { useState } from 'react'
import './estilos/Calculadora.css'

function Calculadora() {
    const [clicky, setClicky] = useState('')
    const handleNumber = () =>  {
        const numeroElegido = event.target.textContent
        setClicky(clicky + numeroElegido)
    }

    return (
        <div className='GeneralDiv'>
            <div className='containerCalculadora'>
            <div>
                <input type="text" id='resultado' value={clicky} readOnly />
            </div>
            <div>
                <button className='esnumero' onClick={handleNumber}>1</button>
                <button className='esnumero' onClick={handleNumber}>2</button>
                <button className='esnumero' onClick={handleNumber}>3</button>
                <button className='operador'>+</button>
            </div>
            <div>
                <button className='esnumero'>4</button>
                <button className='esnumero'>5</button>
                <button className='esnumero'>6</button>
                <button className='operador'>-</button>
            </div>
            <div>
                <button className='esnumero'>7</button>
                <button className='esnumero'>8</button>
                <button className='esnumero'>9</button>
                <button className='operador'>*</button>
            </div>
            <div>
                <button className='igual'>=</button>
                <button id='esnumero'>0</button>
                <button id='limpiar'>C</button>
                <button className='operador'>/</button>
            </div>
            
        </div>
        </div>
    )
}

export default Calculadora