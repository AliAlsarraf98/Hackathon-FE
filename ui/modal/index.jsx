import React from "react";

const UIModal = ({ showSignupModal, togleSignup, children }) => {
  if (!showSignupModal) return;
  let outSideInside = 1;

  function closeModal(e) {
    if (e === 1) {
      outSideInside === 1 ? togleSignup() : (outSideInside = 1);
    } else {
      outSideInside = 2;
    }
  }

  return (
    <div
      className="absolute z-[101] inset-0 w-full h-full bg-dark2"
      onClick={() => {
        closeModal(1);
      }}
    >
      <div className="w-screen  h-screen flex flex-col items-center justify-center fixed ">
        <div className="container">
          <div
            className="relative mx-auto max-w-[500px] rounded-lg border border-stroke bg-bg-color"
            onClick={() => {
              closeModal(2);
            }}
          >
            {/* THINGS ARE HERE */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIModal;
