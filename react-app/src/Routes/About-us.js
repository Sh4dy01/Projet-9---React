import React from 'react';
import Menu from '../components/Menu';
import {Container, Row, Button, Card, Col, Form} from 'react-bootstrap';
import FooterComposant from '../components/Footer';

function AboutUs(){

    return(
        <div>
            <Menu/>
            <Row>
                <Col>
                    <Card></Card>
                </Col>
                <Col>
                    <Card></Card>
                </Col>
            </Row>
            <FooterComposant/>
        </div>
    )
}

export default AboutUs;