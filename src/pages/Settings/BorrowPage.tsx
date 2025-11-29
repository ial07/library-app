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
import { useLoan } from "@/features/checkout/hooks/useLoan";
import { useMeLoans } from "@/features/me/hooks/useMe";
import { useReview } from "@/features/review/hooks/useReview";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import dayjs from "dayjs";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const BorrowPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"--" | "BORROWED" | "LATE" | "RETURNED">(
    "--"
  );
  const STATUSES = ["--", "BORROWED", "RETURNED", "LATE"] as const;

  const { data, isLoading, isError, error } = useMeLoans(status, page, 10);
  const { reviewMutation } = useReview();
  const { putLoanMutation, errorMessage } = useLoan();

  if (isError) return <span>{error.message}</span>;

  // tampilkan tombol hanya jika masih ada halaman berikutnya
  const canNext = data && data.pagination && data?.pagination.totalPages > page;

  // klik tombol Load More
  const handleLoadMore = () => {
    if (canNext) {
      setPage((prev) => prev + 1);
    }
  };

  // Give Review
  const handleSend = async (bookId: number) => {
    try {
      // kirim review
      const resReview = await reviewMutation.mutateAsync({
        bookId,
        star: rating,
        comment,
      });

      // update loan
      const resLoan = await putLoanMutation.mutateAsync(String(bookId));

      // tutup dialog
      (
        document.querySelector("[data-dialog-close]") as HTMLButtonElement
      )?.click();

      toast.success(resLoan.message);
      window.location.href = "/settings?type=reviews";
    } catch (err: any) {
      const msg = err?.message || "Gagal memproses";
      toast.error(msg);
    }
  };

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
        {STATUSES.map((s) => (
          <div
            key={s}
            onClick={() => setStatus(s)}
            className={cn(
              "rounded-full border py-1 px-4 text-md-bold cursor-pointer",
              "border-neutral-300",
              status === s && "bg-[#F6F9FE] border-primary-300 text-primary-300"
            )}
          >
            {s === "--" ? "All" : s === "LATE" ? "Overdue" : s}
          </div>
        ))}
      </div>

      {!isLoading && data?.loans.length == 0 ? (
        <div>Data Empty</div>
      ) : (
        data?.loans.map((loan) => (
          <motion.div
            key={loan.id}
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
            <div className="flex-between">
              <div className="flex-start items-center">
                <div className="text-sm-bold md:text-md-bold me-1 md:me-3">
                  Status
                </div>
                <div className="bg-[#24A5000D] text-[#24A500] text-sm-bold py-0.5 px-2 rounded-sm">
                  {loan.status}
                </div>
              </div>
              <div className="flex-start items-center">
                <div className="text-sm-bold md:text-md-bold me-1 md:me-3">
                  Due Date
                </div>
                <div className="bg-[#EE1D521A] text-[#EE1D52] text-sm-bold py-0.5 px-2 rounded-sm">
                  {dayjs(loan.dueAt).format("DD MMMM YYYY")}
                </div>
              </div>
            </div>
            <hr className="border border-neutral-300 my-4 md:my-5" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
              <div className="flex-start gap-4">
                <img
                  src={loan.Book.coverImage}
                  alt="book"
                  className="h-34.5 w-23 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <div className="rounded-sm border border-neutral-300 px-2 text-sm-bold w-fit">
                    {loan.Book.Category?.name ?? "Category"}
                  </div>
                  <span className="text-md-bold md:text-xl-bold">
                    {loan.Book.title}
                  </span>
                  <span className="text-sm-medium md:text-md-medium">
                    {loan.Book.Author?.name ?? "Author Name"}
                  </span>
                  <div className="flex-start text-sm-bold">
                    {dayjs(loan.dueAt).format("DD MMM YYYY")}
                  </div>
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
                    <DialogDescription asChild>
                      <div className="flex-center flex-col">
                        <div className="text-sm-bold md:text-md-extrabold mb-2">
                          Give Rating
                        </div>
                        <StarRating value={rating} onChange={setRating} />

                        <Textarea
                          className="mt-6 w-full h-59 rounded-xl mb-6"
                          placeholder="Please share your thoughts about this book"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        />

                        <Button
                          className="w-full"
                          onClick={() => handleSend(loan.bookId)}
                          disabled={reviewMutation.isPending}
                        >
                          {reviewMutation.isPending ? "Sending..." : "Send"}
                        </Button>
                        <DialogClose data-dialog-close />
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        ))
      )}
      {canNext && (
        <div className="flex-center w-full md:w-[700px] lg:w-[1000px]">
          <Button
            variant={"secondary"}
            className="w-50"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default BorrowPage;
