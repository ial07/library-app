import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CardBook from "./CardBook";
import { Button } from "@/components/ui/button";
import type { Book, BookListResponse } from "@/types/Book";
import { cn } from "@/lib/utils";

type ListBooksProps = {
  listBooks: BookListResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
};

const ListBooks: React.FC<ListBooksProps> = ({
  listBooks,
  error,
  isError,
  isLoading,
  page,
  setPage,
  className,
}) => {
  const [allBooks, setAllBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (!listBooks?.books) return;

    setAllBooks((prev) => {
      if (page === 1) return listBooks.books;
      return [...prev, ...listBooks.books];
    });
  }, [listBooks?.books]); // hanya jalan jika data berubah

  if (isError) return <div>{error?.message}</div>;

  const totalPages = listBooks?.pagination.totalPages ?? 0;

  return (
    <div className={cn("flex-center flex-col", className)}>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 mb-5 md:mb-10">
        {isLoading && allBooks.length === 0 ? (
          Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-100 w-full rounded-lg" />
          ))
        ) : allBooks.length > 0 ? (
          allBooks.map((b) => {
            const img =
              b.coverImage && b.coverImage.startsWith("http")
                ? b.coverImage
                : "/images/no-pic.png";
            return (
              <CardBook
                key={b.id}
                id={b.id}
                image={img}
                label={b.title}
                description={b.description}
                rating={b.rating}
              />
            );
          })
        ) : (
          <div>No Books yet</div>
        )}
      </div>

      {totalPages > 1 && page < totalPages && (
        <Button
          onClick={() => setPage((p) => p + 1)}
          disabled={isLoading}
          variant="secondary"
          className="w-37.5 md:w-50"
        >
          {isLoading ? "Loading..." : "Load More"}
        </Button>
      )}
    </div>
  );
};

export default ListBooks;
