import { Box, Grid, Typography } from '@mui/material'
import { getProductData, getProducts, getSingleProducts, setProducts } from '../../redux/actions/productsActions.js'; // Import the action
import { Link } from 'react-router-dom';
import './products.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductId } from '../../services/api';

const ProductList = ({ newproduct }) => {

    const dispatch = useDispatch();

    const getProductData = async (id) => {

        try {
            const newId = await getProductId(`${id}`);
            dispatch(getSingleProducts(newId)); // Dispatch the setProducts action
            console.log(newId, 'newId')
        } catch (error) {
            return error.message;
        };
    };

    
    useEffect(() => {
        dispatch(getProducts());
    }, []);


    return (
        <>
            {newproduct.map((product) => {
                return (
                    <Grid item lg={3} md={6} sm={6} xs={12} key={product.id} sx={{ mt: 3 }}>
                        <Box sx={{ height: 500 }}>
                            <Box sx={{
                                width: 200,
                                m: 'auto',
                                mt: 2,
                                minHeight: 400
                            }}>
                                <img src={product.image} alt={product.title}
                                    loading="lazy"
                                    className='img-fluid' />
                            </Box>
                            <Typography component="h4" sx={{ fontWeight: 800, textTransform: 'uppercase' }}>
                                {product.category}
                            </Typography>
                            <Typography component="h2" sx={{ mt: 1 }}>
                                {product.title}
                            </Typography>
                            <Typography component="h2" sx={{ mt: 1, fontWeight: 'bold' }}>
                                ${product.price}
                            </Typography>
                            <Typography sx={{ cursor: 'pointer', backgroundColor: '#fd8412' }}>
                                <Link to={`/products/${product.id}`} sx={{ cursor: 'pointer' }} onClick={() => getProductData(product.id)} >
                                    view product
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                )
            })}
        </>
    )
}

export default ProductList