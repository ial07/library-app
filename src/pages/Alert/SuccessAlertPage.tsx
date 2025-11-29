import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

type SuccessAlertPageProps = {
  returnDate: string;
};

const SuccessAlertPage: React.FC<SuccessAlertPageProps> = () => {
  const { returnDate } = useParams();
  const navigate = useNavigate();
  const toBorrow = () => {
    navigate("/settings?type=borrowed");
  };
  return (
    <div className="flex-center flex-col text-center h-[calc(100vh-150px)]">
      <img src="/icons/success.svg" alt="success" className="mb-9 md:mb-11" />
      <h3 className="text-xl-bold md:display-sm-bold mb-2">
        Borrowing Successful!
      </h3>
      <p className="text-md-semibold md:text-lg-semibold mb-6 md:mb-8">
        Your book has been successfully borrowed. Please return it by
        <span className="text-danger">
          {" "}
          {dayjs(returnDate).format("DD MMMM YYYY")}
        </span>
      </p>

      <Button className="w-71.5" onClick={toBorrow}>
        See Borrowed List
      </Button>
    </div>
  );
};

export default SuccessAlertPage;
