import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './routes/Home';
import Game from './routes/Game';
import Cart from './routes/Cart';
import User from './routes/User';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
       gameArticles:[],
       platforms:[]
    }
  }
  componentDidMount = async () => {
    const response = await fetch('http://localhost:1337/api/games?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const gameArticles = await response.json()
    this.setState({gameArticles:gameArticles})
    const response = await fetch('http://localhost:1337/api/platforms?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const platforms = await response.json()
    this.setState({platforms:platforms})
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home platforms={this.state.platforms} gameArticles={this.state.gameArticles} />} />
          <Route exact path='/game' element={<Game gameArticles={this.state.gameArticles} />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/user' element={<User />} />
        </Routes>
      </Router>
    );
  }
}

export default App;