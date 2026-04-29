"use client";
import { motion, Variants } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // This is the magic: it delays each child by 0.2 seconds
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function AboutSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-10"
    >
      <motion.h1
        variants={itemVariants}
        className="text-violet-400 text-4xl font-bold"
      >
        Linguistic Roots & Logic
      </motion.h1>

      <motion.div variants={itemVariants} className="mt-4 glass-card">
        {/* Your content here */}
        <p className="text-white/80">
          Exploring the intersection of code and philosophy...
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-4 glass-card">
        <p className="text-white/80">Specializing in Full-Stack Alchemy.</p>
      </motion.div>
    </motion.section>
  );
}
