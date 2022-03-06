import React, { Component } from 'react';
import { Nav, Navbar, Container, Button, NavDropdown, Row, Col, Image, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                <Container>
                    <h1><Link to='/'>INDE-STORE</Link></h1>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/games">Jeux</Link>
                            <NavDropdown title="Genres" id="collasible-nav-dropdown" menuVariant="dark" className='genres'>

                                {this.props.gameGenres && this.props.gameGenres.map((gameGenre, i)=>
                                    <NavDropdown.ItemText key={i}>
                                        <Link to=''>{gameGenre.attributes.name}</Link>
                                    </NavDropdown.ItemText>
                                )}

                            </NavDropdown>
                            <Link to="/about-us">A propos de nous</Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Panier" id="collasible-nav-dropdown" menuVariant="dark" align="end" className='cart'>
                                <NavDropdown.Header className='text-center'>Votre panier</NavDropdown.Header>

                                <NavDropdown.Divider/>

                                {localStorage.getItem('gamesInTheCart') && JSON.parse(localStorage.getItem('gamesInTheCart')).map((article, i)=>
                                    <NavDropdown.Item key={i} as="button">
                                        <Row className='game-info'>
                                            <Col xs={2}>
                                                <Button variant="danger" size="sm" /*onMouseDown={this.props.deleteGameFromTheCart(i)}}*/>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                                    </svg>
                                                </Button>
                                            </Col>
                                            <Col xs={4}><Image className='fluid float-start' src={article && "http://localhost:1337"+article.attributes.cover.data.attributes.formats.thumbnail.url}/></Col>
                                            <Col xs={5} className="text-start"><span className='text-wrap'>{article && article.attributes.title}</span></Col> 
                                            <Col xs={3} className='text-end'><strong>{article && article.attributes.price + " €"}</strong></Col>
                                        </Row>
                                        <div className='line'></div>
                                    </NavDropdown.Item>
                                )}

                                <NavDropdown.Divider/>

                                <NavDropdown.Header>
                                    <Row>
                                        <Col><span>Total :</span></Col>
                                        <Col><strong className='float-end'>{(localStorage.getItem('totalPrice') || "0,00") + " €"}</strong></Col>
                                    </Row>
                                </NavDropdown.Header>
                                <NavDropdown.Item as="button" className='text-center'><Link to="/cart">ALLER AU PANIER</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Menu;