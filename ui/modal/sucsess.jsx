import React, { useEffect } from "react";

const Sucsess = ({ togleSignup }) => {
  useEffect(() => {
    setTimeout(togleSignup, 750);
  }, []);

  return (
    <div className="h-full w-full bg-black opacity-95 rounded-lg absolute inset-0 z-[100] flex flex-col items-center justify-center">
      <div className="h-1/2 w-[95%] md:w-1/2 text-green-600 text-3xl flex flex-col items-center justify-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Thank you!
        </div>
      </div>
    </div>
  );
};

export default Sucsess;
