import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CartItem } from "@/features/cart/components/CartItem";
import type { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCheckout } from "../checkoutSlice";
import { useLoan } from "../hooks/useLoan";

const CheckoutList: React.FC = () => {
  const items = useSelector((state: RootState) => state.checkout.items);
  const [selected] = useState<string[]>(() => items.map((b) => b.id!));
  const { loanMutation } = useLoan();

  const [borrowDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [duration, setDuration] = useState<number>(3);
  const [returnDate, setReturnDate] = useState<string>(borrowDate);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleDurationChange(value: string) {
    setDuration(Number(value));
    const date = new Date();
    date.setDate(date.getDate() + Number(value));
    setReturnDate(date.toISOString().split("T")[0]);
  }

  async function goToCheckout() {
    const selectedItems = items.filter((b) => selected.includes(b.id!));
    const payloads = selectedItems.map((b) => ({
      bookId: Number(b.id!),
      days: Number(duration), // duration dari radio
    }));

    for (const p of payloads) {
      await loanMutation.mutateAsync(p);
    }

    dispatch(clearCheckout());
    navigate("/success");
  }
  return (
    <div className="flex-between flex-col items-start! md:flex-row gap-6 md:gap-14.5 ">
      <div className="w-full flex-[4.9] basis-80 flex-col gap-2 md:gap-4">
        <h2 className="text-lg-bold md:display-xs-bold">User Information</h2>
        <div className="flex-between">
          <span className="text-sm-medium md:text-md-medium">Name</span>
          <span className="text-md-bold md:text-md-bold">Johndoe</span>
        </div>
        <div className="flex-between">
          <span className="text-sm-medium md:text-md-medium">Email</span>
          <span className="text-md-bold md:text-md-bold">
            johndoe@email.com
          </span>
        </div>
        <div className="flex-between">
          <span className="text-sm-medium md:text-md-medium">
            Nomor Handphone
          </span>
          <span className="text-md-bold md:text-md-bold">081234567890</span>
        </div>

        <hr className="w-full border border-neutral-300 my-4 md:my-8" />

        <h2 className="text-lg-bold md:display-xs-bold mb-4">Book List</h2>

        {items.map((book) => (
          <div key={book.id} className="flex flex-col gap-4">
            <CartItem key={book.id} book={book} />
          </div>
        ))}
      </div>
      <div className="w-full md:flex-[5.1] basis-80 shadow-sm border p-4 md:p-5 rounded-[20px]">
        <h2 className="text-lg-bold md:display-xs-bold mb-4 md:mb-6">
          User Information
        </h2>

        <Input label="Borrow Date" readOnly type="date" value={returnDate} />

        <div className="flex flex-col gap-3 items-start justify-start mb-4 md:mb-6">
          <span className="text-sm-bold md:text-md-bold">Borrow Duration</span>

          <RadioGroup defaultValue="3" onValueChange={handleDurationChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="3" id="3" />
              <Label htmlFor="3">3 Days</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5" id="5" />
              <Label htmlFor="5">5 Days</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10" id="10" />
              <Label htmlFor="10">10 Days</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="bg-[#F6F9FE] p-3 md:p-4 rounded-xl mb-6">
          <span className="text-sm-bold md:text-md-bold">Return Date</span>
          <p className="text-sm-medium md:text-md-medium">
            Please return the book no later than <br />
            <span className="font-bold text-danger">31 August 2025</span>
          </p>
        </div>

        <div className="flex items-center gap-1 mb-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">
            I agree to return the book(s) before the due date.
          </Label>
        </div>
        <div className="flex items-center gap-1 mb-4 md:mb-6">
          <Checkbox id="policy" />
          <Label htmlFor="policy">I accept the library borrowing policy.</Label>
        </div>

        <Button className="w-full" onClick={goToCheckout}>
          Confirm & Borrow
        </Button>
      </div>
    </div>
  );
};

export default CheckoutList;
