import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import type { Review } from "@/types/Review";
import { Icon } from "@iconify/react";
import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

type DetailBookProps = {
  id?: string;
  image?: string;
  category?: string;
  title?: string;
  author?: string;
  description?: string;
  rating?: number;
  pageCount?: number;
  availableCopies?: number;
  reviewCount?: number;
  Review?: Review[];
};

const DetailBook: React.FC<DetailBookProps> = ({
  description,
  author,
  availableCopies,
  category,
  image,
  pageCount,
  rating,
  reviewCount,
  title,
  Review,
}) => {
  return (
    <div className="relative">
      <div className="flex-start mb-4 md:mb-6">
        <Button variant={"link"} asChild>
          <Link to="/home">Home</Link>
        </Button>
        <ChevronRight className="size-4" />
        <Button variant={"link"} asChild>
          <Link to="/category">Category</Link>
        </Button>
        <ChevronRight className="size-4" />
        <span className="text-neutral-950 text-sm-semibold">{title}</span>
      </div>

      <div className="flex items-center flex-col md:flex-row gap-9">
        <div className="h-[-webkit-fill-available] md:flex-[2.6] basis-80 p-2 bg-[#E9EAEB]">
          <img src={image} className="object-cover h-full w-full" />
        </div>

        <div className="h-full md:flex-[7.4] basis-80">
          <div className="mb-3 md:mb-5.5">
            <div className="text-sm-bold px-2 rounded-sm border border-neutral-300 mb-1 w-fit">
              {category}
            </div>
            <h2 className="display-xs-bold md:display-sm-bold mb-1">{title}</h2>
            <h3 className="text-sm-semibold md:text-md-semibold mb-1">
              {author}
            </h3>
            <div className="flex-start gap-1">
              <img src="/icons/star.svg" alt="star" />
              <span className="text-md-bold">{rating}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-5 w-full md:w-fit">
            {/* Item 1 */}
            <div className="w-26">
              <h4 className="text-lg-bold md:display-xs-bold">{pageCount}</h4>
              <span className="text-sm-medium md:text-md-medium">Page</span>
            </div>

            {/* Divider */}
            <div className="h-[-webkit-fill-available] w-px bg-neutral-300 mx-5" />

            {/* Item 2 */}
            <div className="w-26">
              <h4 className="text-lg-bold md:display-xs-bold">
                {availableCopies}
              </h4>
              <span className="text-sm-medium md:text-md-medium">Rating</span>
            </div>

            {/* Divider */}
            <div className="h-[-webkit-fill-available] w-px bg-neutral-300 mx-5" />

            {/* Item 3 */}
            <div className="w-26">
              <h4 className="text-lg-bold md:display-xs-bold">{reviewCount}</h4>
              <span className="text-sm-medium md:text-md-medium">Reviews</span>
            </div>
          </div>
          <hr className="border border-neutral-300 w-full md:w-150 mb-4 md:mb-5" />
          <h3 className="text-xl-bold mb-1">Description</h3>
          <p className="text-sm-medium md:text-md-medium mb-6 md:mb-5">
            {description}
          </p>

          <div className="flex-start gap-3">
            <Button variant={"secondary"} className="hidden md:inline w-50">
              Add to Cart
            </Button>
            <Button className="hidden md:inline w-50">Borrow Book</Button>
            <div className="size-10 rounded-full border border-neutral-300 hidden md:inline flex-center">
              <Icon icon="tabler:share" width="24" height="24" />
            </div>
          </div>
        </div>
      </div>

      <hr className="border border-neutral-300 my-6 md:my-16" />

      <h1 className="display-lg-bold md:display-xs-bold">Review</h1>
      <div className="flex-start gap-1 mb-4.5 md:mb-5">
        <img src="/icons/star.svg" alt="star" />
        <span className="text-md-bold md:text-xl-bold">
          {rating} ({reviewCount ? reviewCount : "Belum Ada"} Ulasan)
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 md:gap-5 mb-4.5">
        {Review &&
          Review.map((r) => (
            <div className="w-full p-4 rounded-2xl shadow-sm border">
              <div className="flex-start gap-3 mb-4">
                <img
                  src="/images/author.png"
                  alt="author"
                  className="size-14.5 md:size-16 rounded-full"
                />
                <div>
                  <h5 className="text-sm-bold md:text-lg-bold">
                    {r.User.name}
                  </h5>
                  <h5 className="text-sm-medium md:text-md-medium">
                    {formatDate(r.createdAt)}
                  </h5>
                </div>
              </div>
              <div className="flex gap-1 mb-2">
                {r.star &&
                  Array(Math.round(r.star))
                    .fill(0)
                    .map((_, i) => (
                      <img key={i} src="/icons/star.svg" alt="star" />
                    ))}
              </div>
              <p className="text-sm-semibold md:text-md-semibold">
                {r.comment}
              </p>
            </div>
          ))}
      </div>
      <div className="flex-start gap-3 fixed bottom-0 left-0 bg-white p-4 w-full">
        <Button variant={"secondary"} className="flex-1">
          Add to Cart
        </Button>
        <Button className="flex-1">Borrow Book</Button>
        <div className="size-11 rounded-full border border-neutral-300 flex-center">
          <Icon icon="tabler:share" width="24" height="24" />
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
