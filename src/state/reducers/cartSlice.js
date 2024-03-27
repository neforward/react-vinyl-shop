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
        
    },
 
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;