"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

interface NavbarProps {
  variant?: "light" | "dark";
}

export const Navbar = ({ variant = "dark" }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLight = variant === "light";

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] px-5 py-5 sm:px-6 lg:px-[5vw] md:py-6 lg:py-[2vw]" id="navbar">
      <div className="flex items-center justify-between mx-auto">
        {/* Logo */}
        <a href="/" className="relative z-10 flex items-center" id="navbar-logo">
          <Image
            src={isLight ? "/images/dark-logo.png" : "/images/logo.png"}
            alt="Moatt"
            width={120}
            height={40}
            priority
            className="h-8 md:h-[38px] lg:h-[3vw] w-auto"
          />
        </a>

        {/* Desktop Actions */}
        <div
          className={`hidden md:flex items-center gap-2 lg:gap-[0.5vw] rounded-full border ${
            isLight ? "border-black/[0.1] bg-white/10" : "border-white/[0.08] bg-[#1a1a1a]"
          } pl-7 pr-2 py-2 lg:pl-[2vw] lg:pr-[0.5vw] lg:py-[0.5vw] backdrop-blur-md`}
          id="navbar-actions-desktop"
        >
          <a
            href="/login"
            className={`font-[var(--font-heading)] font-semibold text-sm lg:text-[1vw] ${
              isLight ? "text-black" : "text-white"
            } px-4 py-2 lg:px-[1.5vw] lg:py-[0.8vw] transition-opacity duration-200 hover:opacity-80`}
            id="navbar-login"
          >
            Log In
          </a>
          <a
            href="/register"
            className="font-[var(--font-heading)] font-bold text-sm lg:text-[1vw] text-white bg-[#e8961e] rounded-full px-7 py-3 lg:px-[2.4vw] lg:py-[1vw] transition-all duration-250 hover:bg-[#d4870f] hover:-translate-y-0.5"
            id="navbar-start-designing"
          >
            Start Designing
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`flex md:hidden items-center justify-center relative z-10 p-2 ${
            isLight ? "text-black" : "text-white"
          }`}
          id="navbar-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <HiOutlineMenuAlt3 className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-black/60 backdrop-blur-lg transition-all duration-350 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        id="navbar-mobile-overlay"
      >
        <div
          className={`absolute top-0 right-0 w-[280px] h-full ${
            isLight ? "bg-white" : "bg-[#1a1a1a]"
          } p-6 flex flex-col transition-transform duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className={`self-end p-2 ${isLight ? "text-black" : "text-white"} transition-opacity duration-200 hover:opacity-70`}
            id="navbar-mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <IoCloseOutline className="w-7 h-7" />
          </button>

          <div className="flex flex-col items-center gap-5 mt-10">
            <a
              href="/login"
              className={`font-[var(--font-heading)] font-bold text-base ${
                isLight ? "text-black" : "text-white"
              } px-4 py-2 transition-opacity duration-200 hover:opacity-80`}
              id="navbar-mobile-login"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </a>
            <a
              href="/register"
              className="font-[var(--font-heading)] font-bold text-base text-white bg-[#e8961e] rounded-full px-10 py-3.5 transition-colors duration-250 hover:bg-[#d4870f] text-center"
              id="navbar-mobile-start-designing"
              onClick={() => setMenuOpen(false)}
            >
              Start Designing
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
