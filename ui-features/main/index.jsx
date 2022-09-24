import React, { Children, cloneElement, isValidElement, useState } from "react";
import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";

const MainLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState({ status: false, canLogin: true });
  const logout = () => {
    setIsLogin({ ...isLogin, status: false, canLogin: false });
    localStorage.removeItem("token");
  };

  function RenderChildren() {
    return Children.map(children, (child) => {
      if (!isValidElement(child)) return child;
      return cloneElement(child, {
        ...child.props,
        isLogin,
      });
    });
  }

  return (
    <>
      <div className="relative ">
        <Head>
          <title>HACKATHON BASIC SETUP</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar isLogin={isLogin} logout={logout} setIsLogin={setIsLogin} />
        <RenderChildren />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
