import React, { Component } from 'react';
import { Container, Carousel, Row, Col, Button, Stack, Placeholder } from 'react-bootstrap';
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
      loading:true
    }
  }

  componentDidMount = async () => {
    const queryString = await window.location.search;
    const urlParams = await new URLSearchParams(queryString);
    const ID = await urlParams.get("ID")

    const response = await fetch('http://localhost:1337/api/games/' + ID + '?populate=*', {
      method: 'GET', 
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'}}
    )
    const game = await response.json()

    const response2 = await fetch('http://localhost:1337/api/developers?populate=*&filters[id][$eq]=' + game.data.attributes.developer.data.id, {
      method: 'GET', 
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'}}
    )
    const developer = await response2.json()

    const response3 = await fetch('http://localhost:1337/api/editors?populate=*&filters[id][$eq]=' + game.data.attributes.editor.data.id, {
      method: 'GET', 
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'}}
    )
    const editor = await response3.json()

    this.setState({
      game:game,
      developer:developer,
      editor:editor,
      loading:false
    })
  }

  render(){
    return (
      <div>
        <img className='backgroundIMG' src={this.state.game.data && "http://localhost:1337"+this.state.game.data.attributes.cover.data.attributes.formats.large.url} />
        <Menu updateTheCart={this.props.updateTheCart}/>
        <Container>
          <Row>
            <Col xs={8} className="bg-dark information">
              <Carousel>
                {this.state.loading ?
                    (<Placeholder animation='glow'>
                      <Placeholder className='imgPlaceholder' xs={11}/>
                    </Placeholder>)
                  :
                  (this.state.game.data && this.state.game.data.attributes.media.data.map((media,i)=>
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      src={"http://localhost:1337" + media.attributes.formats.large.url}
                      alt={"slide "+i}
                    />
                  </Carousel.Item>)) 
                }
              </Carousel>
              <div className='genre space'>
                <h5>Genres</h5>
                <Row>
                  {this.state.loading ?
                    (<Placeholder animation='glow'>
                      <Placeholder xs={2}/><Placeholder xs={2}/><Placeholder xs={2}/><Placeholder xs={2}/>
                    </Placeholder>)
                    :
                    (this.state.game.data && this.state.game.data.attributes.genres.data
                      .map((genresGame,i)=> {
                        const genresItem = this.props.gameGenres.find(tag => tag.id === genresGame.id)
                        return <Col key={i} className="m-2"><span className="fw-bold border-bottom text-start">{genresItem.attributes.name}</span></Col>
                      }))                    
                  }
                </Row>
              </div>
              {
                this.state.loading ? 
                  (<Placeholder animation='glow'>
                    <Placeholder xs={8} size="lg"/>
                    <Placeholder xs={12} size="lg"/>
                    <Placeholder xs={9} size="lg"/>
                    <Placeholder xs={11} size="lg"/>
                    <Placeholder xs={10} size="lg"/>
                    <Placeholder xs={10} size="lg"/>
                    <Placeholder xs={5} size="lg"/>
                    <Placeholder xs={8} size="lg"/>
                  </Placeholder>)
                  :
                  (this.state.game.data &&
                    <ReactMarkdown className="description">{this.state.game.data.attributes.description}</ReactMarkdown>
                  ) 
                }
            </Col>
            <Col xs={4} className="bg-dark gameCart">
              <div className='gameCart'>
                {this.state.loading ?
                  (<Placeholder animation='glow'>
                    <Placeholder className='coverPlaceholder' xs={11}/>
                  </Placeholder>)
                  :
                  (this.state.game.data && 
                  <img className='cover' src={"http://localhost:1337" + this.state.game.data.attributes.cover.data.attributes.formats.small.url} alt="cover du jeu"/>)  
                }
                
                <Row className='centered-alignment'>
                    <Col xl={8}><h3 className='text-start title'>{this.state.loading ? (<Placeholder xs={10}/>) : (this.state.game.data && this.state.game.data.attributes.title) }</h3></Col>
                    <Col><h5 className='text-center fw-bold text-info'>{this.state.loading ? (<Placeholder xs={8} size="lg"/>) : (this.state.game.data && this.state.game.data.attributes.price + " €") }</h5></Col>
                </Row>
                <Stack gap={2} className="col-md-8 mx-auto">
                  <Button variant="secondary" onClick={()=>this.props.updateTheCart(this.state.game.data, null, true)}>Ajouter au panier</Button>
                  <Button className='officialsite' variant="secondary" href={this.state.game.data && this.state.game.data.attributes.link} >Site Officiel</Button>
                </Stack>
                <div className='line'></div>
                <Row className='centered-alignment'>
                  <Col xl={4}>
                    <h5>Date de sortie</h5>
                  </Col>
                  <Col>
                    <p>{this.state.loading ? (<Placeholder xs={7} size="lg"/>) : (this.state.game.data && this.state.game.data.attributes.launched_date) }</p>
                  </Col>
                </Row>

                <div className='line'></div>
                <Row className='centered-alignment'>
                  <Col xl={4}>
                    <h5>Développeur</h5>
                  </Col>
                  <Col xl={5}>
                    <p>{this.state.loading ? (<Placeholder xs={7} size="lg"/>) : (this.state.game.data && this.state.game.data.attributes.developer.data.attributes.name)}</p>
                  </Col>
                  <Col xl={3}>
                    {
                    this.state.loading ?
                      (<Placeholder className="iconPlaceholder" />)
                      :
                      (<img className='icon' src={ this.state.developer.data && "http://localhost:1337"+this.state.developer.data[0].attributes.icon.data.attributes.formats.thumbnail.url }/>)
                    }
                  </Col>
                </Row>
                <div className='line'></div>
                <Row className='centered-alignment'>
                  <Col xl={4}>
                    <h5>Éditeur</h5>
                  </Col>
                  <Col xl={5}>
                    <p>{this.state.loading ? (<Placeholder xs={7} size="lg"/>) : (this.state.game.data && this.state.game.data.attributes.editor.data.attributes.name)}</p>
                  </Col>
                  <Col xl={3}>
                    {
                    this.state.loading ?
                      (<Placeholder className="iconPlaceholder" />)
                      :
                      (<img className='icon text-start' src={ this.state.editor.data && "http://localhost:1337"+this.state.editor.data[0].attributes.icon.data.attributes.formats.thumbnail.url }/>)
                    }
                  </Col>
                </Row> 
                  <div className='line'></div>
                <Row>
                  <Col xl={4}>
                    <h5>Plateforme</h5>
                  </Col>
                    {
                    this.state.loading ?
                      (<Placeholder xs={10} size="lg"/>)
                      :
                      (this.state.game.data && this.state.game.data.attributes.platforms.data
                        .map((platformGame,i)=> {
                          const platformItem = this.props.gamePlatforms.find(plat => plat.id === platformGame.id)
                          return <Col key={i}><img className='icon' src={"http://localhost:1337" + platformItem.attributes.icon.data.attributes.formats.thumbnail.url} /></Col>
                        }))
                      
                    }
                </Row>
              </div>
            </Col>
          </Row>
          <Row className='bg-dark justify-content-md-center'>
            <Col xs={8}>
              {
                this.state.loading ?
                  (<Placeholder animation='glow'>
                    <Placeholder className='imgPlaceholder' xs={12}/>
                  </Placeholder>)
                  :
                  (this.state.game.data &&
                  <iframe className="vid mx-auto" src={this.state.game.data.attributes.vidLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>)
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