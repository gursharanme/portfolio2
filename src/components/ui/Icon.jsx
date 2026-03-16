import React from "react";

const Icon = ({ ariaLabel, onClick, path }) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className="bg-neutral-900 text-neutral-100 p-3 md:p-2.5 rounded-full hover:scale-103 active:scale-98 transition-all duration-200 ease"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.7}
        stroke="currentColor"
        className="size-5.5 md:size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={path}
        />
      </svg>
    </button>
  );
};

export default Icon;
