import { StarRating } from "@/components/StartRating";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search } from "lucide-react";
import React, { useState } from "react";

const BorrowPage: React.FC = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="mt-4 md:mt-6 mb-12 md:mb-25">
      <h1 className="display-xs-bold md:display-sm-bold mb-4 md:mb-6">
        Borrowed List
      </h1>
      <div className="relative mb-4 md:mb-6">
        <Input placeholder="Search book" className="rounded-full ps-10.5" />
        <Search className="text-neutral-600 absolute top-0 translate-1/2" />
      </div>

      <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
        <div className="rounded-full border border-neutral-300 py-1 px-4 active:border-primary-300 active:text-primary-300 active:bg-[#F6F9FE] text-md-bold">
          All
        </div>
        <div className="rounded-full border border-neutral-300 py-1 px-4 active:border-primary-300 active:text-primary-300 active:bg-[#F6F9FE] text-md-bold">
          Active
        </div>
        <div className="rounded-full border border-neutral-300 py-1 px-4 active:border-primary-300 active:text-primary-300 active:bg-[#F6F9FE] text-md-bold">
          Returned
        </div>
        <div className="rounded-full border border-neutral-300 py-1 px-4 active:border-primary-300 active:text-primary-300 active:bg-[#F6F9FE] text-md-bold">
          Overdue
        </div>
      </div>

      <div className="p-4 md:p-5 rounded-2xl bg-white shadow-sm border w-full md:w-[700px] lg:w-[1000px] mb-4">
        <div className="flex-between">
          <div className="flex-start items-center">
            <div className="text-sm-bold md:text-md-bold me-1 md:me-3">
              Status
            </div>
            <div className="bg-[#24A5000D] text-[#24A500] text-sm-bold py-0.5 px-2 rounded-sm">
              Active
            </div>
          </div>
          <div className="flex-start items-center">
            <div className="text-sm-bold md:text-md-bold me-1 md:me-3">
              Due Date
            </div>
            <div className="bg-[#EE1D521A] text-[#EE1D52] text-sm-bold py-0.5 px-2 rounded-sm">
              31 August 2025
            </div>
          </div>
        </div>
        <hr className="border border-neutral-300 my-4 md:my-5" />

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div className="flex-start gap-4">
            <img
              src="/images/carousel-1.png"
              alt="book"
              className="h-34.5 w-23 object-cover"
            />
            <div className="flex flex-col gap-1">
              <div className="rounded-sm border border-neutral-300 px-2 text-sm-bold w-fit">
                Category
              </div>
              <span className="text-md-bold md:text-xl-bold">Book Name</span>
              <span className="text-sm-medium md:text-md-medium">
                Author name
              </span>
              <div className="flex-start text-sm-bold">29 Aug 2025</div>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full md:w-45.5">Give Review</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle asChild>
                  <h2 className="text-lg-bold md:display-xs-extrabold md:mb-6">
                    Give Review
                  </h2>
                </DialogTitle>
                <DialogDescription>
                  <div className="flex-center flex-col">
                    <div className="text-sm-bold md:text-md-extrabold mb-2">
                      Give Rating
                    </div>
                    <StarRating value={rating} onChange={setRating} />

                    <Textarea
                      className="mt-6 w-full h-59 rounded-xl mb-6"
                      placeholder="Please share your thoughts about this book"
                    />

                    <Button className="w-full">Send</Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex-center w-full md:w-[700px] lg:w-[1000px]">
        <Button variant={"secondary"} className="w-50">
          Load More
        </Button>
      </div>
    </div>
  );
};

export default BorrowPage;
