import './estilos/ArticleMain.css'
import Me from './imagenes/profile.jpg'

function ArticleMain({title}) {
    return (
        <>
        {/* Estas llaves son basicamente el diminutuivo de React.Fragment que sirve para poder llamar dos veces un componente*/}
        <header>
            <h1>{title}</h1>
        </header>
        <div className='cn-parrafoImage'>
            <div className='cn-imagenProfile'>
                <img src={Me} />
            </div>
            <div className='cn-parrafo'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Perferendis rem illo voluptatibus quibusdam est, ratione quod, 
                    velit ipsum voluptas fuga alias, nemo et quos porro. Sed, inventore. 
                    Mollitia, obcaecati alias.
                </p>
            </div>
        </div>
        </> 




    )
}

export default ArticleMain