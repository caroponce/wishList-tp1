import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products/productsSlice.js';
import categoriesSlice from './categories/categoriesSlice.js';
import cartSlice from './cart/cartSlice.js';

export const store = configureStore({
    reducer: {
        products: productsSlice,
        categories: categoriesSlice,
        cart: cartSlice,
    },
})