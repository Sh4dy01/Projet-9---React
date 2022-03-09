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
          <Card.Img className="fluid cardImg" variant="top" src={"http://localhost:1337" + this.props.gameArticle.attributes.cover.data.attributes.formats.medium.url} />
          <Card.Title className="text-center">{this.props.gameArticle.attributes.title}</Card.Title>
        </Link>
        <Card.Footer>
          <Row>
            {
              this.props.gameArticle.attributes.platforms && this.props.gamePlatforms && this.props.gameArticle.attributes.platforms.data
              .map((platformGame,i)=> {
                const platformItem = this.props.gamePlatforms.find(plat => plat.id===platformGame.id)
                return <Col key={i}><img className='icon' src={"http://localhost:1337" + platformItem.attributes.icon.data.attributes.formats.thumbnail.url} /></Col>
              })
            }

            <Col>
              <Button variant="outline-success" 
                onMouseOver={()=>this.mouseHoverTrue()}
                onMouseLeave={()=>this.mouseHoverFalse()}
                onClick={()=>this.props.updateTheCart(this.props.gameArticle, null, true)}>
                {this.state.mouseHover ? "Ajouter" : this.props.gameArticle.attributes.price + " €"}
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    );
  }
}

export default GameArticle;