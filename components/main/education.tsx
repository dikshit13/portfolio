"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SparklesIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { EDUCATION } from "@/constants";

const educationIcons = ["🎓", "📚", "🏫"];

export const Education = () => {
  return (
    <section
      id="education"
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
          <span className="text-sm font-semibold text-purple-300">Education</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Educational Background
        </h2>

        <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
          Academic journey demonstrating consistent excellence and commitment to learning across multiple educational levels.
        </p>
      </motion.div>

      <div className="w-full max-w-4xl space-y-8">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={`${edu.degree}-${edu.school}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            className="group relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-6 top-6 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 border-4 border-[#030014] flex items-center justify-center">
              <span className="text-lg">{educationIcons[index] || "📖"}</span>
            </div>

            {/* Timeline line */}
            {index < EDUCATION.length - 1 && (
              <div className="absolute -left-1 top-16 w-0.5 h-32 bg-gradient-to-b from-purple-600 to-cyan-600 opacity-30"></div>
            )}

            {/* Card */}
            <div className="ml-8 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-2xl p-4 sm:p-6 md:p-8 border border-[#7042f88b]/30 hover:border-[#7042f88b]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(112,66,248,0.2)]">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6">
                {/* Left side - Education Details */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <AcademicCapIcon className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-cyan-400 text-lg font-semibold mt-1">
                        {edu.school}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm ml-9">{edu.duration}</p>
                </div>

                {/* Right side - Performance Metrics */}
                <motion.div
                  className="px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-[#7042f88b]/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                      Performance
                    </p>
                    {("cgpa" in edu) && (
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        {(edu as typeof edu & { cgpa: string }).cgpa}
                      </div>
                    )}
                    {("percentage" in edu) && (
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        {(edu as typeof edu & { percentage: string }).percentage}
                      </div>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      {"cgpa" in edu ? "CGPA" : "Percentage"}
                    </p>
                  </div>
                </motion.div>
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
