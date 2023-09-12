import { Grid } from '@mui/material'
import { Link} from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {

    return (
        <Grid container spacing={2} className="navbar">
            <Grid item xs={12}>
                <Link to="/home" >
                   home
                </Link>
                <Link to="/login" >
                   Login
                </Link>
                <Link to="/signup" >
                   Signup
                </Link>
            </Grid>
       
        </Grid>
    )
}

export default Navbar