import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const ReviewPage: React.FC = () => {
  return (
    <div className="mt-4 md:mt-6 mb-12 md:mb-9">
      <h1 className="display-xs-bold md:display-sm-bold mb-4 md:mb-6">
        Reviews
      </h1>
      <div className="relative mb-4 md:mb-6">
        <Input placeholder="Search book" className="rounded-full ps-10.5" />
        <Search className="text-neutral-600 absolute top-0 translate-1/2" />
      </div>

      <div className="p-4 md:p-5 rounded-2xl bg-white shadow-sm border w-full md:w-[700px] lg:w-[1000px] mb-4">
        <div className="flex-start">
          <span className="text-sm-semibold md:text-md-semibold">
            25 August 2025, 13:38
          </span>
        </div>
        <hr className="border border-neutral-300 my-4 md:my-5" />

        <div className="flex-start flex-col md:flex-row md:justify-between md:items-center gap-6">
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
        </div>

        <hr className="border border-neutral-300 my-4 md:my-5" />

        <div className="flex-start gap-1">
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
          <img src="/icons/star.svg" alt="star" />
        </div>
        <p className="text-sm-semibold md:text-md-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          reprehenderit debitis similique corrupti dolorem aperiam molestias
          quo, neque sint architecto eaque mollitia, voluptates labore delectus
          quae sed commodi iure quibusdam iste soluta. Ducimus expedita
          exercitationem ten\
        </p>
      </div>
    </div>
  );
};

export default ReviewPage;
