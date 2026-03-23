"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { SparklesIcon, StarIcon } from "@heroicons/react/24/solid";
import { ACHIEVEMENTS } from "@/constants";

const achievementEmojis = ["🏆", "⭐", "🎯"];

export const Achievements = () => {
  return (
    <section
      id="achievements"
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
          <span className="text-sm font-semibold text-purple-300">Accomplishments</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Achievements & Milestones
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed">
          Recognizing key accomplishments in competitive programming, hackathons, and technical skill development.
        </p>
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group h-full"
          >
            <div className="relative h-full bg-gradient-to-br from-purple-600/15 to-cyan-600/15 rounded-2xl p-8 border border-[#7042f88b]/30 hover:border-[#7042f88b]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,66,248,0.25)] flex flex-col">
              {/* Icon Badge */}
              <motion.div
                className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-[#7042f88b]/30 mx-auto mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-4xl">{achievementEmojis[index]}</span>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {achievement.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Stats line */}
              <motion.div
                className="mt-6 pt-4 border-t border-[#7042f88b]/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-center gap-2 text-cyan-400">
                  <StarIcon className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase">Featured</span>
                  <StarIcon className="w-4 h-4" />
                </div>
              </motion.div>

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
