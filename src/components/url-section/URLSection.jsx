import React from "react";
import { useState } from "react";

import shortenBgMobile from "../../assets/bg-shorten-mobile.svg";

import Url from "./Url";

function URLSection() {
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
    } else {
      setError("");
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
    <section className="w-[90%] mt-[-70px] z-20 flex flex-col gap-6">
      <form
        onSubmit={handleSubmit}
        className="p-4 flex flex-col gap-4 items-center bg-[hsl(257,26%,26%)] rounded-lg "
        style={{
          backgroundImage: `url(${shortenBgMobile})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "50px",
          backgroundPositionY: "150%",
        }}
      >
        <section className="w-[90%] max-w-[400px]">
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
        <button className="bg-[hsl(180,66%,49%)] text-white text-lg font-bold px-9 py-2 rounded w-[90%] max-w-[400px]">
          Shorten It!
        </button>
      </form>
      {links && displayLinks}
    </section>
  );
}

export default URLSection;
