import { configureStore } from '@reduxjs/toolkit';
import vinylsReducer from './reducers/vinylsSlice';
import cartReducer from './reducers/cartSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    vinyls: vinylsReducer,
    cart: persistedCartReducer,
  },
});

export const persistor = persistStore(store);
