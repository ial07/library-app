import DetailBook from "@/features/books/components/DetailBook";
import ListBooks from "@/features/books/components/ListBooks";
import { useBookById, useBooks } from "@/features/books/hooks/useBooks";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage: React.FC = () => {
  const { id } = useParams();
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(5);
  const { data, isLoading, isError, error } = useBookById(id!);

  const {
    data: dataBook,
    isLoading: loadingBook,
    isError: isErrorBook,
    error: errorBook,
  } = useBooks(undefined, page, limit, undefined, undefined);

  if (isError) return <span>{error.message}</span>;
  return (
    <div>
      {!isLoading && (
        <DetailBook
          id={data?.id}
          author={data?.Author.name}
          category={data?.Category.name}
          description={data?.description}
          image={data?.coverImage}
          pageCount={data?.totalCopies}
          availableCopies={data?.availableCopies}
          rating={data?.rating}
          reviewCount={data?.reviewCount}
          title={data?.title}
          Review={data?.Review}
        />
      )}
      <hr className="border border-neutral-300 my-6 md:my-16" />
      <h1 className="display-lg-bold md:display-xs-bold mb-5 md:mb-10">
        Related Books
      </h1>
      <ListBooks
        listBooks={dataBook}
        isLoading={loadingBook}
        isError={isErrorBook}
        error={errorBook}
        page={page}
        setPage={setPage}
        className="mb-4 md:mb-29.5"
      />
    </div>
  );
};

export default DetailPage;
