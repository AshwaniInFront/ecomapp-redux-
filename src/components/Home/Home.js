
import { ThemeProvider } from '@emotion/react';
import Navbar from '../Navbar/Navbar';
import theme from '../MuiTheme/theme';
import { CssBaseline } from '@mui/material';
import Products from '../Products/Products';


const Home = () => {


    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <Products />
            </ThemeProvider>
        </>
    )
}

export default Home