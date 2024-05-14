import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './redux/productReducer/productSlice';
import { cartReducer } from './redux/cartSlice';

const store = configureStore({
  reducer: {
    products:productReducer,
    cartReducer

  }
});

export default store;