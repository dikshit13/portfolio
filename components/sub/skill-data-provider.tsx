"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.4,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.15, rotateZ: 5 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      whileHover="hover"
      className="flex flex-col items-center gap-3 cursor-pointer group"
    >
      <motion.div
        className="relative p-6 rounded-xl bg-gradient-to-br from-purple-600/10 to-cyan-600/10 border border-[#7042f88b]/30 group-hover:border-[#7042f88b]/60 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_25px_rgba(112,66,248,0.2)]"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div variants={imageVariants} transition={{ duration: 0.3 }}>
          <Image
            src={`/skills/${src}`}
            width={width}
            height={height}
            alt={name}
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-300 -z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.div>

      <motion.p
        className="text-sm font-semibold text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300"
        initial={{ opacity: 0, y: 5 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
        transition={{ delay: index * 0.08 + 0.15, duration: 0.3 }}
      >
        {name}
      </motion.p>
    </motion.div>
  );
};
