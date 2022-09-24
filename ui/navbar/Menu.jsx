import { Children, cloneElement, isValidElement, useState } from "react";

const Menu = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNav = () => {
    setNavbarOpen(!navbarOpen);
  };

  //   handle children with props
  function renderChildren() {
    return Children.map(children, (child) => {
      if (!isValidElement(child)) return child;
      return cloneElement(child, {
        ...child.props,
        navbarOpen,
      });
    });
  }

  return (
    <div className="flex w-full items-center px-4 justify-center">
      {/* MENU - [SANDWITCH - NAV LIST]*/}
      {/* SANDWITCH  */}
      <Sandwitch navbarOpen={navbarOpen} handleNav={handleNav} />
      {/* NAV - LINKS */}
      {/* BUTTONS */}
      {renderChildren()}
    </div>
  );
};

function Sandwitch({ handleNav, navbarOpen }) {
  return (
    <button
      onClick={handleNav}
      id="navbarToggler"
      name="navbarToggler"
      aria-label="navbarToggler"
      className={`${
        navbarOpen && "navbarTogglerActive"
      } absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
    >
      <span
        className={`${
          navbarOpen && "transform rotate-45 top-[7px]"
        } relative my-[6px] block h-[2px] w-[30px] bg-white`}
      ></span>
      <span
        className={`${
          navbarOpen && "opacity-0"
        } relative my-[6px] block h-[2px] w-[30px] bg-white`}
      ></span>
      <span
        className={`${
          navbarOpen && "top-[-8px] rotate-[135deg]"
        } relative my-[6px] block h-[2px] w-[30px] bg-white`}
      ></span>
    </button>
  );
}

export default Menu;
