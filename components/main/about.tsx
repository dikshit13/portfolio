"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { SOFT_SKILLS } from "@/constants";
import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 md:px-10 lg:px-10"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          About Me
        </h1>
      </motion.div>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        {/* About Content */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-6 flex-1 w-full order-2 md:order-1"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white">
            Dikshit Kamboj
          </h2>
          
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            I&apos;m a Computer Science student at Lovely Professional University, 
            passionate about full-stack development and problem-solving. With a strong 
            foundation in the MERN stack and competitive programming, I love building 
            scalable and efficient applications.
          </p>

          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400">
                🎓 Education
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                B.Tech in Computer Science
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                Lovely Professional University (2023–Present) | CGPA: 7.11
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400">
                🏆 Achievements
              </h3>
              <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
                <li>✓ Solved 250+ DSA problems across LeetCode, GeeksforGeeks, HackerRank</li>
                <li>✓ 4⭐ in C++ and Python on HackerRank</li>
                <li>✓ 5th position in Hackaverse-LPU hackathon</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400">
                🎯 Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#7042f88b]/30 text-gray-300 rounded-full text-xs sm:text-sm border border-[#7042f88b]/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400">
                📧 Contact
              </h3>
              <p className="text-sm sm:text-base text-gray-300">Email: dixitkamboj7@gmail.com</p>
              <p className="text-sm sm:text-base text-gray-300">GitHub: github.com/dikshit13</p>
              <p className="text-sm sm:text-base text-gray-300">LinkedIn: linkedin.com/in/dikshit1</p>
            </div>
          </div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          variants={slideInFromRight(0.3)}
          initial="hidden"
          whileInView="visible"
          className="flex-1 flex flex-col gap-8 items-center group"
        >
          {/* Profile Image Container with Enhanced Theming & Animation */}
          <motion.div 
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 cursor-pointer\"
            whileHover="hover"
            initial="initial"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Outer Glow - Cyan - Enhanced on hover */}
            <motion.div 
              className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            
            {/* Secondary Glow Ring - Enhanced on hover */}
            <motion.div 
              className="absolute -inset-1 border border-[#7042f88b]/80 rounded-3xl opacity-50 shadow-[0_0_20px_rgba(112,66,248,0.3)] group-hover:shadow-[0_0_40px_rgba(112,66,248,0.6)] transition-shadow duration-300"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.03 }
              }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            
            {/* Main Image Container */}
            <motion.div 
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-[#7042f88b]/60 w-full h-full flex items-center justify-center shadow-lg shadow-purple-900/40 group-hover:shadow-purple-500/50 transition-all duration-300"
              variants={{
                initial: { rotateZ: 0 },
                hover: { rotateZ: 3 }
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Inner subtle accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/5 to-cyan-500/5 pointer-events-none"></div>
              
              {/* Image with Hover Scale */}
              <motion.div
                className="relative w-full h-full"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.08 }
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/profile/profile.png"
                  alt="Dikshit Kamboj"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover relative z-10"
                  priority
                />
              </motion.div>
              
              {/* Overlay shine effect - Enhanced on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Below Photo */}
          <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-xl p-8 border border-[#7042f88b]/50 w-full">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  250+
                </h3>
                <p className="text-gray-400 mt-2">DSA Problems</p>
              </div>

              <div className="h-px bg-[#7042f88b]/30"></div>

              <div className="text-center">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  6+
                </h3>
                <p className="text-gray-400 mt-2">Projects</p>
              </div>

              <div className="h-px bg-[#7042f88b]/30"></div>

              <div className="text-center">
                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  4⭐
                </h3>
                <p className="text-gray-400 mt-2">HackerRank</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
