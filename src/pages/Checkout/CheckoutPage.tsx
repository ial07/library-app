import CheckoutList from "@/features/checkout/components/CheckoutList";
import React from "react";

const CheckoutPage: React.FC = () => {
  return (
    <div className="mb-12 md:mb-20">
      <h1 className="display-lg-bold md:display-xs-bold mb-4 md:mb-8">
        Checkout
      </h1>

      <CheckoutList />
    </div>
  );
};

export default CheckoutPage;
