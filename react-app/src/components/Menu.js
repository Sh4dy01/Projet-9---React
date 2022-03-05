import React, { Component } from 'react';
import { Nav, Navbar, Container, Button, NavDropdown, Row, Col, Image, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameArticlesInTheCart: []
        }
    }

    componentDidMount(){
        localStorage.getItem('gameArticlesInTheCart') && this.setState({
            gameArticlesInTheCart : JSON.parse(localStorage.getItem('gameArticlesInTheCart'))
        })
    }

    render() {
        console.log(this.props.gameGenres)
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to="/"><h1>INDE-STORE</h1></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/games">Jeux</Link>
                            <NavDropdown title="Genres" id="collasible-nav-dropdown" menuVariant="dark">

                                {this.props.gameGenres && this.props.gameGenres.map((gameGenre, i)=>
                                    <NavDropdown.Item key={i}>
                                        <Link to=''>{gameGenre.attributes.name}</Link>
                                    </NavDropdown.Item>
                                )}

                            </NavDropdown>
                            <Link to="/about-us">A propos de nous</Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Panier" id="collasible-nav-dropdown" menuVariant="dark" align="end">
                                <NavDropdown.Header className='text-center'>Liste d'articles</NavDropdown.Header>

                                {this.state.gameArticlesInTheCart.data && this.state.gameArticlesInTheCart.data.map((article, i)=>
                                    <NavDropdown.Item key={i}>
                                        <Row>
                                            <Col><Image className='fluid rounded float-start' src={article && "http://localhost:1337"+article.attributes.cover.data.attributes.formats.small.url}/></Col>
                                            <Col lg="auto" className='text-center'><span>{article && article.attributes.title}</span></Col> 
                                            <Col><span className='float-end'>{article && article.attributes.price}</span></Col>
                                        </Row>
                                    </NavDropdown.Item>
                                )}
                                <NavDropdown.Divider />
                                <NavDropdown.Header>
                                    <Row>
                                        <Col><span>Total :</span></Col>
                                        <Col><span className='float-end'>{localStorage.getItem('totalPrice') + " €"}</span></Col>
                                    </Row>
                                </NavDropdown.Header>
                                <NavDropdown.Item><Link to="/cart"><Button variant="outline-light">ALLER AU PANIER</Button></Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Menu;