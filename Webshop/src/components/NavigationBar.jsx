import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'


function NavigationBar() {


  return (
    
         <Navbar expand="lg" bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shops">Shops</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/login">Log in</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to ="/location">Location</Nav.Link>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    
  )
}

export default NavigationBar