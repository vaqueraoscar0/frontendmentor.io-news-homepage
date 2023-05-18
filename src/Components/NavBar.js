import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.svg'
import Offcanvas from "react-bootstrap/Offcanvas";

const expand = 'lg'

function NavBar() {
    return (
        <Navbar key={expand} expand={expand} className={"mt-5 p-5"}>
            <Container fluid>
                <Navbar.Brand href={"#"}><img src={logo} alt={'img-logo'}/></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement={"end"}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={'mt-5'}>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className={"justify-content-end flex-grow-1 pe-1"}>
                            <Nav.Link href={"#action1"}><h2 className={'navbar-text-h2'}>Home</h2></Nav.Link>
                            <Nav.Link href={"#action2"}><h2 className={'navbar-text-h2'}>News</h2></Nav.Link>
                            <Nav.Link href={"#action1"}><h2 className={'navbar-text-h2'}>Popular</h2></Nav.Link>
                            <Nav.Link href={"#action2"}><h2 className={'navbar-text-h2'}>Trending</h2></Nav.Link>
                            <Nav.Link href={"#action2"}><h2 className={'navbar-text-h2'}>Categories</h2></Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavBar;
