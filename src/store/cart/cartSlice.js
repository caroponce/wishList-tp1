import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      
        addToCart: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id)
            if(itemInCart) {
                itemInCart.quantity += 1;
            } else {
                state.items.push({... action.payload})
            }
        },
        increaseQuantity: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart && itemInCart.stock > itemInCart.quantity) {
              itemInCart.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart && itemInCart.quantity > 1) {
              itemInCart.quantity -= 1;
            }
          },
          removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
          },
          removeAll: (state, action) => {
            state.items = [];
          },
    }
})
export const {removeAll} = cartSlice.actions
export const {removeItem} = cartSlice.actions
export const {decreaseQuantity} = cartSlice.actions
export const {increaseQuantity} = cartSlice.actions
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer