import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/redux/store";
import { Checkbox } from "@/components/ui/checkbox";

const CartList: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  function toggleCheck(id: string, checked: boolean | string) {
    if (checked) {
      setSelected((prev) => [...prev, id]);
    } else {
      setSelected((prev) => prev.filter((c) => c !== id));
    }
  }

  function goToCheckout() {
    const checkoutItems = items.filter((b) => selected.includes(b.id!));
    localStorage.setItem("checkout", JSON.stringify(checkoutItems));
    // navigate
    // router.push("/checkout");
  }

  useEffect(() => {
    const ids = items.map((b) => b.id!);
    setSelected(ids);
  }, [items]);

  return items.length > 0 ? (
    <div className="flex gap-10 mb-20 md:mb-25 relative">
      <div className="w-full md:flex-7">
        <div className="flex-start gap-3 mb-6">
          <Checkbox
            checked={selected.length === items.length}
            onCheckedChange={(checked) => {
              if (checked) {
                setSelected(items.map((b) => b.id!));
              } else {
                setSelected([]);
              }
            }}
          />
          <span className="text-md-semibold">Select All</span>
        </div>

        {items.map((book) => (
          <>
            <div className="flex" key={book.id}>
              <Checkbox
                checked={selected.includes(book.id!)}
                onCheckedChange={(value) =>
                  toggleCheck(book.id!, value === true)
                }
              />
              <div className="flex gap-3 md:gap-4">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="object-cover"
                  style={{
                    width: "clamp(4.38rem, 7.67vw, 5.75rem)",
                    height: "clamp(6.63rem, 11.50vw, 8.63rem)",
                  }}
                />
                <div className="flex flex-col justify-center gap-1">
                  <div className="px-2 rounded-sm text-sm-bold border border-neutral-300 w-fit">
                    {book.Category?.name}
                  </div>
                  <span className="text-md-bold md:text-lg-bold">
                    {book.title}
                  </span>
                  <p className="text-sm-medium md:text-md-medium">
                    {book.Author?.name}
                  </p>
                </div>
              </div>
            </div>

            <hr className="w-full border border-neutral-300 my-4 md:my-6 last:hidden" />
          </>
        ))}
      </div>
      <div className="hidden md:flex gap-6 md:flex-3 flex-col bg-white shadow-xs border rounded-xl p-5 h-fit">
        <span className="text-xl-bold">Loan Summary</span>
        <div className="flex-between">
          <span className="text-md-medium">Total Book</span>
          <span className="text-md-bold">{items.length} Items</span>
        </div>
        <Button>Borrow Book</Button>
      </div>

      <div className="flex-between gap-3 fixed bottom-0 left-0 bg-white p-4 w-full shadow-2xl border  md:hidden!">
        <div>
          <div className="text-sm-medium">Total Book</div>
          <div className="text-sm-bold">2 Items</div>
        </div>
        <Button className="w-37.5">Borrow Book</Button>
      </div>
    </div>
  ) : (
    <div className="flex-center">Cart Is Empty</div>
  );
};

export default CartList;
