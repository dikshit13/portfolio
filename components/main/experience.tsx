"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SparklesIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { EXPERIENCE } from "@/constants";
import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";

export const Experience = () => {
  return (
    <section
      id="experience"
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
          <span className="text-sm font-semibold text-purple-300">Experience</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Training & Experience
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed">
          Professional development journey showcasing hands-on experience and specialized training in modern technologies.
        </p>
      </motion.div>

      <div className="w-full max-w-4xl space-y-8">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            className="group relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-6 top-6 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 border-4 border-[#030014] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#030014]"></div>
            </div>

            {/* Timeline line */}
            {index < EXPERIENCE.length - 1 && (
              <div className="absolute -left-1 top-16 w-0.5 h-32 bg-gradient-to-b from-purple-600 to-cyan-600 opacity-30"></div>
            )}

            {/* Card */}
            <div className="ml-8 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-2xl p-8 border border-[#7042f88b]/30 hover:border-[#7042f88b]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(112,66,248,0.2)]">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <BriefcaseIcon className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {exp.logo && (
                          <Image
                            src={`/certifications/${exp.logo}`}
                            alt={`${exp.company} logo`}
                            width={24}
                            height={24}
                            className="rounded"
                          />
                        )}
                        <p className="text-cyan-400 text-lg font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <motion.div
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-[#7042f88b]/30"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-sm font-semibold text-gray-300 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </motion.div>
                  
                  {/* Certificate Link Icon */}
                  {exp.certificateLink && (
                    <div className="relative group/icon">
                      <motion.a
                        href={exp.certificateLink}
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
                  )}
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm ml-9 whitespace-pre-wrap">
                {exp.description}
              </p>

              {/* Skills Tags */}
              {exp.tags && (
                <div className="flex flex-wrap gap-2 mt-6 ml-9">
                  {exp.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-[#7042f88b]/30 text-xs font-semibold text-purple-300 hover:border-[#7042f88b]/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(112,66,248,0.2)]"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              )}

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
