import React, { useState } from "react";

function Url({ link }) {
  const [copyClicked, setCopyClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(link.link);

    setCopyClicked(true);

    setTimeout(() => {
      setCopyClicked(false);
    }, 3000);
  };

  return (
    <div
      className="w-full flex flex-col bg-white p-4 rounded-lg gap-2"
      key={link.code}
    >
      <p>{link.originalLink}</p>
      <hr className="w-full" />
      <a
        href={link.link}
        target="_blank"
        className="text-[hsl(180,66%,49%)] hover:underline"
      >
        {link.link}
      </a>
      <button
        className={`font-bold rounded-lg w-full py-2 hover:opacity-50  text-white self-center ${
          copyClicked ? "bg-[hsl(257,26%,26%)]" : "bg-[hsl(180,66%,49%)]"
        }`}
        onClick={handleClick}
      >
        {copyClicked ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default Url;
