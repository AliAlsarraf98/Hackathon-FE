import Image from "next/image";
import React from "react";

import heroImage from "../../public/images/navLogo.ico";
const Hero = ({
  children,
  title,
  paragraph,
  image = heroImage,
  onClick = () => {},
}) => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-cover bg-top bg-no-repeat pt-[150px] pb-24"
      style={{ backgroundImage: "url(/common-bg.jpg)" }}
    >
      <div
        className="absolute left-0 top-0 -z-10 h-full w-full"
        style={{
          background:
            "linear-gradient(180deg,rgba(20, 20, 32, 0.65) 0%,#141420 100%)",
        }}
      ></div>
      {/* HERE WHERE WE NEED TO CHAIN SOME BITS */}
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h1 className="mb-4 text-[40px] font-bold leading-tight text-white md:text-[50px] lg:text-[40px] xl:text-[46px] 2xl:text-[50px] sm:text-[46px]">
                {title}
              </h1>
              <p className="mb-8 text-lg font-medium leading-relaxed text-body-color md:pr-14">
                {paragraph}
              </p>
              <div className="flex flex-wrap items-center">
                <button
                  className="mr-5 mb-5 inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary py-3 px-7 text-base font-semibold text-white transition-all hover:bg-opacity-90"
                  onClick={onClick}
                >
                  Start now
                </button>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="text-center">
              <Image
                src={image}
                alt="Hero image"
                width="493px"
                height="493px"
              />
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Hero;
