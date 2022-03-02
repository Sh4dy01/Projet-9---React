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