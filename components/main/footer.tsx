"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { motion } from "framer-motion";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-3 sm:p-4 md:p-[15px] relative">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col sm:flex-row items-center justify-around flex-wrap gap-6 sm:gap-4">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[150px] sm:min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-sm sm:text-base">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-2 sm:my-[15px]"
                >
                  {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5" />}
                  <span className="text-xs sm:text-sm ml-2 sm:ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-4 sm:mb-[20px] text-xs sm:text-sm text-center">
          &copy; Dikshit Kamboj {new Date().getFullYear()}. All rights reserved.
        </div>

        {/* Scroll to Top Button - Only show when scrolled down */}
        {isScrolled && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(112,66,248,0.4)] z-40 border border-[#7042f88b]/50"
            title="Back to top"
          >
            <AiOutlineArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </div>
    </div>
  );
};
