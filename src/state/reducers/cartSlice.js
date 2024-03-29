import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalSum: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id);
            if (existingItemIndex !== -1) {
                state.cartItems[existingItemIndex].quantity += 1;
            } else {
                state.cartItems.push({ ...newItem, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const removedItem = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== removedItem.id);
        },
        decrementCartItem: (state, action) => {
            const itemToDecrement = action.payload;
            const existingItem = state.cartItems.find(item => item.id === itemToDecrement.id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
        },
        incrementCartItem: (state, action) => {
            const itemToIncrement = action.payload;
            const existingItem = state.cartItems.find(item => item.id === itemToIncrement.id);
            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
    },

});

export const { addToCart, removeFromCart, decrementCartItem, incrementCartItem } = cartSlice.actions;

export default cartSlice.reducer;