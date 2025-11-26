import { Skeleton } from "@/components/ui/skeleton";
import { useListBooksAuthor } from "@/features/author/hooks/useAuthor";
import CardBook from "@/features/books/components/CardBook";
import React from "react";
import { useParams } from "react-router-dom";

const BookByAuthorPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useListBooksAuthor(Number(id));

  if (isError) return <span>{error.message}</span>;
  return (
    <div className="custom-container">
      <div className="flex-start gap-3 md:gap-4 p-3 md:p-4 mb-4 md:mb-10">
        <img
          src="/images/author.png"
          alt="author"
          className="size-15 md:size-20 rounded-full"
        />
        <div>
          <h5 className="text-md-bold md:text-lg-bold">{data?.author.name}</h5>
          <span className="text-sm-medium md:text-md-medium">
            {data?.books?.length} books
          </span>
        </div>
      </div>

      <h2 className="display-xs-bold md:display-lg-bold mb-4 md:mb-8">
        Book List
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 mb-5 md:mb-10 ">
        {isLoading ? (
          <>
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-100 w-full rounded-lg" />
            ))}
          </>
        ) : data?.books && data?.books.length > 0 ? (
          data.books.map((b) => (
            <CardBook
              key={b.id}
              id={b.id}
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
    </div>
  );
};

export default BookByAuthorPage;
