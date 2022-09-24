import React from "react";
import Company from "../ui-features/company";

const Contact = ({ isLogin }) => {
  if (!isLogin.status)
    return (
      <div className="h-screen text-red-400 text-3xl flex justify-center items-center">
        YOU NEED TO BE LOGGED IN TO VIEW THIS PAGE!
      </div>
    );
  return (
    <div className="h-screen w-screenh flex justify-center items-center">
      <p className="text-white"> </p>
      <Company />
    </div>
  );
};

export default Contact;
