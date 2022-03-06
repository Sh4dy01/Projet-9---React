import React, { Component } from 'react';
import {Card, Button, Row,Image, Col} from 'react-bootstrap';

class GameCart extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }


    render(){
        return (
            <Row className="game-info">
                <div className="line"></div>
                <Col xs={4}><Image className='fluid rounded' src={"http://localhost:1337" + this.props.gameArticle.attributes.cover.data.attributes.formats.small.url}></Image></Col>
                <Col>
                    <h3 className='text-start'>{this.props.gameArticle.attributes.title}</h3>
                    <strong className='float-end'>{this.props.gameArticle.attributes.price + " €"}</strong>
                </Col>
            </Row>
        );
    }
}

export default GameCart;