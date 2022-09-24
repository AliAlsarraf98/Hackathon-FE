import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { LOGIN, REGISTER } from "../../ui-graphql/mutations";
import { helperFunction } from "../../ui/modal/helperFunction";
import UISignin from "../../ui/modal/signin";
import UISignup from "../../ui/modal/signup";

const Modal = ({ showSignupModal, togleSignup, isLogin }) => {
  const [togleLoginMode, setTogleLoginMode] = useState(true);
  const [user, setUser] = useState({});
  const [login, loginInfo] = useMutation(LOGIN);
  const [register, registerInfo] = useMutation(REGISTER);

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    if (togleLoginMode) {
      if (user?.email && user?.password) {
        await login({ variables: user });
      } else {
        await login({ variables: { email: "", password: "" } });
      }
    } else {
      if (user?.email && user?.password && user?.firstName && user?.lastName) {
        await register({ variables: user });
      } else {
        await register({
          variables: {
            email: "",
            username: "",
            password: "",
            firstName: "",
            lastName: "",
          },
        });
      }
    }
  };

  const togleMode = () => {
    setTogleLoginMode(!togleLoginMode);
  };

  useEffect(() => {
    loginInfo.reset();
    registerInfo.reset();
  }, [showSignupModal]);

  if (togleLoginMode)
    return (
      <UISignin
        showSignupModal={showSignupModal}
        togleSignup={togleSignup}
        togleMode={togleMode}
        handleSubmit={handleSubmit}
        handleUser={handleUser}
        loginInfo={loginInfo}
        isLogin={isLogin}
      />
    );
  return (
    <UISignup
      showSignupModal={showSignupModal}
      togleSignup={togleSignup}
      togleMode={togleMode}
      handleSubmit={handleSubmit}
      handleUser={handleUser}
      registerInfo={registerInfo}
      isLogin={isLogin}
    />
  );
};

export default Modal;
