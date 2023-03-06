import React from "react";

import LogoSVG from "../assets/Logo";
import instagramIcon from "../assets/icon-instagram.svg";
import FacebookIcon from "../assets/FacebookIcon";
import TwitterIcon from "../assets/TwitterIcon";
import PinterestIcon from "../assets/PinterestIcon";
import InstagramIcon from "../assets/InstagramIcon";

function Footer() {
  return (
    <footer className="bg-[hsl(260,8%,14%)] w-full flex flex-col items-center">
      <div className="w-full max-w-[1440px] text-gray-400 flex flex-col items-center p-10 text-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        {<LogoSVG color="white" />}
        <section className="flex flex-col gap-2 lg:items-start">
          <h3 className="font-bold text-white">Features</h3>
          <a href="#" className="hover:text-[hsl(180,66%,49%)]">
            Link Shortening
          </a>
          <a href="#" className="hover:text-[hsl(180,66%,49%)]">
            Branded Links
          </a>
          <a href="#" className="hover:text-[hsl(180,66%,49%)]">
            Analytics
          </a>
        </section>
        <section className="flex flex-col gap-2 lg:items-start">
          <h3 className="font-bold text-white">Resources</h3>
          <a href="#" className="hover:text-[hsl(180,66%,49%)]">
            Blog
          </a>
          <a href="#" className="hover:text-[hsl(180,66%,49%)]">
            Developers
          </a>
          <a href="#" className="hover:text-[hsl(180,66%,49%)]">
            Support
          </a>
        </section>
        <section className="flex flex-col gap-2 lg:items-start">
          <h3 className="font-bold text-white">Company</h3>
          <a href="#" className="hover:text-[hsl(180,66%,49%)]">
            About
          </a>
          <a href="#" className="hover:text-[hsl(180,66%,49%)]">
            Our Team
          </a>
          <a href="#" className="hover:text-[hsl(180,66%,49%)]">
            Careers
          </a>
          <a href="#" className="hover:text-[hsl(180,66%,49%)]">
            Contact
          </a>
        </section>
        <section className="flex gap-6 text-white">
          <button className="hover:text-[hsl(180,66%,49%)]">
            <FacebookIcon />
          </button>
          <button className="hover:text-[hsl(180,66%,49%)]">
            <TwitterIcon />{" "}
          </button>
          <button className="hover:text-[hsl(180,66%,49%)]">
            <PinterestIcon />{" "}
          </button>
          <button className="hover:text-[hsl(180,66%,49%)]">
            <InstagramIcon />{" "}
          </button>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
