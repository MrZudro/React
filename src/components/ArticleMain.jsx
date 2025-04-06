import './estilos/ArticleMain.css'


function ArticleMain({title='Indefinido', image, parrafo}) {
    return (
        <>
        {/* Estas llaves son basicamente el diminutuivo de React.Fragment que sirve para poder llamar dos veces un componente*/}

        <div className='cn-parrafoImage'>
            <div className='cn-imagenProfile'>
                <img src={image} />
            </div>
            <div className='cn-parrafo'>
                <header>
                    <h1>{title}</h1>
                </header>
                <p>
                    {parrafo}
                </p>
            </div>
        </div>
        </> 




    )
}

export default ArticleMain