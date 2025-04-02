import './estilos/Calculadora.css'

function Calculadora() {

    return (
        <div className='containerCalculadora'>
            <div>
                <input type="text" id='resultado' readOnly />
            </div>
            <div>
                <button className='esnumero'>1</button>
                <button className='esnumero'>2</button>
                <button className='esnumero'>3</button>
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
                <button className='esnumero'>0</button>
                <button id='igual'>=</button>
                <button id='limpiar'>C</button>
                <button className='operador'>/</button>
            </div>
            
        </div>
    )
}

export default Calculadora