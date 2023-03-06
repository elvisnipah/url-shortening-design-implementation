import React from "react";

import LogoSVG from "../assets/Logo";
import menuIcon from "../assets/icon-menu.svg";

function Header(props) {
  return (
    <header className="p-4 flex justify-between w-full max-w-[1440px] lg:p-8">
      <section className="flex items-center gap-6">
        <LogoSVG color="#34313D" />
        <ul className="lg:flex gap-4 text-gray-400 hidden font-bold">
          <li>
            <a href="#" className="hover:text-black">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Resources
            </a>
          </li>
        </ul>
      </section>
      <section className="hidden lg:flex gap-4 items-center font-bold text-gray-400">
        <a href="#" className="hover:text-black">
          Login
        </a>
        <button className="bg-[hsl(180,66%,49%)] px-5 py-1 rounded-3xl text-white hover:opacity-50">
          Sign Up
        </button>
      </section>
      <button onClick={props.toggleMenu} className="lg:hidden">
        <img src={menuIcon} alt="Hamburger icon" className="w-5" />
      </button>
    </header>
  );
}

export default Header;
