import { useState } from 'react'
import './estilos/FollowCard.css'

export default function FollowCard({nombreUsuario, name}) {
    const [isFollowing, setIsFollowing] = useState(false)
    // Cuando haga click en el boton entonces me haras el cambio de estado entre true o false
    const alClickEntonces = () => {
        setIsFollowing(!isFollowing)
    }

    const textoBoton = isFollowing ? 'Siguiendo' : 'Seguir' /*Condicional terciario*/
    const estiloBoton = isFollowing ? 'fc-boton-isFollowing' : 'fc-boton-notFollowing'
    return (
        <article className='fc-articleGeneral'>
            <header className='fc-header'>
                <img
                    className='fc-imagenAvatar' 
                    src={`https://unavatar.io/youtube/${nombreUsuario}`} 
                    alt="Avatar del user" />
                <div className='fc-contentInfo'>
                    <strong>{name}</strong>
                    <span className='fc-infoUserName'>@{nombreUsuario}</span>
                </div>
            </header>
            <aside>
                <button className={estiloBoton} onClick={alClickEntonces}>
                    {textoBoton}
                </button>
            </aside>
        </article>
    )
}
