import React from "react";

const NavButton = ({ onClick = () => {}, children }) => {
  return (
    <div className=" justify-end sm:flex lg:pr-0 mr-5">
      <button
        onClick={() => {
          onClick();
        }}
        className=" flex items-center rounded-md border-2 border-white py-2 px-1 text-base font-semibold text-white transition duration-300 ease-in-out hover:border-primary hover:bg-primary lg:px-4 xl:px-6"
      >
        {children}
      </button>
    </div>
  );
};

export default NavButton;
