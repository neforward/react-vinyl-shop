import { configureStore } from '@reduxjs/toolkit';
import vinylsReducer from './reducers/vinylsSlice';
import cartReducer from './reducers/cartSlice'
export const store = configureStore({
    reducer: {
        vinyls: vinylsReducer,
        cart: cartReducer,
        initialState: {
            products: {}
        },
    },
});
