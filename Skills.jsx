import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase,FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} className="text-[#F7DF1E]" /> },
    { id: 2, name: "React", icon: <FaReact size={50} className="text-[#61DAFB]" /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} className="text-[#339933]" /> },
    { id: 4, name: "Python", icon: <FaPython size={50} className="text-[#3776AB]" /> },
    { id: 5, name: "MongoDB", icon: <FaDatabase size={50} className="text-[#47A248]" /> },
    { id: 6, name: "Java", icon: <FaJava size={50} className="text-[#ED8B00]" /> },
    { id: 7, name: "Postgresql", icon: <BiLogoPostgresql size={50} className="text-[#4169E1]" /> },
    { id: 8, name: "Next.js", icon: <RiNextjsFill size={50} className="text-black" /> },
    { id: 9, name: "Tailwind", icon: <RiTailwindCssFill size={50} className="text-[#06B6D4]" /> },
    { id: 10, name: "Figma", icon: <CgFigma size={50} className="text-[#F24E1E]" /> },
  ]);

  return (
    <div className="mt-3 lg:mt-16 pb-10 lg:pb-20 bg-black py-10 lg:py-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-[#27272A] transition-all cursor-pointer border-white rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5 group"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group-hover:opacity-90 [&_svg]:group-hover:text-white">
                {skill.icon}
              </div>
              <p className="text-black group-hover:text-white">{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
