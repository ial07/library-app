import CartList from "@/features/cart/components/CartList";
import React from "react";

const CartPage: React.FC = () => {
  return (
    <div>
      <h2 className="display-xs-bold md:display-lg-bold mb-4 md:mb-8">
        My Cart
      </h2>

      <CartList />
    </div>
  );
};

export default CartPage;
