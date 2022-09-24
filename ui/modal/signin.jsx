import React from "react";
import UIModal from ".";
import { helperFunction } from "./helperFunction";
import LoadingCom from "./loadingComponent";
import Sucsess from "./Sucsess";

const UISignin = ({
  handleUser,
  handleSubmit = () => {},
  togleMode,
  loginInfo,
  togleSignup,
  isLogin,
  ...rest
}) => {
  function _handleSubmit(e) {
    e.preventDefault();
    handleSubmit();
    // login({ variables: user });
  }

  const error = helperFunction(loginInfo, "login", isLogin);

  return (
    <UIModal {...rest} togleSignup={togleSignup}>
      <div className="border-b border-stroke py-10 px-8 sm:p-[60px]">
        <div className="relative z-10 mb-8 flex items-center justify-center">
          <span className="absolute top-1/2 left-0 -z-10 hidden h-[1px] w-full -translate-y-1/2 bg-stroke sm:block"></span>
          <p className="bg-bg-color text-base font-medium text-body-color sm:px-5">
            Signin
          </p>
        </div>

        <form onSubmit={_handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-base font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleUser}
              placeholder="Enter your email"
              className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="mb-2 block text-base font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleUser}
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
            />
          </div>
          <div className="text-red-500 text-sm text-center mb-3">
            {error && error !== "logedIn" && error}
          </div>

          <button className="flex w-full items-center justify-center rounded-md bg-primary p-3 text-base font-semibold text-white hover:bg-opacity-90">
            Signin
          </button>
        </form>
      </div>
      <p className="p-6 text-center text-base font-medium text-body-color">
        Don't you have an account?
        <button
          className="text-white hover:text-primary ml-2"
          onClick={togleMode}
        >
          Sign up
        </button>
      </p>
      {loginInfo.loading && <LoadingCom />}
      {error == "logedIn" && <Sucsess togleSignup={togleSignup} />}
    </UIModal>
  );
};

export default UISignin;
