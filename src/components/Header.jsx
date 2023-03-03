import React from "react";

import LogoSVG from "../assets/Logo";
import menuIcon from "../assets/icon-menu.svg";

function Header() {
  return (
    <header className="p-4 flex justify-between">
      <LogoSVG color="#34313D" />
      <button className="">
        <img src={menuIcon} alt="Hamburger icon" className="w-5" />
      </button>
    </header>
  );
}

export default Header;
