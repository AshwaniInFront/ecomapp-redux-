import './App.css';
import Login from './components/Login/Login'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Signup from './components/SignUp/Signup';
import Home from './components/Home/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
