import React from "react";

interface CardCategoryProps {
  label: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({ label }) => {
  return (
    <div className="p-2 md:p-3 rounded-2xl border shadow-lg">
      <div className="w-full bg-primary-200 rounded-xl flex-center p-1.5 mb-3">
        <img src="/icons/Fiksi.svg" alt="fiksi" />
      </div>
      <span className="text-xs-semibold md:text-md-semibold">{label}</span>
    </div>
  );
};

export default CardCategory;
