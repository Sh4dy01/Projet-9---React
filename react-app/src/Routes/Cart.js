import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import Menu from '../components/Menu';
import GameCart from '../components/GameCart';
import FooterComposant from '../components/Footer';

class Cart extends Component {
  constructor(props){
    super(props)

    this.state={

    }
  }


  render() {
    return (
      <div>
        <Menu gameGenres={this.props.gameGenres}/>
        <Container className='bg-dark cart-page'>
          <h2 className='text-center'>PANIER</h2>
          <Container>
            {localStorage.getItem('gamesInTheCart') && JSON.parse(localStorage.getItem('gamesInTheCart')).map((article, i)=>
              <Row className='game-info' key={i}>
                <Col xs={1}>
                  <Button variant="danger" size="sm" onClick={()=>this.props.deleteGameFromTheCart(i, article.attributes.price)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                    </svg>
                  </Button>
                </Col>
                <Col>
                  <Link to={"/Game?ID=" + article.id}>
                    <GameCart key={i} gameArticle={article}></GameCart>
                  </Link>
                </Col>
              </Row>
            )}
            <div className='line'></div>
            <Row>
              <Col><span>Total: </span></Col>
              <Col><strong className='float-end'>{(localStorage.getItem('totalPrice') || "0,00") + " €"}</strong></Col>
            </Row>
          </Container>
        </Container>
        <FooterComposant/>
      </div>
    );
  }
}

export default Cart;