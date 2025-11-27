// checkoutSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadCheckout, saveCheckout } from "@/lib/localStorage";
import type { CartItem } from "../../types/Cart";

const initialState = { items: loadCheckout() };

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCheckout: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      saveCheckout(state.items);
    },
    clearCheckout: (state) => {
      state.items = [];
      saveCheckout([]);
    },
  },
});

export const { addCheckout, clearCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
