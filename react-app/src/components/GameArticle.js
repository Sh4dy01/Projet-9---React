import React, { Component } from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';

class GameArticle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mouseHover:false
      }
    }

    mouseHoverTrue = () => this.setState({mouseHover:true})
    mouseHoverFalse = () => this.setState({mouseHover:false})

    render(){
    return (
        <Card>
            <Card.Img className="fluid" variant="top" src={this.props.gameArticles && "http://localhost:1337"+this.props.gameArticles.attributes.cover.data.attributes.formats.medium.url} />
            <Card.Body>
                <Card.Title className="text-center">{this.props.gameArticles && this.props.gameArticles.attributes.title}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Row>
                {this.props.gameArticles &&
                 this.props.gameArticles.attributes.platforms.data.id.map((id, i)=>
                <Col key={i}>
                    <img src={this.props.platforms.data.map((y)=>
                     if (id == this.props.platforms.data.id[y]) {
                        "http://localhost:1337"+this.props.platforms.data.icon.data.attributes.formats.small.url
                    }
                )}/>
                </Col>)}
                <Col><Button sier ="sm" variant="outline-success" onMouseOver={()=>this.mouseHoverTrue()} onMouseLeave={()=>this.mouseHoverFalse()}>{this.state.mouseHover ? "Ajouter" : "Prix"}</Button></Col>
                </Row>
            </Card.Footer>
        </Card>
    );
    }
}

export default GameArticle;