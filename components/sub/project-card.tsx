"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  sourceCode: string;
  liveDemo?: string;
  technologies?: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  sourceCode,
  liveDemo,
  technologies,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[#7042f88b]/30 hover:border-[#7042f88b]/60 group h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,66,248,0.3)]">
        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-purple-600/10 to-cyan-600/10">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={src}
              alt={title}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content Container */}
        <div className="relative flex-1 p-6 flex flex-col bg-gradient-to-br from-[#0a0015]/80 to-[#0a0015]/40 backdrop-blur-sm border-t border-[#7042f88b]/10">
          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
            {title}
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>

          {/* Footer with Links and Technologies */}
          <motion.div
            className="mt-4 pt-4 border-t border-[#7042f88b]/20 flex items-center justify-between gap-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Links on the left */}
            <div className="flex items-center gap-3">
              {/* Source Code Link Icon */}
              <Link
                href={sourceCode}
                target="_blank"
                rel="noreferrer noopener"
                className="p-2 rounded-lg bg-gray-900/50 hover:bg-gray-800 text-gray-300 hover:text-white transition-all duration-300 border border-gray-700/50 hover:border-gray-600 hover:scale-110"
                title="View Source Code"
              >
                <RxGithubLogo className="w-5 h-5" />
              </Link>

              {/* Live Demo Link Icon - Only if available */}
              {liveDemo && (
                <Link
                  href={liveDemo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2 rounded-lg bg-blue-500/80 hover:bg-blue-600 text-white transition-all duration-300 border border-blue-400/50 hover:border-blue-300 hover:scale-110"
                  title="View Live Demo"
                >
                  <RxArrowTopRight className="w-5 h-5" />
                </Link>
              )}
            </div>

            {/* Technologies on the right */}
            {technologies && technologies.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap justify-end">
                {technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-[#7042f88b]/30 text-xs font-semibold text-purple-300 hover:border-[#7042f88b]/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(112,66,248,0.2)]"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
