// Navbar.jsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import InputSearch from "./InputSearch";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../assets/logoTokoKami.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    updateLoginStatus();
    router.push("/login");
  };

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", "exampleUsername");
    updateLoginStatus();
    router.push("/");
  };

  const updateLoginStatus = () => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const storedUser = localStorage.getItem("currentUser");

    setLoggedIn(isLoggedIn);
    setCurrentUser(storedUser);
  };

  useEffect(() => {
    updateLoginStatus();

    const cleanup = () => {
      router?.events?.off?.("routeChangeComplete", updateLoginStatus);
    };

    router?.events?.on?.("routeChangeComplete", updateLoginStatus);

    return cleanup;
  }, [router]);

  return (
    <div>
      <header
        className="bg-gray-100 w-full h-auto p-4 flex justify-between items-center relative"
        style={{ zIndex: 1000 }}>
        <div className="flex items-center lg:justify-between ">
          <Link href="/" className="">
            <Image src={Logo} className="object-contain w-24 mr-5 sm:w-32" />
          </Link>

          <InputSearch className="" />

          {!loggedIn && (
            <Link
              className={`bg-white p-2 rounded-md text-center transition-all hover:scale-110 hidden sm:flex  ml-96
            `}
              href="/login">
              Login
            </Link>
          )}
        </div>

        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="text-black hover:text-white focus:text-white focus:outline-none absolute right-3 top-6">
            <svg className="h-6 w-6 fill-current " viewBox="0 0 24 24">
              {isOpen ? (
                <path d="M19 13H5v-2h14v2z" />
              ) : (
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              )}
            </svg>
          </button>
        </div>

        {loggedIn && (
          <div
            className={`md:flex md:flex-row gap-6 items-center text-sm ml-auto ${
              isOpen ? "hidden" : "hidden"
            }`}>
            <Link
              className="hover:text-blue-400 hover:underline transition-all"
              href="/">
              Home
            </Link>
            <Link
              className="hover:text-blue-400 hover:underline transition-all"
              href="/about">
              About Us
            </Link>
            <Link
              className="hover:text-blue-400 hover:underline transition-all"
              href="/contact">
              Contact
            </Link>
            <Link
              className="hover:text-blue-400 hover:underline transition-all"
              href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </Link>

            <div className="flex items-center relative group">
              <div className="flex items-center text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="profile-icon w-10 h-10 mr-2 transition-transform transform scale-50 hover:scale-90">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span className="mr-4 text-sm truncate">{currentUser}</span>
              </div>
              <div
                onClick={handleLogout}
                className="cursor-pointer underline text-sm  p-1 rounded-md hover:scale-110 transition-all">
                Logout
              </div>
            </div>
          </div>
        )}

        {/* Modal/Overlay for Hamburger Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end md:hidden">
            <div className=" backdrop-blur w-full h-full flex justify-start">
              <div className="p-4 flex flex-col h-screen justify-between">
                <div>
                  <div className="cursor-pointer mb-4 " onClick={toggleMenu}>
                    <svg
                      className="h-6 w-6 fill-current text-white bg-red-500 "
                      viewBox="0 0 24 24">
                      <path d="M19 13H5v-2h14v2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center gap-5 ">
                    <Link
                      className="text-white border-2 rounded-lg w-72 text-center p-3"
                      href="/">
                      Home
                    </Link>
                    <Link
                      className="text-white border-2 rounded-lg w-full text-center p-3"
                      href="/about">
                      About Us
                    </Link>
                    <Link
                      className="text-white border-2 rounded-lg w-full text-center p-3"
                      href="/contact">
                      Contact
                    </Link>
                    <Link
                      className="text-white border-2 rounded-lg w-full text-center p-3"
                      href="/cart">
                      <div className="w-6 h-6 mx-auto ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 ">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </div>
                    </Link>
                    {!loggedIn && (
                      <Link
                        className={`bg-white p-2 rounded-md items-center text-center flex transition-all hover:scale-110`}
                        href="/login">
                        Login
                      </Link>
                    )}
                  </div>
                </div>
                {loggedIn && (
                  <div className="mt-4">
                    <div className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="profile-icon w-6 h-6 mr-2 text-white">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      <span className="text-xl text-white ">{currentUser}</span>
                    </div>
                    <div
                      className="cursor-pointer underline bg-gray-200 mt-3 p-2 text-red-600 rounded-md hover:scale-110 transition-all"
                      onClick={handleLogout}>
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
