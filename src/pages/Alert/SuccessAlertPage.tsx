import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessAlertPage: React.FC = () => {
  const navigate = useNavigate();
  const toBorrow = () => {
    navigate("/borrow-list");
  };
  return (
    <div className="flex-center flex-col text-center h-[calc(100vh-150px)]">
      <img src="/icons/success.svg" alt="success" className="mb-9 md:mb-11" />
      <h3 className="text-xl-bold md:display-sm-bold mb-2">
        Borrowing Successful!
      </h3>
      <p className="text-md-semibold md:text-lg-semibold mb-6 md:mb-8">
        Your book has been successfully borrowed. Please return it by
        <span className="text-danger"> 31 August 2025</span>
      </p>

      <Button className="w-71.5" onClick={toBorrow}>
        See Borrowed List
      </Button>
    </div>
  );
};

export default SuccessAlertPage;
