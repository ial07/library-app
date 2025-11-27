// cartSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../types/Cart";
import { loadCart, saveCart } from "@/lib/localStorage";

interface CartState {
  items: CartItem[];
  filter: string;
}

const initialState: CartState = {
  items: loadCart(),
  filter: "all",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const exist = state.items.find((b) => b.id === action.payload.id);
      if (!exist) {
        state.items.push(action.payload);
        saveCart(state.items);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((b) => b.id !== action.payload);
      saveCart(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCart([]);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
