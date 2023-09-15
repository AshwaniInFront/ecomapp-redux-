import { fetchData, getProductId } from '../../services/api.js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData, getProducts, getSingleProducts, setProducts } from '../../redux/actions/productsActions.js'; // Import the action
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './products.css';
import ProductList from './ProductList.js';


const Products = () => {

  const [category, setCategories] = useState([])
  const [categoryproduct,setCatProduct] = useState();
  const dispatch = useDispatch(); // Get the dispatch function
  const products = useSelector((state) => state.products.products); // Access products from Redux store
  const isLoading = useSelector((state) => state.products.isLoading);

  const getCategories = () => {
    const uniqueCategories = [...new Set(products.flatMap((product) => product.category))];
    console.log(uniqueCategories, 'unique categories')
    setCategories(uniqueCategories);
  }

  const handleCategory = (matchcategory) => {
    let categorylist = products.filter((product) => {
      return product.category === matchcategory
    })
    setCatProduct(categorylist);
  }

  useEffect(() => {
      getCategories();
  }, [products])

  return (
    <Box>
 
          <Grid container spacing={2} sx={{ py: 5 }}>
            <Grid item lg={12}>
              {category?.map((newcat) => {
                return (
                  <Button variant="contained" sx={{ mx: 1 }} onClick={() => handleCategory(newcat)} >
                    {newcat}
                  </Button>
                )
              })}
            </Grid>

            <Grid container spacing={2} sx={{ py: 5 }}>
              {categoryproduct ?
                <ProductList newproduct={categoryproduct} />
              :
                <ProductList newproduct={products} />
              }
            </Grid>
          </Grid>

   
    </Box>
  )
}

export default Products