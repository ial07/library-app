import { Input } from "@/components/ui/input";
import { useMeReview } from "@/features/me/hooks/useMe";
import { formatDate } from "@/lib/utils";
import dayjs from "dayjs";
import { Search } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const ReviewPage: React.FC = () => {
  const { data, isLoading, isError, error } = useMeReview();

  if (isError) return <span>{error.message}</span>;
  return (
    <div className="mt-4 md:mt-6 mb-12 md:mb-9">
      <h1 className="display-xs-bold md:display-sm-bold mb-4 md:mb-6">
        Reviews
      </h1>
      <div className="relative mb-4 md:mb-6">
        <Input placeholder="Search book" className="rounded-full ps-10.5" />
        <Search className="text-neutral-600 absolute top-0 translate-1/2" />
      </div>

      {!isLoading && data?.reviews.length == 0 ? (
        <span>No Data Found</span>
      ) : (
        data?.reviews.map((r) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 15px rgba(0, 255, 255, 0.4)",
              borderColor: "rgba(0,255,255,0.6)",
            }}
            transition={{ type: "spring", damping: 10, stiffness: 200 }}
            className="p-4 md:p-5 rounded-2xl bg-white shadow-sm border w-full md:w-[700px] lg:w-[1000px] mb-4"
          >
            <div className="flex-start">
              <span className="text-sm-semibold md:text-md-semibold">
                {formatDate(r.createdAt)}
              </span>
            </div>
            <hr className="border border-neutral-300 my-4 md:my-5" />

            <div className="flex-start flex-col md:flex-row md:justify-between md:items-center gap-6">
              <div className="flex-start gap-4">
                <img
                  src={r.Book.coverImage}
                  alt={r.Book.title}
                  className="h-34.5 w-23 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <div className="rounded-sm border border-neutral-300 px-2 text-sm-bold w-fit">
                    Category
                  </div>
                  <span className="text-md-bold md:text-xl-bold">
                    {r.Book.title}
                  </span>
                  <span className="text-sm-medium md:text-md-medium">
                    Author name
                  </span>
                  <div className="flex-start text-sm-bold">
                    {dayjs(r.createdAt).format("DD MMMM YYYY")}
                  </div>
                </div>
              </div>
            </div>

            <hr className="border border-neutral-300 my-4 md:my-5" />

            <div className="flex-start gap-1">
              {Array.from({ length: r.star }).map((_, i) => (
                <img src="/icons/star.svg" alt="star" key={i} />
              ))}
            </div>
            <p className="text-sm-semibold md:text-md-semibold">{r.comment}</p>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default ReviewPage;
