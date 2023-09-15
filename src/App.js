import './App.css';
import Login from './components/Login/Login'
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Signup from './components/SignUp/Signup';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Navbar from './components/Navbar/Navbar';
import Routes from './routes/Routing';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
