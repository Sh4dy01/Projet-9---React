import React, { Component } from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'

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
        <Card className="shadow-sm p-3 mb-5 bg-body"> 
            <Link to={"/Game?ID="+this.props.gameArticle.id}>
            <Card.Img className="fluid" variant="top" src={this.props.gameArticle && "http://localhost:1337"+this.props.gameArticle.attributes.cover.data.attributes.formats.medium.url} />
            </Link>
            <Card.Title className="text-center">{this.props.gameArticle && this.props.gameArticle.attributes.title}</Card.Title>
            <Card.Footer>
                <Row>
                {/*<img src={this.props.gameArticle && this.props.gamePlatforms.data && this.props.gamePlatforms.data.map((i)=> this.props.gamePlatforms.data[i].id == this.props.gameArticle.id && "http://localhost:1337"+this.props.gamePlatforms.data.attributes.icon.data.attributes.formats.small.url)} />*/}
                <Col><Button sier ="sm" variant="outline-success" onMouseOver={()=>this.mouseHoverTrue()} onMouseLeave={()=>this.mouseHoverFalse()}>{this.state.mouseHover ? "Ajouter" : this.props.gameArticle && this.props.gameArticle.attributes.price+" €"}</Button></Col>
                </Row>
            </Card.Footer>
        </Card>
    );
    }
}
export default GameArticle;