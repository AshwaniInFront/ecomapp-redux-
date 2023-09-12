// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import productsReducer from './reducers/productReducers';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default store;
