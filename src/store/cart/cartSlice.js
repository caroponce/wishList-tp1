import { createSlice } from "@reduxjs/toolkit";
import { sumTotal } from "../../functions";
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
                state.total = sumTotal(state.items);
            } else {
                state.items.push({... action.payload})
                state.total = sumTotal(state.items);
            }
        },
        increaseQuantity: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart && itemInCart.stock > itemInCart.quantity) {
              itemInCart.quantity += 1;
              state.total = sumTotal(state.items);
            }
        },
        decreaseQuantity: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart && itemInCart.quantity > 1) {
              itemInCart.quantity -= 1;
              state.total = sumTotal(state.items);
            }
          },
          removeItem: (state, action) => {
           const removedItem = state.items = state.items.filter((item) => item.id !== action.payload.id);
            if (removedItem) {
              state.items = state.items.filter((item) => item.id !== action.payload.id);
              state.total = sumTotal(state.items);
            }
          },
          removeAll: (state) => {
            state.items = [];
            state.total = 0;
          },
    }
})
export const {removeAll} = cartSlice.actions
export const {removeItem} = cartSlice.actions
export const {decreaseQuantity} = cartSlice.actions
export const {increaseQuantity} = cartSlice.actions
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer