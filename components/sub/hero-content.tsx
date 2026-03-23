"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-20 mt-20 sm:mt-28 md:mt-40 w-full z-[20] gap-8 md:gap-0"
    >
      <div className="h-full w-full md:flex-1 flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer | MERN Stack | DSA Enthusiast
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Crafting scalable solutions with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              modern technologies
            </span>
            .
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Computer Science student at Lovely Professional University,
          passionate about full-stack development and solving complex problems.
          With 250+ DSA problems solved and a strong MERN stack foundation, I
          build efficient and scalable web applications.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
        >
          <a
            href="#projects"
            className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg text-sm sm:text-base w-full sm:w-auto"
          >
            View Projects
          </a>
          <div className="flex items-center border border-[#7042f88b] rounded-lg overflow-hidden w-full sm:w-auto">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="py-2 px-4 text-white cursor-pointer hover:bg-[#7042f88b] hover:bg-opacity-20 transition text-sm flex-1 sm:flex-none"
            >
              Download CV
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="py-2 px-3 text-white hover:bg-[#7042f88b] hover:bg-opacity-20 transition border-l border-[#7042f88b]/30"
              title="View Resume"
            >
              <AiOutlineEye className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-auto h-auto flex justify-center items-center md:flex-1"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-full max-w-xs md:max-w-md lg:max-w-none"
        />
      </motion.div>
    </motion.div>
  );
};
