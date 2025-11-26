import React from "react";
import { Link } from "react-router-dom";

type CardBookProps = {
  id: string;
  image: string;
  label: string;
  description: string;
  rating: number;
};

const CardBook: React.FC<CardBookProps> = ({
  id,
  description,
  label,
  rating,
  image,
}) => {
  return (
    <Link
      to={`/details/${id}`}
      className="rounded-xl shadow-md overflow-hidden cursor-pointer"
    >
      <img
        src={image}
        alt={label}
        className="object-cover w-full"
        style={{ height: "clamp(16.13rem, 32.81vw, 21.00rem)" }}
      />
      <div className="p-4">
        <h5 className="text-sm-bold md:text-lg-bold mb-1 line-clamp-1">
          {label}
        </h5>
        <p className="text-sm-medium md:text-md-medium mb-1 line-clamp-2 max-h-20 h-15">
          {description}
        </p>
        <div className="flex-start gap-1">
          <img src="/icons/star.svg" alt="star" />
          <span className="text-sm-semibold md:text-md-semibold">{rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default CardBook;
