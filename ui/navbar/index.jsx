import React, { useEffect, useState } from "react";
import Wraper from "./wraper";

import Links from "./Links";
import { useRouter } from "next/router";
import NavButton from "./NavButton";
const UINavbar = ({
  links = ["Home", "About", "GoogleIt"],
  logo,
  togleSignup,
  logout,
  isLogin,
}) => {
  const router = useRouter();
  const pathIs = router.pathname.split("/")[1];

  const [isActive, setIsActive] = useState({
    [pathIs ? pathIs : "home"]: true,
  });

  const handleNav = (e) => {
    setIsActive({ [e]: true });
    router.push(`/${e.toLowerCase() === "home" ? "" : e.toLowerCase()}`);
  };

  const NavbarLinks = () => {
    return links.map((link, index) => (
      <Link
        key={index}
        onClick={() => {
          handleNav(link.split(" ").join("-").toLowerCase());
        }}
        active={isActive[link.split(" ").join("-").toLowerCase()]}
      >
        {link}
      </Link>
    ));
  };

  const goHome = () => {
    router.push("/");
  };
  return (
    <Wraper logo={logo} width="40px" height="40px" goHome={goHome}>
      <Links>
        <NavbarLinks />
      </Links>
      {isLogin.status ? (
        <NavButton onClick={logout}>Logout</NavButton>
      ) : (
        <NavButton onClick={togleSignup}>Signin</NavButton>
      )}
    </Wraper>
  );
};

function Link({ children, onClick = () => {}, active = false }) {
  return (
    <li className="group relative">
      <button
        onClick={onClick}
        className={
          active
            ? "mx-8 flex py-2 text-base font-semibold text-white group-hover:text-white lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:px-0 xl:ml-12"
            : "mx-8 flex py-2 text-base font-semibold text-[#bababa] group-hover:text-white lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:px-0 xl:ml-12"
        }
      >
        {children}
      </button>
    </li>
  );
}
function ShoppingCartSVG() {
  return (
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
        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );
}
export default UINavbar;
