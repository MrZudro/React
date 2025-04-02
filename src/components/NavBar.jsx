import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './estilos/NavBarStyles.css';

function NavBar() {
    return (
    <>
        <Navbar className='navbarme' data-bs-theme="dark">
            <Container>
                <Navbar.Brand className="logos"href="/">EivorKinKest</Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'></Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Inicio</Nav.Link>
                    <Nav.Link href="/calculadora">Calculadora</Nav.Link>
                    <Nav.Link href="/youtube">ScrapYoutube</Nav.Link>
                    <Nav.Link href="/aboutme">Acerca de</Nav.Link>
                    <Nav.Link href="/contact">Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    </>
    );
}

export default NavBar;