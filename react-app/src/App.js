import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './Routes/Home';
import Game from './Routes/Game';
import Cart from './Routes/Cart';
import User from './Routes/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home name1="Hugo" name2="Guilian" />} />
        <Route exact path='/game' element={<Game />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/user' element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;