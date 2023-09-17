import { Box, Grid, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addItemToCart, getSingleProducts, removeItemFromCart } from '../../redux/actions/productsActions';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { getProductId } from '../../services/api';


const ProductDetails = () => {

    // const dispatch = useDispatch();
    // const [newloader, setLoader] = useState('')
    const singleProduct = useSelector((state) => state.products.singleProduct); // Access products from Redux store
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.products.cartItems); // Access amount from Redux store
    const isLoading = useSelector((state) => state.products.isLoading);
    const { id } = useParams();

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
        if (isLoading ) {
            console.log('entering useffect')
            getProductData(id)
        }
    }, [])


    return (
        <>
            {isLoading && <><div className='loading'></div></>}
            {singleProduct && <Grid container key={singleProduct?.id} spacing={2}
                sx={{ maxWidth: 1200, py: 2, m: 'auto' }}
            >
                <Grid item lg={7} md={6} >
                    <Box sx={{ maxWidth: 400 }}>
                        <img src={singleProduct?.image} alt={singleProduct?.title}
                            className='img-fluid'
                        />
                    </Box>

                </Grid>
                {/* {console.log(cartItems,singleProduct,'cartItems','singleProduct')} */}
                <Grid item lg={5} md={6} sx={{ alignItems: 'center' }}>
                    <h2>Product Details</h2>
                    <h3>{singleProduct?.title}</h3>
                    <Typography>Category: {singleProduct?.category}</Typography>
                    <Typography>
                        Price: ${singleProduct?.price}
                    </Typography>
                    <Typography sx={{ py: 2 }}>Description: {singleProduct?.description}</Typography>
                    <Typography>Rating: {singleProduct?.rating?.rate}</Typography>
                    <Typography>Count: {singleProduct?.rating?.count}</Typography>
                    <Typography>Add item to Cart  
                        <AddCircleOutlineIcon 
                            onClick={() => dispatch(addItemToCart(singleProduct))} /> {singleProduct?.quantity} 
                            <RemoveCircleOutlineIcon onClick={() => dispatch(removeItemFromCart(singleProduct))} 
                        />
                    </Typography>
                </Grid>
            </Grid>}


        </>
    )
}

export default ProductDetails