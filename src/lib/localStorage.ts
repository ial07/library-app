import type { CartItem } from "@/types/Cart";

export const loadCart = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

export const saveCart = (items: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

export function loadCheckout(): CartItem[] {
  const data = localStorage.getItem("checkout");
  return data ? JSON.parse(data) : [];
}

export function saveCheckout(items: CartItem[]) {
  localStorage.setItem("checkout", JSON.stringify(items));
}