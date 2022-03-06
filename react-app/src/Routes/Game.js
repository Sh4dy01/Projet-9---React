import React, { Component } from 'react';
import { CarouselItem, Container, Carousel, Row, Col, Button, Stack } from 'react-bootstrap';
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
      <Container>
        <Row>
          <Col xs={8} className="bg-dark information">
            {this.state.game.data && <h2 className='text-center title'>{this.state.game.data.attributes.title}</h2>}
            <Carousel>
              { this.state.game.data &&
                this.state.game.data.attributes.media.data.map((media,i)=>
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      src={"http://localhost:1337"+media.attributes.formats.large.url}
                      alt={"slide "+i}
                    />
                  </Carousel.Item>
              )}
            </Carousel>
            <div className='genre'>
              <h5>Genre</h5>

            </div>
            {
              this.state.game.data &&
              <div className="description">{this.state.game.data.attributes.description}</div>
            }
            {
              this.state.game.data &&
              <iframe className="vid" src={this.state.game.data.attributes.vidLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            }
          </Col>
          <Col xs={4} className="bg-dark">
            <div className='gameCart'>
              {this.state.game.data && <img src={"http://localhost:1337"+this.state.game.data.attributes.cover.data.attributes.formats.small.url} alt="cover du jeu"/>}
              {this.state.game.data && <h3 className='text-center title'>{this.state.game.data.attributes.title}</h3>}
              <Stack gap={2} className="col-md-8 mx-auto">
                <Button variant="secondary">ajouter au panier</Button>
                <Button className='officialsite' variant="secondary" href={this.state.game.data && this.state.game.data.attributes.link} >site officiel</Button>
              </Stack>
              {this.state.game.data && <h5>{this.state.game.data.attributes.price + " €"}</h5>}
              <div className='line'></div>
                <Row>
                  <Col>
                    <h5>Développeur</h5>
                  </Col>
                </Row>
                  <Col>
                    <div className='line'></div>
                  </Col>
                <Row>
                  <Col>
                    <h5>Editeur</h5>
                  </Col>
                </Row>
                  <div className='line'></div>
                <Row>
                  <Col>
                    <h5>Plarformes</h5>
                  </Col>
                </Row>
            </div>
          </Col>
        </Row>
      </Container>
      </>
      );
    }
  }


export default Game;