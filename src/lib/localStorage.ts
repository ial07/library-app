export const loadCart = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

export const saveCart = (items: any) => {
  localStorage.setItem("cart", JSON.stringify(items));
};
