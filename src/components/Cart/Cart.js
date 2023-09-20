import { Box, Button, Grid, List, ListItem, ListItemText } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, decreaseCartItem, getCartItems, increaseCartItem, removeItemFromCart, removeProduct } from '../../redux/actions/productsActions';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Cart = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.products.cartItems); // Access amount from Redux store
    console.log(cartItems)

    useEffect(() => {
        dispatch(getCartItems(cartItems))
    }, [])

    return (
        <>
            <List sx={{ width: '100%', 
            maxWidth: 1200,
            m:'auto', 
            bgcolor: 'background.paper',
            pt:'150px',
            }}>
                {cartItems?.map((cartItem) => {
                    return (
                        <>
                            <ListItem key={cartItem.id} sx={{ gridColumnGap:20 }}>
                                <Box >
                                    <img src={cartItem.image} alt={cartItem.title} className='img-fluid' />
                                </Box>
                                <Box>
                                    <ListItemText>
                                        <h3>{cartItem.price}</h3>
                                        <p>{cartItem.description}</p>
                                    </ListItemText>
                                </Box>
                                <Box>
                                    <ListItemText>
                                        <AddCircleOutlineIcon
                                            onClick={() => dispatch(increaseCartItem(cartItem))} />
                                        {cartItem.quantity}
                                        <RemoveCircleOutlineIcon onClick={() => dispatch(decreaseCartItem(cartItem))}
                                        />
                                    </ListItemText>
                                </Box>
                                <Box>
                                    <Button variant="contained" onClick={() => dispatch(removeProduct(cartItem.id))}>Remove Product</Button>
                                </Box>
                            </ListItem>

                            <Grid container>
                                <Box>{}</Box>
                            </Grid>
                        </>
                    )
                })}
            </List>
        </>
    )
}

export default Cart