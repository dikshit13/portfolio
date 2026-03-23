"use client";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

import {
  BACKEND_SKILL,
  DATABASES_SKILL,
  FRONTEND_SKILL,
  SKILL_DATA,
  TOOLS_SKILL,
} from "@/constants";

type SkillItem = {
  readonly skill_name: string;
  readonly image: string;
  readonly width: number;
  readonly height: number;
};

const SkillCategory = ({
  title,
  icon,
  skills,
  delay,
}: {
  title: string;
  icon: string;
  skills: readonly SkillItem[];
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full mb-16"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-[#7042f88b]/50">
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{skills.length} Skills</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="skills"
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
          <span className="text-sm font-semibold text-purple-300">Technical Expertise</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Skills & Technologies
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed">
          A comprehensive toolkit of programming languages, frameworks, and tools that empower me to build robust, scalable, and innovative solutions.
        </p>
      </motion.div>

      {/* Skills Grid Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        {/* Programming Languages */}
        <SkillCategory
          title="Programming Languages"
          icon="⚡"
          skills={SKILL_DATA}
          delay={0}
        />

        {/* Frontend Development */}
        <SkillCategory
          title="Frontend Development"
          icon="🎨"
          skills={FRONTEND_SKILL}
          delay={0.2}
        />

        {/* Backend Development */}
        <SkillCategory
          title="Backend Development"
          icon="⚙️"
          skills={BACKEND_SKILL}
          delay={0.4}
        />

        {/* Databases */}
        <SkillCategory
          title="Databases"
          icon="🗄️"
          skills={DATABASES_SKILL}
          delay={0.6}
        />

        {/* Tools */}
        <SkillCategory
          title="Tools"
          icon="🛠️"
          skills={TOOLS_SKILL}
          delay={0.8}
        />
      </motion.div>

      {/* Background Video */}
      <div className="w-full h-full absolute top-0 left-0 -z-10">
        <div className="w-full h-full z-[-10] opacity-20 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-cyan-600/10 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};
