import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/addToCart');
export const removeFromCart = createAction('cart/removeFromCart');
export const decrementCartItem = createAction('cart/decrementCartItem')
export const incrementCartItem = createAction('cart/incrementCartItem')