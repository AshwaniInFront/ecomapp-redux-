// src/redux/store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import redux-thunk
import productsReducer from './reducers/productReducers';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply redux-thunk middleware
);

export default store;
