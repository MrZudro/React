import FirstCarousel from './FirstCarousel'
import ArticleMain from './ArticleMain'
import './estilos/Home.css'

function Home() {
    return (
        <div>
            <FirstCarousel />
            <div className="contenedor">
                <div className="columna-izquierda">
                    </div>
                <div className="columna-central">
                    <article className='pr-articleOnHome'>
                        <ArticleMain title="Who am I?" />
                    </article>
                    </div>
                <div className="columna-derecha">
                </div>
            </div>
        </div>




    )
}

export default Home