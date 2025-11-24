import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CardBook from "./CardBook";
import { Button } from "@/components/ui/button";
import type { BookListResponse } from "@/types/Book";

type ListBooksProps = {
  listBooks: BookListResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const ListBooks: React.FC<ListBooksProps> = ({
  listBooks,
  error,
  isError,
  isLoading,
  setPage,
}) => {
  if (isError) return <div className="p-10 text-red-500">{error?.message}</div>;

  const books = listBooks?.books ?? [];
  const totalPages: number = listBooks?.pagination.totalPages ?? 0;

  return (
    <div className="flex-center flex-col">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 mb-5 md:mb-10 ">
        {isLoading ? (
          <>
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-100 w-full rounded-lg" />
            ))}
          </>
        ) : books.length > 0 ? (
          books.map((b) => (
            <CardBook
              key={b.id}
              image={b.coverImage}
              label={b.title}
              description={b.description}
              rating={b.rating}
            />
          ))
        ) : (
          <div>No Products Yet</div>
        )}
      </div>
      {totalPages > 1 && (
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isLoading}
          variant={"secondary"}
          className="w-37.5 md:w-50"
        >
          {isLoading ? "Loading..." : "Load More"}
        </Button>
      )}
    </div>
  );
};

export default ListBooks;
