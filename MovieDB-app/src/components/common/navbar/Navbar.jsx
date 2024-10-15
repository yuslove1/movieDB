import React from "react";
import Logo from "../logo";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Layout from "../Layout";

const navLinks = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Popular",
    link: "/popular",
  
  },
  {
    text: "About-Us",
    link: "/",
  },
];
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    // setOpen((open) => !open);
    setMenuOpen(!isMenuOpen);
  }
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <Layout>
    <div className="bg-transparent  z-10 lg:max-[80%] mx-auto w-full">
      <div className="sm:px-0 flex lg:max-w-[80%] justify-between mx-auto items-center px-5 rounded-bl-md rounded-br-lg z-40 h-14"
      style={{ backdropFilter: "blur(5px)" }}
      >
        <Logo />
        <div className="hidden sm:block my-auto">
          <div className="flex items-center font-roboto font-bold gap-2">
            {navLinks.map((link, index) => (
              <a key={index} href={link.link} className={`hover:text-mutedred transition-all hover:border-b-4 border-myred hover:text-lg bg-darkcyan rounded-full p-2 text-white shadow-5xl shadow-slate-900`}>
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <div className="flex sm:hidden">
          <button onClick={handleMenu}>
            {/* for screen reader only */}
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* mobile view */}
        </div>
      </div>
      <MobileNav navLinks={navLinks} isOpen={isMenuOpen} closeMenu={closeMenu}/>
    </div>
    </Layout>
  );
}

export default Navbar;
