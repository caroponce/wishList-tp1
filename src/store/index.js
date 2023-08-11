import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products/productsSlice.js';
import categoriesSlice from './categories/categoriesSlice.js';
import cartSlice from './cart/cartSlice.js';
import authSlice from './auth/authSlice.js';
import { categoriesApi } from './categories/api/index.js';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { productsApi } from './products/api/index.js';
import { orderApi } from './orders/api/index.js';
import { authApi } from './auth/api/index.js';
import { settingsApi } from './settings/api/index.js';
import { mapsApi } from './maps/api/index.js';

export const store = configureStore({
    reducer: {
        products: productsSlice,
        categories: categoriesSlice,
        cart: cartSlice,
        auth: authSlice,
        [categoriesApi.reducerPath] : categoriesApi.reducer,
        [productsApi.reducerPath] : productsApi.reducer,
        [orderApi.reducerPath] : orderApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
        [settingsApi.reducerPath] : settingsApi.reducer,
        [mapsApi.reducerPath] : mapsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware, productsApi.middleware, orderApi.middleware, authApi.middleware, settingsApi.middleware, mapsApi.middleware),
})

setupListeners(store.dispatch);