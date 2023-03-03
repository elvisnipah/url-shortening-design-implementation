import React from "react";

import shortenBgMobile from "../assets/bg-shorten-mobile.svg";
import boostBgMobile from "../assets/bg-boost-mobile.svg";
import recognitionIcon from "../assets/icon-brand-recognition.svg";
import detailedIcon from "../assets/icon-detailed-records.svg";
import customizeIcon from "../assets/icon-fully-customizable.svg";

function MainSection() {
  return (
    <section className="bg-gray-200 flex flex-col items-center">
      <div
        className="p-4 flex flex-col gap-4 items-center w-[90%] bg-[hsl(257,26%,26%)] rounded-lg mt-[-70px]"
        style={{
          backgroundImage: `url(${shortenBgMobile})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "50px",
          backgroundPositionY: "150%",
        }}
      >
        <input
          type="text"
          className="w-[90%] max-w-[400px] rounded p-2 px-4"
          placeholder="Shorten a link here..."
        />
        <button className="bg-[hsl(180,66%,49%)] text-white text-lg font-bold px-9 py-2 rounded w-[90%] max-w-[400px]">
          Shorten It!
        </button>
      </div>

      <h3 className="pt-16 font-bold text-2xl mb-5">Advanced Statistics</h3>
      <p className="text-center px-8 text-gray-400">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <section className="flex flex-col mt-16 items-center gap-20 relative">
        <div className="bg-[hsl(180,66%,49%)] w-2 h-full absolute z-10"></div>
        <article className="bg-white flex flex-col items-center w-[90%] rounded-lg z-20">
          <div className="bg-[hsl(257,26%,26%)] p-4 rounded-full max-w-[70px] mt-[-30px]">
            <img src={recognitionIcon} alt="" />
          </div>
          <h3 className="font-bold text-xl pt-5 pb-3">Brand Recognition</h3>
          <p className="text-center text-sm text-gray-400 px-10 pb-8">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </article>
        <article className="bg-white flex flex-col items-center w-[90%] rounded-lg z-20">
          <div className="bg-[hsl(257,26%,26%)] p-4 rounded-full max-w-[70px] mt-[-30px]">
            <img src={detailedIcon} alt="" />
          </div>
          <h3 className="font-bold text-xl pt-5 pb-3">Detailed Records</h3>
          <p className="text-center text-sm text-gray-400 px-10 pb-8">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </article>
        <article className="bg-white flex flex-col items-center w-[90%] rounded-lg z-20">
          <div className="bg-[hsl(257,26%,26%)] p-4 rounded-full max-w-[70px] mt-[-30px]">
            <img src={customizeIcon} alt="" />
          </div>
          <h3 className="font-bold text-xl pt-5 pb-3">Fully Customizable</h3>
          <p className="text-center text-sm text-gray-400 px-10 pb-8">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </article>
      </section>

      <section
        className="mt-16 w-full py-16 flex flex-col gap-3 items-center bg-[hsl(257,26%,26%)]"
        style={{
          backgroundImage: `url(${boostBgMobile})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundPositionX: "50px",
          // backgroundPositionY: "150%",
        }}
      >
        <p className="font-bold text-xl text-white">Boost your links today</p>
        <button className="text-white font-bold bg-[hsl(180,66%,49%)] px-6 py-3 rounded-3xl">
          Get Started
        </button>
      </section>
    </section>
  );
}

export default MainSection;
