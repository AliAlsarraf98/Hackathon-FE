import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Logo = ({ scrollPosition, logo, width, height, ...rest }) => {
  return (
    <div className="w-60 max-w-full px-4">
      <button
        {...rest}
        className={`header-logo block w-full ${
          scrollPosition > 50 ? "py-4 lg:py-2" : "py-5 lg:py-7"
        }`}
      >
        {/* <img src={logo} alt="logo" className="h-10 max-w-full" /> */}
        <Image src={logo} alt="Logo" width={width} height={height} />
      </button>
    </div>
  );
};

export default Logo;
