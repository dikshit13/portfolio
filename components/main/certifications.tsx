"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SparklesIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import { CERTIFICATIONS } from "@/constants";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-10 relative overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 mb-16 max-w-3xl text-center"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-cyan-600/10 border border-[#7042f88b]/30">
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <span className="text-sm font-semibold text-purple-300">Credentials</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Certifications & Courses
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed">
          Professional certifications and specialized training from leading institutions demonstrating continuous learning and expertise.
        </p>
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group h-full"
          >
            <div className="relative h-full bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-2xl p-6 border border-[#7042f88b]/30 hover:border-[#7042f88b]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(112,66,248,0.2)]">
              {/* Top Section with Logo and Link Icon */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="p-2 rounded-lg bg-gradient-to-r from-purple-600/30 to-cyan-600/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Image
                      src={`/certifications/${cert.logo}`}
                      alt={`${cert.issuer} logo`}
                      width={40}
                      height={40}
                      className="rounded object-contain"
                    />
                  </motion.div>
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                    {cert.date}
                  </span>
                </div>
                {/* Certificate Link Icon */}
                <div className="relative group/icon">
                  <motion.a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 flex items-center justify-center transition-all duration-300 flex-shrink-0"
                    whileHover={{ scale: 1.15, y: -2 }}
                  >
                    <RxArrowTopRight className="w-5 h-5 text-blue-400" />
                  </motion.a>
                  {/* Tooltip */}
                  <div className="absolute -bottom-10 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    View Certificate
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-purple-300 text-sm font-semibold mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 -left-40 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-32 -right-40 w-80 h-80 bg-cyan-600/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};
