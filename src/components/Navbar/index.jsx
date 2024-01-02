"use client";
import Link from "next/link";
import InputSearch from "./InputSearch";
import { useState, useEffect } from "react";
import Cart from "../../assets/cart.png";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setIsOpen(false); // Close sidebar on resize
      } else {
        setIsMobile(false);
        setIsOpen(false); // Close sidebar on reaching desktop size
      }
    };

    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <header className="bg-blue-300 w-full h-auto p-4 flex justify-between items-center lg:flex-row flex-col relative">
        <Link href="/" className="text-3xl text-center mb-5 items-center ">
          Toko<span className="text-white ">Kami</span>
        </Link>

        {!isMobile && ( // Display links only if it's not a mobile view
          <div className="hidden lg:flex lg:flex-row gap-24">
            <Link href="/">Home</Link>
            <Link href="/all">All Product</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/cart" className="w-10 h-10"></Link>
          </div>
        )}

        {isMobile && ( // Display hamburger menu only on mobile view
          <div className="lg:hidden absolute top-4 right-4">
            <button
              onClick={toggleMenu}
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path d="M19 13H5v-2h14v2z" />
                ) : (
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                )}
              </svg>
            </button>
          </div>
        )}

        <div
          className={`lg:hidden fixed top-0 right-0 h-full bg-blue-300 transition-all duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col justify-center items-center w-4/5 max-w-xs z-10`}>
          <Link href="/">Home</Link>
          <Link href="/all">All Product</Link>
          <Link href="/contact">Contact</Link>
          <button
            onClick={closeMenu}
            className="mt-4 px-3 py-2 bg-white text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
            Back
          </button>
        </div>

        <InputSearch />
        <p></p>
      </header>
    </div>
  );
};

export default Navbar;
