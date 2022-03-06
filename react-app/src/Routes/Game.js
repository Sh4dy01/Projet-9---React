import React, { Component } from 'react';
import { CarouselItem, Container, Carousel, Row, Col, Button } from 'react-bootstrap';
import Menu from '../components/Menu';

class Game extends Component {

  constructor(props){
    super(props)
    this.state={
      game:[]
    }
  }

  componentDidMount = async () => {
    const queryString = await window.location.search;
    const urlParams = await new URLSearchParams(queryString);
    const ID = await urlParams.get("ID")
    const response = await fetch('http://localhost:1337/api/games/'+ID+'?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const game = await response.json()
    this.setState({game:game})
  }

  render(){
    return (
      <>
      <Menu/>
      <iframe class="vid" src="https://www.youtube.com/embed/AYTjXMytBFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <Container>
        <Row>
          <Col xs={8} class="bg-dark">
            <Carousel>
              { this.state.game.data &&
                this.state.game.data.attributes.media.data.map((media,i)=>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={"http://localhost:1337"+media.attributes.formats.large.url}
                      alt={"slide "+i}
                    />
                  </Carousel.Item>
              )}
            </Carousel>
          </Col>
          <Col xs={4} class="bg-dark gameCart position-sticky">
            {this.state.game.data && <img src={"http://localhost:1337"+this.state.game.data.attributes.cover.data.attributes.formats.small.url} alt="cover du jeu"/>}
            {this.state.game.data && <h2 class='text-center title'>{this.state.game.data.attributes.title}</h2>}
            <Button class="mx-auto" variant="outline-secondary">Ajouter au panier</Button>
          </Col>
        </Row>
      </Container>
      </>
      );
    }
  }


export default Game;