import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store";
import { Checkbox } from "@/components/ui/checkbox";
import { CartItem } from "./CartItem";
import { addCheckout } from "@/features/checkout/checkoutSlice";
import { useNavigate } from "react-router-dom";

const CartList: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const [selected, setSelected] = useState<string[]>(() =>
    items.map((b) => b.id!)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function toggleCheck(id: string, checked: boolean | string) {
    if (checked) {
      setSelected((prev) => [...prev, id]);
    } else {
      setSelected((prev) => prev.filter((c) => c !== id));
    }
  }

  function goToCheckout() {
    const selectedItems = items.filter((b) => selected.includes(b.id!));

    dispatch(addCheckout(selectedItems));
    navigate("/checkout");
  }

  return items.length > 0 ? (
    <div className="flex gap-10 mb-20 md:mb-25 relative">
      <div className="w-full md:flex-7">
        <div className="flex-start gap-3 mb-6">
          <Checkbox
            checked={selected.length === items.length}
            onCheckedChange={(checked) => {
              if (checked) setSelected(items.map((b) => b.id!));
              else setSelected([]);
            }}
          />
          <span className="text-md-semibold">Select All</span>
        </div>

        {items.map((book) => (
          <div key={book.id} className="flex flex-col">
            <CartItem
              key={book.id}
              book={book}
              selected={selected}
              toggleCheck={toggleCheck}
            />

            <hr className="w-full border border-neutral-300 my-4 md:my-6 last:hidden" />
          </div>
        ))}
      </div>
      <div className="hidden md:flex gap-6 md:flex-3 flex-col bg-white shadow-xs border rounded-xl p-5 h-fit">
        <span className="text-xl-bold">Loan Summary</span>
        <div className="flex-between">
          <span className="text-md-medium">Total Book</span>
          <span className="text-md-bold">{items.length} Items</span>
        </div>
        <Button onClick={goToCheckout}>Borrow Book</Button>
      </div>

      <div className="flex-between gap-3 fixed bottom-0 left-0 bg-white p-4 w-full shadow-2xl border  md:hidden!">
        <div>
          <div className="text-sm-medium">Total Book</div>
          <div className="text-sm-bold">{items.length} Items</div>
        </div>
        <Button className="w-37.5" onClick={goToCheckout}>
          Borrow Book
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex-center">Cart Is Empty</div>
  );
};

export default CartList;
