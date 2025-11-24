import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem } from '../../types/Cart';

interface CartState {
  items: CartItem[];
  filter: string; // State untuk filter keranjang (contoh)
}

const initialState: CartState = {
  items: [],
  filter: 'all',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload; // Digunakan untuk filter cart
    }
  },
});

export const { addItem, removeItem, updateFilter } = cartSlice.actions;
export default cartSlice.reducer;