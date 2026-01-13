import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 py-10 lg:py-20 flex justify-between flex-col lg:flex-row gap-8 lg:gap-12" id="about">
      <motion.div
        className="lg:w-1/2 flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" className="w-full h-auto" />
      </motion.div>

      <motion.div
        className="lg:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mb-6 lg:mb-8">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mb-4 lg:mb-6">
          I'm a passionate full-stack developer specializing in **React.js & Node.js**. I thrive on blending technical expertise with sleek UI/UX design to build high-performing, user-friendly applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mb-4 lg:mb-6">
          My web development journey started in **2015**, and since then, I've continuously evolved, taking on new challenges and keeping up with the latest technologies. Today, I build **cutting-edge web applications** using **Next.js, TypeScript, NestJS, TailwindCSS, Supabase, and more**.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base">
          Beyond coding, I enjoy sharing insights on **Twitter**, engaging with **Indie Hackers**, and following the journey of **early-stage startups**. Feel free to follow me on **Twitter** or check out my projects on **GitHub**.
        </p>
      </motion.div>
    </div>
  );
}
