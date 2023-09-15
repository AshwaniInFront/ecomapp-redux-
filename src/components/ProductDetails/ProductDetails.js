import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductDetails = () => {

    // const dispatch = useDispatch();
    const singleProduct = useSelector((state) => state.products.singleProduct); // Access products from Redux store
    console.log(singleProduct, 'object arrays')
    

    return (
        <>

            <Grid container key={singleProduct?.id} spacing={2} 
                sx={{maxWidth:1200,py:2,m:'auto'}}
            >
                <Grid item lg={7} md={6} >
                    <Box sx={{ maxWidth: 400 }}>
                        <img src={singleProduct?.image} alt={singleProduct?.title}
                            className='img-fluid'
                        />
                    </Box>

                </Grid>
                <Grid item lg={5} md={6} sx={{alignItems:'center'}}>
                    <h2>Product Details</h2>
                    <h3>{singleProduct?.title}</h3>
                    <Typography>Category: {singleProduct?.category}</Typography>
                    <Typography>Price: ${singleProduct?.price}</Typography>
                    <Typography sx={{py:2}}>Description: {singleProduct?.description}</Typography>
                    <Typography>Rating: {singleProduct?.rating?.rate}</Typography>
                    <Typography>Count: {singleProduct?.rating?.count}</Typography>
                </Grid>
            </Grid>

        </>
    )
}

export default ProductDetails