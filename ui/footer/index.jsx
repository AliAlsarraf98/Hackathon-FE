import React from "react";

const UIFooter = ({
  text = "Copyright 2025 - Ali Ahmad, All rights reserved.",
}) => {
  return (
    <footer className="bg-bg-color pt-24">
      <div className="container">
        <div className="border-t border-stroke">
          <div className="py-7 text-center">
            <p className="text-base font-medium text-body-color">
              &copy; {text}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UIFooter;
