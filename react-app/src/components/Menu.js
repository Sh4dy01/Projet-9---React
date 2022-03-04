import React, { Component } from 'react';
import { Nav, Navbar, Container, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
        <Navbar bg="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand><Link to="/">INDE-STORE</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Genres" id="basic-nav-dropdown">
                            {/* map pour tous les genres */}
                            <NavDropdown.Item><Link to="/">INDE-STORE</Link></NavDropdown.Item>

                        </NavDropdown>
                        <Link to="/games">Jeux</Link>
                        <Link to="/about-us" className="d-flex">A propos de nous</Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
}

export default Menu;