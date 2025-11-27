import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import checkoutReducer from '../features/checkout/checkoutSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
  // Middleware custom bisa ditambahkan di sini
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;