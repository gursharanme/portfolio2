import React from "react";

const PrimaryButton = ({ariaLabel, onClick, title, className=""}) => {
  return (
    <button
          aria-label={ariaLabel}
          onClick={onClick}
          className={`text-base md:text-lg font-semibold bg-neutral-900 text-neutral-100 px-6 py-3.5 md:py-3 rounded-full hover:scale-102 active:scale-98 transition-transform duration-200 ease cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
