import React from "react";
import { useState } from "react";

import shortenBgMobile from "../../assets/bg-shorten-mobile.svg";
import shortenBgDesktop from "../../assets/bg-shorten-desktop.svg";

import Url from "./Url";

function URLSection(props) {
  const [enteredURL, setEnteredURL] = useState("");

  const [error, setError] = useState("");

  const [links, setLinks] = useState([]);

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setEnteredURL(url.trim());
    checkError();
  };

  const checkError = () => {
    if (enteredURL.length === 0) {
      setError("Please add a link");
      return true;
    } else {
      setError("");
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkError()) {
      return;
    }

    try {
      const response = await fetch(
        "https://api.shrtco.de/v2/shorten?url=" + enteredURL
      );

      const data = await response.json();

      const link = {
        code: data.result.code,
        originalLink: data.result.original_link,
        link: data.result.full_short_link,
      };

      setLinks((prevLinks) => {
        return [...prevLinks, link];
      });

      setEnteredURL("");
    } catch (error) {
      console.log(error);
    }
  };

  const displayLinks = links.map((link) => {
    return <Url link={link} key={link.code} />;
  });

  return (
    <section className="w-[90%] mt-[-70px] z-20 flex flex-col gap-6 lg:mt-[-60px]">
      <form
        onSubmit={handleSubmit}
        className="p-4 flex flex-col gap-4 items-center bg-[hsl(257,26%,26%)] rounded-lg lg:flex-row lg:p-8"
        style={{
          backgroundImage: `url(${
            props.windowSize < 1024 ? shortenBgMobile : shortenBgDesktop
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: `${props.windowSize < 1024 ? "50px" : "0px"}`,
          backgroundPositionY: `${props.windowSize < 1024 ? "150%" : "0px"}`,
        }}
      >
        <section className="w-[90%] max-w-[400px] lg:max-w-none">
          <input
            type="text"
            className={`w-full rounded p-2 px-4 border-2 ${
              error
                ? "border-red-400 placeholder:text-red-400 placeholder:opacity-50"
                : "border-[rgba(0,0,0,0)]"
            } `}
            placeholder="Shorten a link here..."
            onChange={handleUrlChange}
            onBlur={handleUrlChange}
            value={enteredURL}
            // required={true}
          />
          {error && <p className="text-red-400 text-xs pt-1 italic">{error}</p>}
        </section>
        <div className="bg-white w-[90%] max-w-[400px] lg:w-[200px] rounded-xl">
          <button className="bg-[hsl(180,66%,49%)] text-white text-lg rounded-xl font-bold w-full py-2 hover:opacity-50">
            Shorten It!
          </button>
        </div>
      </form>
      {links && displayLinks}
    </section>
  );
}

export default URLSection;
