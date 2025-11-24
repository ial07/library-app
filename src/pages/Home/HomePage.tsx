import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CardCategory from "@/components/cardCategory";
import ListBooks from "@/features/books/components/ListBooks";
import { useBooks } from "@/features/books/hooks/useBooks";
import { useAuthor } from "@/features/author/hooks/useAuthor";
import ListAuthors from "@/features/author/components/ListAuthors";

const HomePage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);

  const { data, error, isError, isLoading } = useBooks(
    undefined,
    page,
    limit,
    undefined,
    undefined
  );

  const {
    data: listAuthor,
    isLoading: isLoadingAuthor,
    error: errorAuthor,
    isError: isErrorAuthor,
  } = useAuthor();

  console.log(listAuthor?.authors);

  return (
    <div>
      <Carousel className="mb-6 md:mb-12">
        <CarouselContent>
          <CarouselItem className="relative">
            <img
              src="/images/carousel-1.png"
              alt="carousel"
              className="w-full"
            />
            <img
              src="/images/text-hero.png"
              alt="carousel"
              className="absolute top-1/2 left-1/2 -translate-1/2"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/images/carousel-1.png"
              alt="carousel"
              className="w-full"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/images/carousel-1.png"
              alt="carousel"
              className="w-full"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-6 md:mb-12">
        <CardCategory label="Fiction" />
        <CardCategory label="Fiction" />
        <CardCategory label="Fiction" />
        <CardCategory label="Fiction" />
        <CardCategory label="Fiction" />
        <CardCategory label="Fiction" />
      </div>

      <h2 className="display-xs-bold md:display-lg-bold mb-5 md:mb-10">
        Recommendation
      </h2>

      <ListBooks
        listBooks={data}
        error={error}
        isError={isError}
        isLoading={isLoading}
        setPage={setPage}
      />

      <hr className="border border-neutral-300 my-6 md:my-12" />

      <h2 className="display-xs-bold md:display-lg-bold mb-5 md:mb-10">
        Popular Author
      </h2>

      <ListAuthors
        datalistAuthors={listAuthor}
        error={errorAuthor}
        isError={isErrorAuthor}
        isLoading={isLoadingAuthor}
      />
    </div>
  );
};

export default HomePage;
