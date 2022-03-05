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
        <Row>
            <Col><Image className='fluid rounded float-start' src={this.props.gameArticle && "http://localhost:1337"+this.props.gameArticle.attributes.cover.data.attributes.formats.large.url}></Image></Col>
            <Col><h4>{this.props.gameArticle && this.props.gameArticle.attributes.title}</h4></Col>
            <Col><h5>{this.props.gameArticle && this.props.gameArticle.attributes.price}</h5></Col>
        </Row>
    );
    }
}

export default GameCart;