import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isResumeOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 bg-white p-5 transition-shadow duration-300 ${hasShadow ? "shadow-md" : "shadow-none"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")}
          className="h-9 cursor-pointer"
          src="/assets/mylogo.png"
          alt="Logo"
        />

        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              className="group"
              whileHover={{ scale: 1.1 }}
            >
              <button onClick={() => scrollToSection(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          onClick={() => setIsResumeOpen(true)}
          className="hidden relative lg:inline-block px-4 py-2 font-medium group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
            Resume <TbDownload size={16} />
          </span>
        </motion.button>

        <motion.button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow"
          >
            <button
              className="absolute top-5 right-5 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>
            <ul className="flex flex-col items-start ml-16 mt-28 h-full gap-y-6 font-semibold">
              {["about", "skills", "projects", "contact"].map((section) => (
                <motion.li
                  key={section}
                  className="border-b"
                  whileHover={{ scale: 1.1 }}
                >
                  <button onClick={() => scrollToSection(section)}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.li>
              ))}
              <motion.button
                onClick={() => {
                  setIsResumeOpen(true);
                  setIsOpen(false);
                }}
                className="relative inline-block px-4 py-2 font-semibold group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
                  Resume <TbDownload size={16} />
                </span>
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center p-5"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.5 
              }}
              className="relative w-full h-full max-w-5xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsResumeOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiX size={24} />
              </motion.button>

              {/* PDF Viewer */}
              <div className="w-full h-full overflow-auto">
                <iframe
                  src="/assets/MY_RESUME.pdf"
                  className="w-full h-full min-h-[600px] border-0"
                  title="Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
