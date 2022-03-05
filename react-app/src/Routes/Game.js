import React, { Component } from 'react';
import { CarouselItem, Container, Carousel } from 'react-bootstrap';
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
        <h1 id='title' className='text-center'>{this.state.game.data && this.state.game.data.attributes.title}</h1>
        <Carousel>
          {this.state.game.data && this.state.game.data.attributes.media.data.map((caca,i)=>
            <CarouselItem>
              {/*<img
                src={this.state.game.data.attributes.media[i].data.attributes.url && "http://localhost:1337"+this.state.game.data.attributes.media.data[i].attributes.url,
                this.state.game.data.attributes.media[i].data.attributes.formats.medium.url && "http://localhost:1337"+this.state.game.data.attributes.media.data[i].attributes.formats.medium.url}
              />*/}
            </CarouselItem>
          )}
        </Carousel>
      </Container>
      </>
      );
    }
  }


export default Game;