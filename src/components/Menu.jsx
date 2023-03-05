import React from "react";

function Menu() {
  return (
    <section className="absolute top-0 left-0 right-0 m-auto bg-[hsl(257,26%,26%)] w-[90%] flex flex-col items-center gap-5 p-8 text-white font-bold rounded-xl">
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Resources</a>
      <hr className="w-full my-4 border-gray-400 opacity-10 border-[1px]" />
      <a href="#">Login</a>
      <button className="bg-[hsl(180,66%,49%)] px-5 py-3 w-full rounded-3xl">
        Sign Up
      </button>
    </section>
  );
}

export default Menu;
