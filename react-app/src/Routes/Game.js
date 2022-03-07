import React, { Component } from 'react';
import { CarouselItem, Container, Carousel, Row, Col, Button, Stack } from 'react-bootstrap';
import FooterComposant from '../components/Footer';
import Menu from '../components/Menu';
import ReactMarkdown from 'react-markdown'

class Game extends Component {

  constructor(props){
    super(props)
    this.state={
      game:[],
      developer:[],
      editor:[],
      platforms:[],
      genres:[]
    }
  }

  componentDidMount = async () => {
    const queryString = await window.location.search;
    const urlParams = await new URLSearchParams(queryString);
    const ID = await urlParams.get("ID")
    const response = await fetch('http://localhost:1337/api/games/'+ID+'?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const game = await response.json()

    const response2 = await fetch('http://localhost:1337/api/developers?populate=*&filters[id][$eq]='+game.data.attributes.developer.data.id, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const developer = await response2.json()

    const response3 = await fetch('http://localhost:1337/api/editors?populate=*&filters[id][$eq]='+game.data.attributes.editor.data.id, {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const editor = await response3.json()

    const response4 = await fetch('http://localhost:1337/api/platforms?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const platforms = await response4.json()

    const response5 = await fetch('http://localhost:1337/api/genres?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const genres = await response5.json()

    this.setState({platforms:platforms,game:game,developer:developer,editor:editor,genres:genres})
    }

  render(){
    console.log(this.state);
    return (
      <div>
        <img className='backgroundIMG' src={this.state.game.data && "http://localhost:1337"+this.state.game.data.attributes.cover.data.attributes.formats.large.url} />
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
                <div className='space'>
                  <h5>genres</h5>
                  <p>
                    {this.state.game.data && this.state.game.data.attributes.genres.data
                      .map((genresGame,i)=> {
                          const genresItem = this.state.genres.data.find(tag => tag.id===genresGame.id)
                          return " / "+genresItem.attributes.name
                        })
                        }
                  </p>
                </div>
              </div>
              {
                this.state.game.data &&
                <ReactMarkdown className="description">{this.state.game.data.attributes.description}</ReactMarkdown>
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
                      <h5>Plateformes</h5>
                    </Col>
                      {this.state.game.data && this.state.game.data.attributes.platforms.data
                      .map((platformGame,i)=> {
                        const platformItem = this.state.platforms.data.find(plat => plat.id===platformGame.id)
                        return <Col ><img className='icon' src={"http://localhost:1337"+platformItem.attributes.icon.data.attributes.formats.thumbnail.url} /></Col>
                      })
                      }
                  </Row>
              </div>
            </Col>
          </Row>
          <Row className='bg-dark justify-content-md-center'>
            <Col xs={8}>
              {
                this.state.game.data &&
                <iframe className="vid mx-auto" src={this.state.game.data.attributes.vidLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              }
            </Col>
          </Row>
        </Container>
        <FooterComposant/>
      </div>
      );
    }
  }


export default Game;