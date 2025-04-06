import FirstCarousel from './FirstCarousel'
import ArticleMain from './ArticleMain'
import './estilos/Home.css'
import { AsideContent } from './AsideContent'
import Me from './imagenes/profile.jpg'
import Arcane from './imagenes/arcane.jpg'
import Band from './imagenes/LinkinPark.jpg'
import FollowCard from './FollowCard'
import AsideDataJson from './data_de_prueba/AsideData.json'

function Home() {
    console.log(AsideDataJson)
    const paragraph = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis rem illo voluptatibus quibusdam est, ratione quod, velit ipsum voluptas fuga alias, nemo et quos porro. Sed, inventore. Mollitia, obcaecati alias.'
    return (
        <div>
            <article className='cn-carousel'>
                <FirstCarousel />
            </article>

            <div className="contenedor">
                <div className="columna-izquierda">
                    <aside>
                        {AsideDataJson.map(({ id, title, content }) => (
                            <AsideContent
                                key={id}
                                title={title}
                                content={content.map((item, index) => {
                                    if (item.tipo === 'FollowCard') {
                                    return (
                                                <FollowCard
                                                    key={index}
                                                    isFollowing={item.isFollowing}
                                                    nombreUsuario={item.nombreUsuario}
                                                    name={item.name}
                                                />
                                            );
                                    }else if(item.tipo === 'Parrafo') {
                                    return <p key={index}>{item.texto}</p>;
                                    } else {
                                    return null;
                                    }
                                })}
                            />
                        ))}
                    </aside>
                </div>
                <div className="columna-central">
                    <article className='pr-articleOnHome'>
                        <ArticleMain title="Who am I? " image={Me} parrafo={paragraph}/>
                    </article>
                    <article className='pr-articleOnHome'>
                        <ArticleMain title='Linkin Park' image={Band} parrafo={paragraph} />
                    </article>

                    </div>
                <div className="columna-derecha">
                    <AsideContent title="Imagen del dia" content={<img src={Arcane} />} typeContent='imagen' />
                    <AsideContent title='Vistazos nuevos' content={paragraph}/>
                </div>
            </div>
        </div>




    )
}

export default Home