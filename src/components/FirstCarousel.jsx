import Carousel from 'react-bootstrap/Carousel';
import ExeOne from './imagenes/exeone.jpg'
import ExeTwo from './imagenes/exetwo.jpg'
import ExeThree from './imagenes/exethree.jpg'
import './estilos/FirstCarousel.css'

function FirstCarousel() {
    return (
        <Carousel className='CustomCarousel'>
            <Carousel.Item>
                <img src={ExeOne} text='Primera diapositiva'/>
                <Carousel.Caption>
                <h3>Titulo de la primera imagen</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ExeTwo} text='Segunda diapositiva'/>
                <Carousel.Caption>
                <h3>Titulo de la segunda imagen</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ExeThree} text='Tercera diapositiva'/>
                <Carousel.Caption>
                <h3>Titulo de la tercera imagen</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default FirstCarousel;