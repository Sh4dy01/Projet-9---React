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
import User from './routes/User';
import AboutUs from './routes/About-us';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      gameArticles: [],
      gamePlatforms: [],
      gameGenres: [],
      gamesInTheCart: [],
      totalPrice: 0,
    }
  }

  addGameInTheCart = (game, gamePrice) => {
    var temp = []
    temp = JSON.parse(localStorage.getItem('gamesInTheCart')) || [];
    temp.push(game);
    this.setState({gamesInTheCart: {...temp}});
    localStorage.setItem('gamesInTheCart', JSON.stringify(temp));

    var totalPrice = Number(Number(localStorage.getItem('totalPrice')) + Number(gamePrice)).toFixed(2);
    localStorage.setItem('totalPrice', totalPrice.toString());
    this.setState({totalPrice: totalPrice});
  }

  deleteGameFromTheCart = (id) => {
    var temp = []
    temp = JSON.parse(localStorage.getItem('gamesInTheCart')) || [];
    temp.splice(id, 1);
    this.setState({gamesInTheCart: {...temp}});
    localStorage.setItem('gamesInTheCart', JSON.stringify(temp));
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:1337/api/games?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const gameArticles = await response.json()
    this.setState({gameArticles:gameArticles})

    const response2 = await fetch('http://localhost:1337/api/platforms?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const gamePlatforms = await response2.json()
    this.setState({gamePlatforms:gamePlatforms})

    const response3 = await fetch('http://localhost:1337/api/genres?sort[0]=name', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const gameGenres = await response3.json()
    this.setState({gameGenres:gameGenres})

    var temp = []
    temp = JSON.parse(localStorage.getItem('gamesInTheCart')) || [];
    this.setState({gamesInTheCart: {...temp}});
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home gamePlatforms={this.state.gamePlatforms} gameArticles={this.state.gameArticles} gameGenres={this.state.gameGenres.data} addGameInTheCart={this.addGameInTheCart} deleteGameFromTheCart={this.deleteGameFromTheCart}/>} />
          <Route exact path='/game' element={<Game gameGenres={this.state.gameGenres.data} addGameInTheCart={this.addGameInTheCart} />} />
          <Route exact path='/cart' element={<Cart gameGenres={this.state.gameGenres.data} gamesInTheCart={this.state.gamesInTheCart}/>} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/user' element={<User />} />
        </Routes>
      </Router>
    );
  }
}

export default App;