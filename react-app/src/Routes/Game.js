import React, { Component } from 'react';
import { CarouselItem, Container, Carousel, Row, Col, Button, Stack } from 'react-bootstrap';
import FooterComposant from '../components/Footer';
import Menu from '../components/Menu';

class Game extends Component {

  constructor(props){
    super(props)
    this.state={
      game:[],
      developer:[],
      editor:[],
      platforms:[]
    }
  }

  componentDidMount = async () => {
    const queryString = await window.location.search;
    const urlParams = await new URLSearchParams(queryString);
    const ID = await urlParams.get("ID")
    const response = await fetch('http://localhost:1337/api/games/'+ID+'?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const game = await response.json()
    this.setState({game:game})

    const response2 = await fetch('http://localhost:1337/api/developers?populate=*&filters[id][$eq]='+this.state.game.data.attributes.developer.data.id, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const developer = await response2.json()
    this.setState({developer:developer})

    const response3 = await fetch('http://localhost:1337/api/editors?populate=*&filters[id][$eq]='+this.state.game.data.attributes.editor.data.id, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const editor = await response3.json()
    this.setState({editor:editor})

    const response4 = await fetch('http://localhost:1337/api/platforms?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const platforms = await response4.json()
    this.setState({platforms:platforms})

    const gamePlatforms = this.state.platforms.data.filter((platforms,i)=>
      platforms.id === this.state.game.data.attributes.platforms.data.id
    )
    this.setState({platforms:gamePlatforms})

  }

  render(){
    return (
      <div>
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
                <iframe className="vid mx-auto" src={this.state.game.data.attributes.vidLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              }
            </Col>
            <Col xs={4} className="bg-dark">
              <div className='gameCart'>
                {this.state.game.data && <img className='cover' src={"http://localhost:1337"+this.state.game.data.attributes.cover.data.attributes.formats.small.url} alt="cover du jeu"/>}
                {this.state.game.data && <h3 className='text-center title'>{this.state.game.data.attributes.title}</h3>}
                <Stack gap={2} className="col-md-8 mx-auto">
                  <Button variant="secondary" onMouseDown={()=>this.props.addGameInTheCart(this.state.game.data, this.state.game.data.attributes.price)}>ajouter au panier</Button>
                  <Button className='officialsite' variant="secondary" href={this.state.game.data && this.state.game.data.attributes.link} >site officiel</Button>
                </Stack>
                {this.state.game.data && <h5>{this.state.game.data.attributes.price + " €"}</h5>}
                <div className='line'></div>
                  <Row>
                    <Col>
                      <h5>Développeur</h5>
                    </Col>
                    <Col>
                      <p>{ this.state.game.data && this.state.game.data.attributes.developer.data.attributes.name}</p>
                    </Col>
                    <Col>
                      <img className='icon' src={ this.state.developer.data && "http://localhost:1337"+this.state.developer.data[0].attributes.icon.data.attributes.formats.thumbnail.url }/>
                    </Col>
                  </Row>
                  <div className='line'></div>
                  <Row>
                    <Col>
                      <h5>Editeur</h5>
                    </Col>
                    <Col>
                      <p>{ this.state.game.data && this.state.game.data.attributes.editor.data.attributes.name}</p>
                    </Col>
                    <Col>
                      <img className='icon' src={ this.state.editor.data && "http://localhost:1337"+this.state.editor.data[0].attributes.icon.data.attributes.formats.thumbnail.url }/>
                    </Col>
                  </Row>
                    <div className='line'></div>
                  <Row>
                    <Col>
                      <h5>Plarformes</h5>
                    </Col>
                      {/*this.state.platforms.data && this.state.platforms.data.map((platforms,i)=>
                      <Col><img className='icon' src={"http://localhost:1337"+platforms[i].attributes.icon.data.attributes.formats.thumbnail.url} /></Col>
            )*/}
                  </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <FooterComposant/>
      </div>
      );
    }
  }


export default Game;