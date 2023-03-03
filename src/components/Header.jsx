import React from "react";

import logo from "../assets/logo.svg";
import menuIcon from "../assets/icon-menu.svg";

function Header() {
  return (
    <header className="p-4 flex justify-between">
      <img src={logo} alt="Logo" />
      <button className="">
        <img src={menuIcon} alt="Hamburger icon" className="w-5" />
      </button>
    </header>
  );
}

export default Header;
