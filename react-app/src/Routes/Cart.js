import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'


import Menu from '../components/Menu';
import GameCart from '../components/GameCart';
import FooterComposant from '../components/Footer';



function Cart(props){
  return (
    <div>
      <Menu gameGenres={props.gameGenres}/>
      
      <Container className='bg-dark cart-page'>
        <Row>
          <Col xs={12} xl={8}>
            <h2 className='text-center'>Votre panier</h2>
            <div className="line"></div>
            <Container>
              {localStorage.getItem('gamesInTheCart') && JSON.parse(localStorage.getItem('gamesInTheCart')).map((article, i)=>
                <GameCart key={i} gameArticle={article} updateTheCart={props.updateTheCart} gameId={i}></GameCart>
              )}
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
              <Link to="/sendcommand">
                <Button size="sm" variant="light" style={{ width: '50%' }} >Payer</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterComposant/>
    </div>
  );
}

export default Cart;