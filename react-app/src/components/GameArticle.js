import React, { Component } from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';

class GameArticle extends Component {
    constructor() {
      super();
      this.state = {
        mouseHover:false
      }
    }

    mouseHoverTrue = () => this.setState({mouseHover:true})
    mouseHoverFalse = () => this.setState({mouseHover:false})

    render(){
    return (
        <Card>
            <Card.Img className="fluid" variant="top" src="/fb_image.png" />
            <Card.Body>
                <Card.Title className="text-center">Titre du jeu</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>Plateformes</Col>
                    <Col><Button sier ="sm" variant="outline-success" onMouseOver={()=>this.mouseHoverTrue()} onMouseLeave={()=>this.mouseHoverFalse()}>{this.state.mouseHover ? "Ajouter" : "Prix"}</Button></Col>
                </Row>
            </Card.Footer>
        </Card>
    );
    }
}

export default GameArticle;