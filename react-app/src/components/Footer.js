import React from 'react';
import {Container, Row, Form, Col, ListGroup, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FooterComposant(props){
    return(
        <footer className="shadow bg-body border-top">
            <Container>
                <Row>
                    <Col xs={6} xl={3}>
                        <h5>À PROPOS DE</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item><Link to='/about-us'>Développeur</Link></ListGroup.Item>
                            <ListGroup.Item><Link to='/cart'>Panier</Link></ListGroup.Item>
                            <ListGroup.Item><Link to='/'>Jeux</Link></ListGroup.Item>
                            <ListGroup.Item className='text-muted'>Support</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col xs={6} xl={5}>
                        <h5>DERNIERES SORTIES</h5>
                        <ListGroup variant="flush">
                            {props.topGames && props.topGames.map((game, i) => 
                                <ListGroup.Item key={i}>
                                    <Link to={'/Game?ID=' + game.id}>{game.attributes.title}</Link>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col>

                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><h5>NEWSLETTER</h5></Form.Label>
                                <Form.Control type="email" placeholder="Entrez votre e-mail" />
                                <Form.Text className="text-muted">
                                    Nous ne partagerons pas votre e-mail.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary">Souscrire</Button>
                        </Form>
                    </Col>
                </Row>
                <div className="d-flex justify-content-between border-top">
                    <h6>© 2022 Inde-Store Company, Inc. Tout droits réservés.</h6>
                </div>
            </Container>
        </footer>
    )
}

export default FooterComposant;
    