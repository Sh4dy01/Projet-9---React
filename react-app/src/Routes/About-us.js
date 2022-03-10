import React from 'react';
import Menu from '../components/Menu';
import {Container, Row, Card, Col} from 'react-bootstrap';
import FooterComposant from '../components/Footer';
import { IconName } from "react-icons/bs";

function AboutUs(){

    return(
        <div>
            <Menu/>
            <div className='aboutUsCover'><h2 className='text-center'>Notre équipe de dev</h2>
            <Container>
                        <Card className='us'>
                            <Row>
                                <Col xs={6}><Card.Img src="/Hugo.jpg"/></Col>
                                <Col xs={6}>
                                    <Card.Title className='text-center'>Hugo Maestracci</Card.Title>
                                </Col>
                            </Row>

                        </Card>
                        <Card className='us'>
                            <Row>
                                <Col xs={6}>
                                    <Card.Title className='text-center'>Guilian Pipart</Card.Title>
                                </Col>
                                <Col xs={6}><Card.Img src="/Guilian.jpg"/></Col>
                            </Row>
                        </Card>
            </Container>
            </div>
            <FooterComposant/>
        </div>
    )
}

export default AboutUs;