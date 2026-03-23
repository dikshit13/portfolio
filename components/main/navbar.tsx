'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-2 sm:px-4">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex md:font-bold ml-[10px] text-gray-300">Dikshit Kamboj</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden lg:flex h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-[40px] py-[12px] rounded-full text-gray-200 gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-sm whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons & Resume Button (Web) */}
        <div className="hidden lg:flex flex-row gap-5 items-center">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition" />
            </Link>
          ))}
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-4 border border-[#7042f88b] text-white cursor-pointer rounded-lg hover:bg-[#7042f88b] hover:bg-opacity-10 transition text-sm"
          >
            Resume
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer"
              className="py-2 px-4 border border-[#7042f88b] text-white cursor-pointer rounded-lg hover:bg-[#7042f88b] hover:bg-opacity-10 transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white hover:text-[rgb(112,66,248)] transition" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};