import { configureStore } from '@reduxjs/toolkit';
import vinylsReducer from './reducers/vinylsSlice';

export const store = configureStore({
    reducer: {
        vinyls: vinylsReducer,
    },
});