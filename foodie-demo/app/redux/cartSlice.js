'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    itemsInCart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            // state.itemsInCart.push(action.payload)
            const previousCart = state.itemsInCart;
            state.itemsInCart = [...previousCart, action.payload];
        },
        removeProduct: (state, action) => {
            // logic to remove item from cart
            const id = action.payload;
            state.itemsInCart = state.itemsInCart.filter((item) => item.id !== id);
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const { addProduct, removeProduct, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;