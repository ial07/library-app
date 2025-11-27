import type { ListAuthorResponse } from "@/types/Author";
import React from "react";
import CardAuthor from "./CardAuthor";
import { Link } from "react-router-dom";

type ListAuthorsProps = {
  datalistAuthors: ListAuthorResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
};

const ListAuthors: React.FC<ListAuthorsProps> = ({
  error,
  isError,
  isLoading,
  datalistAuthors,
}) => {
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <span className="text-danger">{error?.message}</span>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
      {datalistAuthors &&
        datalistAuthors.authors.length > 0 &&
        datalistAuthors.authors.map((a) => (
          <Link to={`/bookbyauthor/${a.id}`} key={a.id}>
            <CardAuthor name={a.name} qty={5} />
          </Link>
        ))}
    </div>
  );
};

export default ListAuthors;
