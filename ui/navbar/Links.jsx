import React from "react";

const Links = ({ children, navbarOpen }) => {
  return (
    <nav
      id="navbarCollapse"
      className={`${
        !navbarOpen && "hidden"
      } absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-bg-color shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent py-3 lg:py-0 lg:px-4 lg:shadow-none xl:px-6`}
    >
      <ul className="blcok lg:flex">{children}</ul>
    </nav>
  );
};

export default Links;
