import './estilos/AsideContent.css'

export function AsideContent({title, content, typeContent}) {
    let estiloSegunContenido = ''
    if (typeContent === 'imagen'){
        estiloSegunContenido = 'contenido-esImagen'
    }

    return (
        <div className='cn-asideContent'>
            <div>
                <h1>{title}</h1>
            </div>
            <div className={`${estiloSegunContenido}`}>
                {content}
            </div>
        </div>
    )
}
