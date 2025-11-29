import React from "react";
import { motion } from "framer-motion";

interface CardCategoryProps {
  label: string;
  image: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({ label, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="p-2 md:p-3 rounded-2xl border shadow-lg cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="w-full bg-primary-200 rounded-xl flex-center p-1.5 mb-3"
      >
        <img src={image} alt={label} />
      </motion.div>

      <span className="text-xs-semibold md:text-md-semibold">{label}</span>
    </motion.div>
  );
};

export default CardCategory;
