import React from "react";

import LogoSVG from "../assets/Logo";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";
import instagramIcon from "../assets/icon-instagram.svg";

function Footer() {
  return (
    <footer className="bg-[hsl(260,8%,14%)] text-gray-400 flex flex-col items-center p-10 text-center gap-8">
      {<LogoSVG color="white" />}
      <section className="flex flex-col gap-2">
        <h3 className="font-bold text-white">Features</h3>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </section>
      <section className="flex flex-col gap-2">
        <h3 className="font-bold text-white">Resources</h3>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
      </section>
      <section className="flex flex-col gap-2">
        <h3 className="font-bold text-white">Company</h3>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
      </section>
      <section className="flex gap-6">
        <img src={facebookIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={pinterestIcon} alt="" />
        <img src={instagramIcon} alt="" />
      </section>
    </footer>
  );
}

export default Footer;
