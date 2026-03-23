"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
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
          <span className="text-sm font-semibold text-purple-300">Portfolio</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Featured Projects
        </h2>

        <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
          Showcasing innovative full-stack applications and systems that demonstrate technical expertise and problem-solving abilities.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              sourceCode={project.sourceCode}
              liveDemo={project.liveDemo}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
        
        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: PROJECTS.length * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[#7042f88b]/30 hover:border-[#7042f88b]/60 group h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,66,248,0.3)] bg-gradient-to-br from-purple-600/10 to-cyan-600/10 backdrop-blur-sm border-t border-[#7042f88b]/10">
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-bold text-gray-400 mb-3">Coming Soon</h3>
              <p className="text-gray-500 text-lg">More exciting projects are on the way!</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 -left-40 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-32 -right-40 w-80 h-80 bg-cyan-600/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};
