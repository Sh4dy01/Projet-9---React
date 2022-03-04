import React, { Component } from 'react';
import { Nav, Navbar, Container, Button, NavDropdown, Form, FormControl, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
  
class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

        }
      }

  render() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/"><Navbar.Brand>INDE-STORE</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/games">Jeux</Link>
                        <NavDropdown title="Genres" id="collasible-nav-dropdown">

                            {/* Map all the article in the cart */}

                        </NavDropdown>
                        <Link to="/about-us">A propos de nous</Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Panier" id="collasible-nav-dropdown">

                            {/* Map all the article in the cart */}

                            <NavDropdown.Divider />
                            <NavDropdown.Item>Total: </NavDropdown.Item>
                            <NavDropdown.Item><Link to="/cart"><Button variant="outline-dark">ALLER AU PANIER</Button></Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
}

export default Menu;