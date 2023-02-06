import { createSelector } from '@reduxjs/toolkit';

export const cartSelector = (state) => state.cart.cart;
export const isOpenCartSelector = (state) => state.cart.isCartOpen;
