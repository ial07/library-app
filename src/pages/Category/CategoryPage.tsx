import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import ListBooks from "@/features/books/components/ListBooks";
import { useBooks } from "@/features/books/hooks/useBooks";
import { useCategories } from "@/features/category/hooks/useCategory";
import { Label } from "@radix-ui/react-label";
import { ListFilterIcon } from "lucide-react";
import React, { useState } from "react";

const CategoryPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(10);
  const [selectedCat, setSelectedCat] = useState<number | undefined>(undefined);

  const { data, isLoading, isError, error } = useBooks(
    undefined,
    page,
    limit,
    selectedCat,
    undefined
  );

  const { data: dataCategory, isLoading: isLoadingCategory } = useCategories();

  return (
    <div className="flex gap-10 mb-4 md:mb-24">
      <div className="hidden md:flex md:flex-[1.9] bg-white shadow-sm border rounded-xl">
        <div className="py-4 w-full">
          <div className="px-4">
            <h6 className="text-md-extrabold mb-2.5">FILTER</h6>
            <h5 className="text-lg-extrabold mb-2.5">Category</h5>

            <div className="flex flex-col gap-2.5">
              {!isLoadingCategory &&
                dataCategory &&
                dataCategory.categories.map((cat) => (
                  <div className="flex items-center space-x-2" key={cat.id}>
                    <Checkbox
                      checked={selectedCat === Number(cat.id)}
                      onCheckedChange={() =>
                        setSelectedCat(
                          selectedCat === Number(cat.id)
                            ? undefined
                            : Number(cat.id)
                        )
                      }
                      id={cat.id.toString()}
                    />
                    <Label
                      htmlFor={cat.id.toString()}
                      className="text-md-medium"
                    >
                      {cat.name}
                    </Label>
                  </div>
                ))}
            </div>
          </div>

          <hr className="border border-neutral-300 my-6" />

          <div className="px-4">
            <h5 className="text-lg-extrabold mb-2.5">Rating</h5>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex items-center mb-2.5">
                  <Checkbox />
                  <img
                    key={i}
                    src="/icons/star.svg"
                    alt="star"
                    className="me-1"
                  />
                  <span>{i + 1}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full md:flex-[8.1]">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <div className="flex-between cursor-pointer shadow-md rounded-xl p-3 mb-4 border">
                <span className="text-sm-extrabold">FILTER</span>
                <ListFilterIcon />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <div className="py-4 w-full">
                    <div className="px-4">
                      <h6 className="text-md-extrabold mb-2.5">FILTER</h6>
                      <h5 className="text-lg-extrabold mb-2.5">Category</h5>

                      <div className="flex flex-col gap-2.5">
                        {!isLoadingCategory &&
                          dataCategory &&
                          dataCategory.categories.map((cat) => (
                            <div
                              className="flex items-center space-x-2"
                              key={cat.id}
                            >
                              <SheetClose asChild>
                                <Checkbox
                                  checked={selectedCat === Number(cat.id)}
                                  onCheckedChange={() =>
                                    setSelectedCat(
                                      selectedCat === Number(cat.id)
                                        ? undefined
                                        : Number(cat.id)
                                    )
                                  }
                                  id={cat.id.toString()}
                                />
                              </SheetClose>
                              <Label
                                htmlFor={cat.id.toString()}
                                className="text-md-medium"
                              >
                                {cat.name}
                              </Label>
                            </div>
                          ))}
                      </div>
                    </div>

                    <hr className="border border-neutral-300 my-6" />

                    <div className="px-4">
                      <h5 className="text-lg-extrabold mb-2.5">Rating</h5>
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="flex items-center mb-2.5">
                            <Checkbox />
                            <img
                              key={i}
                              src="/icons/star.svg"
                              alt="star"
                              className="me-1"
                            />
                            <span>{i + 1}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <ListBooks
          error={error}
          isError={isError}
          isLoading={isLoading}
          listBooks={data}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
