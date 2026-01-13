import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 py-10 lg:py-20 mt-8 lg:mt-16 flex justify-between flex-col lg:flex-row items-center gap-8 lg:gap-12" id="about">
      <motion.div
        className="lg:w-1/2 w-full flex justify-center lg:justify-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" className="w-full max-w-md" />
      </motion.div>

      <motion.div
        className="lg:w-1/2 w-full"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mb-5 lg:mb-8">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
        I’m a Computer Science & Engineering student and an aspiring Full-Stack & Cloud-Native Developer with a strong interest in building scalable, real-world applications. I enjoy turning ideas into clean, efficient, and user-friendly solutions while constantly improving my technical depth.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        I work primarily with JavaScript, focusing on React.js for frontend development and Node.js for backend systems. Alongside this, I’m actively learning and exploring cloud-native technologies, DevOps practices, and modern software engineering tools to prepare for high-impact engineering roles.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        Currently, I’m sharpening my skills in system design, data structures, backend architecture, and cloud platforms, while building projects that reflect real industry use cases. I believe in learning by building and consistently pushing myself beyond my comfort zone.
        </p>
        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        Beyond coding, I enjoy exploring new tech trends, learning from developer communities, and following the journeys of innovative startups. I’m always eager to grow, collaborate, and take on challenging problems that help me evolve as an engineer.
        </p>
      </motion.div>
    </div>
  );
}
