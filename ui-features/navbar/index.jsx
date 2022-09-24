import React, { useEffect, useState } from "react";
import UINavbar from "../../ui/navbar";

import navLogo from "../../public/images/navLogo.ico";
import Modal from "../modal";

const Navbar = ({ isLogin, logout, setIsLogin }) => {
  const navLinks = ["HOME", "MY COMPANY"];
  const [showSignupModal, setShowSignupModal] = useState(false);
  // const [isLogin, setIsLogin] = useState({ status: false, canLogin: true });

  const togleSignup = () => {
    setShowSignupModal(!showSignupModal);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== null) {
      setIsLogin({ ...isLogin, status: true, canLogin: false });
    } else {
      setIsLogin({ ...isLogin, status: false, canLogin: true });
    }
  }, [showSignupModal]);

  // const logout = () => {
  //   setIsLogin({ ...isLogin, status: false, canLogin: false });
  //   localStorage.removeItem("token");
  // };

  return (
    <>
      <UINavbar
        links={navLinks}
        logo={navLogo}
        togleSignup={togleSignup}
        logout={logout}
        isLogin={isLogin}
      />
      <Modal
        togleSignup={togleSignup}
        showSignupModal={showSignupModal}
        isLogin={isLogin}
      />
    </>
  );
};

export default Navbar;
