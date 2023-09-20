import { Box, Button, Grid, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addItemToCart, getSingleProducts, removeItemFromCart } from '../../redux/actions/productsActions';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { getProductId } from '../../services/api';
import AlertDialog from '../Dialog/Popup';


const ProductDetails = () => {

    // const dispatch = useDispatch();
    // const [newloader, setLoader] = useState('')
    const singleProduct = useSelector((state) => state.products.singleProduct); // Access products from Redux store
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.products.cartItems); // Access amount from Redux store
    const isLoading = useSelector((state) => state.products.isLoading);
    const [open, setOpen] = useState(true); // if open dialogbox will be opened
    const [close, setFalse] = useState(false); // if open dialogbox will be opened
    const { id } = useParams();
    const [quantity] = useState(0);

    const getProductData = async (id) => {

        try {
            const newId = await getProductId(`${id}`);
            const item = {
                ...newId,
                quantity: quantity,
            };
            dispatch(getSingleProducts(item)); // Dispatch the setProducts action
            console.log(item, 'item')
        } catch (error) {
            return error.message;
        };
    };


    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (isLoading) {
            console.log('entering useffect')
            getProductData(id)
        }
    }, [])

    useEffect(() => {
        if (singleProduct?.quantity <= 1) {
            handleOpen();
        }
        else {
            handleClose();
        }
    }, [singleProduct.quantity])

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
                    <h1>Product Details</h1>
                    <h3>{singleProduct?.title}</h3>
                    <Typography>Category: {singleProduct?.category}</Typography>
                    <Typography>
                        Price: ${singleProduct?.price}
                    </Typography>
                    <Typography sx={{ py: 2 }}>Description: {singleProduct?.description}</Typography>
                    <Typography>Rating: {singleProduct?.rating?.rate}</Typography>
                    <Typography>Count: {singleProduct?.rating?.count}</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gridGap: 20,
                            justifyContent: 'space-between',
                            maxWidth: 300,
                            m: 'auto',
                            mt: 4,
                        }}>
                        <Button variant='contained' color='warning' onClick={() => dispatch(addItemToCart(singleProduct))}>
                            Add to Cart
                        </Button>                        
                        <Button variant='contained' color='success'>Buy Now</Button>
                    </Box>
                </Grid>
            </Grid>}



        </>
    )
}

export default ProductDetails