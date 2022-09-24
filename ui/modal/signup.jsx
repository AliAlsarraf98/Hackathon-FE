import React from "react";
import UIModal from ".";
import { helperFunction } from "./helperFunction";
import LoadingCom from "./loadingComponent";
import Sucsess from "./Sucsess";

const UISignup = ({
  handleUser,
  handleSubmit = () => {},
  togleMode,
  registerInfo,
  togleSignup,
  isLogin,
  ...rest
}) => {
  function _handleSubmit(e) {
    e.preventDefault();
    handleSubmit();
    // login({ variables: user });
  }
  const error = helperFunction(registerInfo, "register", isLogin);

  return (
    <UIModal {...rest} togleSignup={togleSignup}>
      <div className="border-b border-stroke py-10 px-8 sm:p-[60px]">
        <div className="relative z-10 mb-8 flex items-center justify-center">
          <span className="absolute top-1/2 left-0 -z-10 hidden h-[1px] w-full -translate-y-1/2 bg-stroke sm:block"></span>
          <p className="bg-bg-color text-base font-medium text-body-color sm:px-5">
            Signup
          </p>
        </div>

        <form onSubmit={_handleSubmit}>
          <div className="overflow-auto h-1/2">
            <TextFiled
              title="Username"
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={handleUser}
            />
            <TextFiled
              title="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleUser}
            />
            <TextFiled
              title="First Name"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              onChange={handleUser}
            />
            <TextFiled
              title="Last Name"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              onChange={handleUser}
            />

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
          </div>
        </form>
      </div>

      <p className="p-6 text-center text-base font-medium text-body-color">
        You have an account?
        <button
          className="text-white hover:text-primary ml-2"
          onClick={togleMode}
        >
          Sign in
        </button>
      </p>

      {registerInfo.loading && <LoadingCom />}
      {error == "logedIn" && <Sucsess togleSignup={togleSignup} />}
    </UIModal>
  );
};

function TextFiled({ title, name, placeholder, onChange, type }) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="mb-2 block text-base font-medium text-white"
      >
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-body-color outline-none transition-all focus:bg-[#454457] focus:shadow-input"
      />
    </div>
  );
}
export default UISignup;
