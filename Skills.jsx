import React from "react";
import { motion } from "framer-motion";

import {
  FaJs,
  FaReact,
  FaDatabase,
  FaJava,
  FaCube,
  FaNetworkWired,
} from "react-icons/fa";

import { SiC, SiCplusplus } from "react-icons/si";
import { CgFigma } from "react-icons/cg";

export default function Skills() {
  const skills = [
    { id: 1, name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { id: 2, name: "React", icon: FaReact, color: "#61DAFB" },
    { id: 3, name: "C", icon: SiC, color: "#A8B9CC" },
    { id: 4, name: "C++", icon: SiCplusplus, color: "#00599C" },
    { id: 5, name: "MongoDB", icon: FaDatabase, color: "#47A248" },
    { id: 6, name: "Java", icon: FaJava, color: "#E76F00" },
    { id: 7, name: "SQL", icon: FaDatabase, color: "#4479A1" },
    { id: 8, name: "OOPS", icon: FaCube, color: "#6C63FF" },
    { id: 9, name: "CN", icon: FaNetworkWired, color: "#2E86DE" },
    { id: 10, name: "Figma", icon: CgFigma, color: "#F24E1E" },
  ];

  return (
    <div className="mt-8 lg:mt-20 py-10 lg:py-16 bg-black" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center mb-8 lg:mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.id}
                className="bg-white border-2 border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 cursor-pointer"
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.08 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: skill.id * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Icon size={50} style={{ color: skill.color }} />
                <p className="text-black">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}