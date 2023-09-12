import { fetchData } from '../../services/services.js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, setProducts } from '../../redux/actions/productsActions.js'; // Import the action
import { Box, Button, Grid, Typography } from '@mui/material';
import './products.css';


const Products = () => {

  const [category, setCategories] = useState([])
  const [catlist, setCatLists] = useState([]);
  // const dispatch = useDispatch(); // Get the dispatch function
  const products = useSelector((state) => state.products.products); // Access products from Redux store

  const getCategories = () => {
    const uniqueCategories = [...new Set(products.flatMap((product) => product.category))];
    console.log(uniqueCategories, 'unique categories')
    setCategories(uniqueCategories);
  }

  const handleCategory = (matchcategory) => {
    const categorylist = products.map((product) => product.category === matchcategory);
    setCatLists(categorylist);
  }

  useEffect(() => {
    getProducts();
  }, []);


  useEffect(() => {
    if (products) {
      getCategories();
    }
  }, [])


  return (
    <Box>
      <Grid container spacing={2} sx={{ py: 5 }}>
        <Grid item lg={12}>
          {category?.map((newcat) => {
            return (
              <Button variant="contained" sx={{ mx: 1 }} onClick={() => handleCategory(newcat)}> {newcat}
              </Button>
            )
          })}
        </Grid>
        {catlist.length > 0 ? <>{catlist.map((cat) => {
          return (
            <Grid item lg={3} md={4} key={cat.id}>
              <Box sx={{ height: 500 }}>
                <Box sx={{
                  width: 200,
                  m: 'auto',
                  mt: 2,
                  height: 400
                }}>

                  <img src={cat.image} alt={cat.title}
                    loading="lazy"
                    className='img-fluid' />
                </Box>
                <Typography component="h4" sx={{ fontWeight: 800, textTransform: 'uppercase' }}>
                  {cat.category}
                </Typography>
                <Typography component="h2" sx={{ mt: 1 }}>
                  {cat.title}
                </Typography>
              </Box>
            </Grid>
          )
        })}</> : <>
        {products.map((product) => {
          return (
            <Grid item lg={3} md={4} key={product.id}>
              <Box sx={{ height: 500 }}>
                <Box sx={{
                  width: 200,
                  m: 'auto',
                  mt: 2,
                  height: 400
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
              </Box>
            </Grid>
          )
        })}</>}

      </Grid>
    </Box >
  )
}

export default Products