import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Wraper = ({ children, logo, width, height, goHome }) => {
  // Nav bar scrolling
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <header
      className={`header top-0 left-0 flex w-full items-center bg-transparent transition fixed ${
        scrollPosition > 50
          ? "z-50 bg-dark bg-opacity-70 shadow-sticky backdrop-blur-sm"
          : "z-50"
      }`}
    >
      <div className="container ">
        <div className="relative mx-[-16px] flex items-center justify-between">
          <Logo
            logo={logo}
            scrollPosition={scrollPosition}
            width={width}
            height={height}
            onClick={goHome}
          />
          <Menu>{children}</Menu>
        </div>
      </div>
    </header>
  );
};

export default Wraper;
