"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import Menu from "./Menu";

const NavLinks = [
  {
    title: "About",
    path: "#about",
	
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-100 border border-[#33353F]">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <Link href={"/"}>
          <img src="/images/logo.png" alt="Logo" className="h-12 w-12" />
        </Link>
				<div className="flex justify-end ml-auto">
          <a href="/images/assests/cv/Professional-Resume.pdf" download>
        <button className="text-white">
            <span className="block bg-black  hover:bg-pink-800 rounded-full px-6 py-2 mr-4">
              Download CV
            </span>
        </button>
          </a>
					</div>
        <div className="mobile-menu block md:hidden">
          {!navbar ? (
            <button onClick={() => setNavbar(true)}>
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <>
              <button
                onClick={() => setNavbar(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 flex-row md:space-x-8 mt-0">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbar ? <Menu links={NavLinks} /> : null}
    </nav>
  );
};

export default Navbar;
