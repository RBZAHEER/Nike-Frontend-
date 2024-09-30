import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between px-12 mt-8 items-center">
        <img
          src="/images/brand_logo.png"
          alt="nike logo"
          className="h-10 w-30"
        />
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-10 font-hero_heading font-bold text-xl">
          <a href="/menu">Menu</a>
          <a href="/location">Location</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <button className="md:bg-red-600 px-8 py-1 rounded-lg text-white">
          Login
        </button>
        {/* Hamburger menu icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
      {/* Responsive navigation */}
      {isOpen && (
        <div className="bg-white md:hidden">
          <ul className="flex flex-col items-center justify-center space-y-5 text-xl font-semibold">
            <a href="/menu">Menu</a>
            <a href="/location">Location</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navigation;
