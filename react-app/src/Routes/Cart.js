import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Menu from '../components/Menu';
import GameCart from '../components/GameCart';
import FooterComposant from '../components/Footer';

class Cart extends Component {
  constructor(props){
    super(props)

    this.state={
      gameArticlesInTheCart:[]
    }
  }

  componentDidMount(){
    localStorage.getItem('gameArticlesInTheCart') && this.setState({
      gameArticlesInTheCart : JSON.parse(localStorage.getItem('gameArticlesInTheCart'))
    })
  }

  render() {
    return (
      <div>
        <Menu gameGenres={this.props.gameGenres}/>
        <Container className='bg-dark'>
          <h2 className='text-center'>PANIER</h2>
          <Container>

            {this.state.gameArticlesInTheCart.data && this.state.gameArticlesInTheCart.data.map((gameArticle, i)=>
              <GameCart key={i} gameArticle={gameArticle}></GameCart>)}
          </Container>
        </Container>
        <FooterComposant/>
      </div>
    );
  }
}

export default Cart;