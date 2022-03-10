import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './routes/Home';
import Game from './routes/Game';
import Cart from './routes/Cart';
import AboutUs from './routes/About-us';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      gamePlatforms: [],
      gameGenres: [],
      gamesInTheCart: [],
    }
  }

  updateTheCart = (game, idFromTheCart, addToTheCart) => {
    let temp = [];
    let totalPrice = Number(localStorage.getItem('totalPrice'));

    temp = JSON.parse(localStorage.getItem('gamesInTheCart')) || [];

    if (addToTheCart) {
      temp.push(game);
      totalPrice += Number(game.attributes.price);
    }
    else {
      temp.splice(idFromTheCart, 1);
      totalPrice -= Number(game.attributes.price);
    }

    totalPrice = Number(totalPrice).toFixed(2);

    localStorage.setItem('gamesInTheCart', JSON.stringify(temp));
    localStorage.setItem('totalPrice', totalPrice);

    this.setState({
      gamesInTheCart: {...temp},
    });
  }

  componentDidMount = async () => {

    const response2 = await fetch('http://localhost:1337/api/platforms?populate=*', {
      method: 'GET', 
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'}}
    )
    const gamePlatforms = await response2.json()

    const response3 = await fetch('http://localhost:1337/api/genres?sort[0]=name', {
      method: 'GET', 
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'}}
    )
    const gameGenres = await response3.json()

    var temp = []
    temp = JSON.parse(localStorage.getItem('gamesInTheCart')) || [];

    this.setState({
      gamesInTheCart: {...temp}, 
      gamePlatforms:gamePlatforms, 
      gameGenres:gameGenres});
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home gamePlatforms={this.state.gamePlatforms.data} gameGenres={this.state.gameGenres.data} updateTheCart={this.updateTheCart}/>} />
          <Route exact path='/game' element={<Game gameGenres={this.state.gameGenres.data} gamePlatforms={this.state.gamePlatforms.data} updateTheCart={this.updateTheCart} />} />
          <Route exact path='/cart' element={<Cart updateTheCart={this.updateTheCart} cartCount={this.state.cartCount}/>} />
          <Route exact path='/about-us' element={<AboutUs />} />
        </Routes>
      </Router>
    );
  }
}

export default App;