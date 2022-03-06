import React from 'react';
import {Container, Row, Form, Col, ListGroup, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FooterComposant(){
    return(
        <footer className="shadow bg-body border-top">
            <Container>
                <Row>
                    <Col xl={3}>
                        <h5>À PROPOS DE</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Développeur</ListGroup.Item>
                            <ListGroup.Item>Support</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col xl={5}>
                        <h5>MEILLEURES VENTES</h5>
                        <ListGroup variant="flush">
                            {/* Map sur 5 jeux les plus vendus*/}
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><h5>Newsletter</h5></Form.Label>
                                <Form.Control type="email" placeholder="Entrez votre e-mail" />
                                <Form.Text className="text-muted">
                                    Nous ne partagerons pas votre e-mail.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">Souscrire</Button>
                        </Form>
                    </Col>
                </Row>
                <div className="d-flex justify-content-between border-top">
                    <p>© 2022 Company, Inc. Tout droits réservés.</p>
                </div>
            </Container>
        </footer>
    )
}

export default FooterComposant;
    