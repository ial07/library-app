import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.7)",
        borderColor: "rgba(0, 255, 255, 0.8)",
        borderWidth: "2px",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 8 }}
      className="rounded-xl border border-transparent"
    >
      <Link
        to={`/details/${id}`}
        className="overflow-hidden cursor-pointer block rounded-xl"
      >
        <motion.img
          src={image}
          alt={label}
          className="object-cover w-full"
          style={{ height: "clamp(16.13rem, 32.81vw, 21.00rem)" }}
          whileHover={{
            scale: 1.1,
          }}
          transition={{ type: "spring", stiffness: 180, damping: 10 }}
        />
        <div className="p-4">
          <motion.h5
            className="text-sm-bold md:text-lg-bold mb-1 line-clamp-1"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.h5>
          <p className="text-sm-medium md:text-md-medium mb-1 line-clamp-2 max-h-20 h-15">
            {description}
          </p>
          <motion.div
            className="flex-start gap-1"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <img src="/icons/star.svg" alt="star" />
            <span className="text-sm-semibold md:text-md-semibold">
              {rating}
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CardBook;
