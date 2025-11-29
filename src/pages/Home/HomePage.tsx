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
import { CategoryContants } from "@/constants/category-constant";

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

  return (
    <div>
      <Carousel className="mb-6 md:mb-12">
        <CarouselContent>
          <CarouselItem className="relative max-h-110">
            <img
              src="/images/carousel-1.png"
              alt="carousel"
              className="w-full max-h-110 object-cover"
            />
            <img
              src="/images/text-hero.png"
              alt="carousel"
              className="absolute top-1/2 left-1/2 -translate-1/2"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/images/carousel-2.jpg"
              alt="carousel"
              className="w-full max-h-110 object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/images/carousel-3.jpg"
              alt="carousel"
              className="w-full max-h-110 object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-6 md:mb-12">
        {CategoryContants.map((cc) => (
          <CardCategory label={cc.label} image={cc.image} key={cc.label} />
        ))}
      </div>

      <h2 className="display-xs-bold md:display-lg-bold mb-5 md:mb-10">
        Recommendation
      </h2>

      <ListBooks
        listBooks={data}
        error={error}
        isError={isError}
        isLoading={isLoading}
        page={page}
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
