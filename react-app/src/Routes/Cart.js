import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


import Menu from '../components/Menu';
import GameCart from '../components/GameCart';
import FooterComposant from '../components/Footer';

class Cart extends Component {
  
  sendCommand = async() => {
    console.log(this.props.commandData);
          
    await fetch('http://localhost:1337/api/commandes', {
        method: 'POST', 
        headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
        data: this.props.commandData,
    })
  }

  render(){
    return (
      <div>
        <Menu/>
        
        <Container className='bg-dark cart-page'>
          <Row>
            <Col xs={12} xl={8}>
              <h2 className='text-center'>Panier</h2>
              <div className="line"></div>
              <Container className='text-center'>
                {localStorage.getItem('gamesInTheCart').length > 0 && JSON.parse(localStorage.getItem('gamesInTheCart')).map((article, i)=>
                  <GameCart key={i} gameArticle={article} updateTheCart={this.props.updateTheCart} gameId={i}></GameCart>)
                }
              </Container>
            </Col>
            <Col>
              <h2 className='text-center'>Votre total</h2>
              <div className="line"></div>
              <Row>
                <Col><span>Total: </span></Col>
                <Col><strong className='float-end'>{(localStorage.getItem('totalPrice') || "0.00") + " €"}</strong></Col>
              </Row>
              <Row>
                <Col><span>Dont TVA: </span></Col>
                <Col><strong className='float-end'>{(((Number(localStorage.getItem('totalPrice'))*0.2).toFixed(2)) || "0.00") + " €"}</strong></Col>
              </Row>
              <div className='line'/>
              <div className='text-center'>
                <Button size="sm" variant="light" style={{ width: '50%' }} onClick={()=>this.sendCommand}>Payer</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <FooterComposant/>
      </div>
    );
  }
}

export default Cart;