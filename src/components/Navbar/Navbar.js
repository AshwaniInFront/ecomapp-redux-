import { Link } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import './Navbar.css';
import { myntraLogo } from '../../assets/index';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Home from '../Home/Home';

const Navbar = () => {
    return (
        <Grid className="navbar-wrapper">
        <Grid container spacing={2} className="navbar-container">
            <Grid item xs={3}>
                <Box sx={{maxWidth:200}}>
                    <Link  to= '/'>
                        <img src={myntraLogo} className='img-fluid'/>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={9}  className='navbar-items' >
                <Link to="/home" >
                    home
                </Link>
                <Link to="/login" >
                    Login
                </Link>
                <Link to="/signup" >
                    Signup
                </Link>
                <Link to="/products" />
                <Link to="/cart" >
                    <ShoppingCartOutlinedIcon />
                </Link>
            </Grid>
        </Grid>
        </Grid>
    )
}

export default Navbar