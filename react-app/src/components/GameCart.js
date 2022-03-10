import React from 'react';
import {Button, Row,Image, Col, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function GameCart(props) {
    return (
        <Row className="centered-alignment">
            <Col xs={1}>
                <Button variant="danger" size="sm" onClick={() => props.updateTheCart(props.gameArticle, props.gameId, false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                    </svg>
                </Button>
            </Col>
            <Col>
                <Row className="centered-alignment">
                    <Col xs={3}>
                        <Link to={"/Game?ID=" + props.gameArticle.id}>
                            <Image className='fluid rounded' src={"http://localhost:1337" + props.gameArticle.attributes.cover.data.attributes.formats.small.url}></Image>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"/Game?ID=" + props.gameArticle.id}>
                            <h3 className='text-start'>{props.gameArticle.attributes.title}</h3>
                        </Link>
                        <Row className='platform-selection'>
                            <Col xs={12} md={4}>
                                <span>Plateforme: </span>
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example">
                                {props.gameArticle.attributes.platforms.data.map((platform, i) => 
                                    <option key={i} value={i}>{platform.attributes.name}</option>)}
                                </Form.Select>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={3}><strong className='float-end'>{props.gameArticle.attributes.price + " €"}</strong></Col>
                </Row>
            </Col>
            <div className='line'></div>
        </Row>
    );
}

export default GameCart;