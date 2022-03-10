import React from 'react';
import { Nav, Navbar, Container, Button, NavDropdown, Row, Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
            <Container>
                <h1><Link to='/'>INDE-STORE</Link></h1>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link to="/games">Jeux</Link>
                        <Link to="/about-us">A propos de nous</Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title={ "Panier: " + ((localStorage.getItem('gamesInTheCart') && JSON.parse(localStorage.getItem('gamesInTheCart')).length) || "0")} id="collasible-nav-dropdown" menuVariant="dark" align="end" className='cart'>
                            <NavDropdown.Header className='text-center'>Votre panier</NavDropdown.Header>

                            <NavDropdown.Divider/>
                            <Container className='list-articles'>  {localStorage.getItem('gamesInTheCart') && JSON.parse(localStorage.getItem('gamesInTheCart')).map((game, i)=>
                                <Row className='centered-alignment' key={i}>
                                    <Col xs={2}>
                                        <Button variant="outline-danger" size="sm" onClick={()=>props.updateTheCart(game, i, false)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                            </svg>
                                        </Button>
                                    </Col>
                                    <Col xs={3}><Image className='fluid float-start' src={"http://localhost:1337" + game.attributes.cover.data.attributes.formats.thumbnail.url}/></Col>
                                    <Col className="text-start"><span className='text-wrap'>{game.attributes.title}</span></Col> 
                                    <Col xs={3} className=''><strong>{game.attributes.price + " €"}</strong></Col>
                                    <div className='line'/>
                                </Row>
                            )}</Container>
                            

                            <NavDropdown.Divider/>
                            <div className=''>
                                <NavDropdown.Header>
                                    <Row>
                                        <Col><span>Total :</span></Col>
                                        <Col><strong className='float-end'>{(localStorage.getItem('totalPrice') || "0,00") + " €"}</strong></Col>
                                    </Row>
                                </NavDropdown.Header>
                                <div className='text-center'>
                                    <Link to="/cart"><Button  size="sm" variant="light" style={{ width: '50%' }}>Aller au panier</Button></Link>
                                </div>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;