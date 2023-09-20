import { Route,  Routes } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Login from '../components/Login/Login';
import Signup from '../components/SignUp/Signup';
import Products from '../components/Products/Products';
import Cart from '../components/Cart/Cart';

const Routing = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' exact element={<Products/>} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default Routing