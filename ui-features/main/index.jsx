import React from "react";
import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="relative ">
        <Head>
          <title>HACKATHON BASIC SETUP</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
