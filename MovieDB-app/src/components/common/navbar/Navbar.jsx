import React from "react";
import Logo from "../logo";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import MobileNav from "./MobileNav";

const navLinks = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Trending",
    link: "/",
  },
  {
    text: "Explore",
    link: "/",
  },
];
function Navbar() {
  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen((open) => !open);
  }

  return (
    <div className="bg-transparent">
      <div className="sm:px-4 flex lg:max-w-[80%] justify-between mx-auto ">
        <Logo />
        <div className="hidden sm:block my-auto">
          <div className="flex items-center gap-4 font-roboto font-bold">
            {navLinks.map((link, index) => (
              <a key={index} href={link.link}>
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <div className="flex sm:hidden">
          <button onClick={handleMenu}>
            {/* for screen reader only */}
            <span className="sr-only">Open main menu</span>
            {open ? <FaTimes /> : <FaBars />}
          </button>
          {/* mobile view */}
        </div>
      </div>
      <MobileNav navLinks={navLinks} open={open}/>
    </div>
  );
}

export default Navbar;
