import { BookMarkedIcon } from "lucide-react";
import React from "react";

type CardAuthorProps = {
  name: string;
  qty: number;
};

const CardAuthor: React.FC<CardAuthorProps> = ({ name, qty }) => {
  return (
    <div className="shadow-lg p-3 md:p-4 rounded-xl flex-start items-center gap-3 md:gap-4 mb-4 md:mb-29">
      <div className="size-15 md:size-20 rounded-full overflow-hidden">
        <img src="/images/author.png" alt="author" className="object-cover" />
      </div>
      <div>
        <span className="text-md-bold md:text-lg-bold">{name}</span>
        <p className="text-sm-medium md:text-md-medium flex items-center gap-1.5">
          <BookMarkedIcon className="text-primary-300" />
          <span> {qty} books</span>
        </p>
      </div>
    </div>
  );
};

export default CardAuthor;
