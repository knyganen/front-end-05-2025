import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useContext } from 'react';
import { CartSumContext } from '../context/CartSumContext';
import { AuthContext } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import i18n from "../i18n.ts"


function Menu() {
  const {cartSum} = useContext(CartSumContext);
  const {loggedIn, setLoggedIn} = useContext(AuthContext);
  const { t } = useTranslation();

  const muudaKeelEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("keel", "en");
  }

  const muudaKeelET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("keel", "et");
  }

  return (
    <div>
    <button onClick={muudaKeelEN}>EN</button>
    <button onClick={muudaKeelET} >ET</button>
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">{t("Home")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("Shops")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("Cart")}</Nav.Link>
            {loggedIn === true && <Nav.Link as={Link} to="/admin">{t("Admin")}</Nav.Link>}
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">{t("Log in")}</Nav.Link>
            <Nav.Link as={Link} to="/signup">{t("Sign up")}</Nav.Link>
            {<button onClick={() => setLoggedIn(false)}>{t("Log out")}</button>}
            <Nav.Link as={Link} to="/contact">{t("Contact")}</Nav.Link>
            <Link to="/parcelmachines"><>{t("Parcel machines")}</></Link>
          <div>{cartSum.toFixed(2)}€</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu
