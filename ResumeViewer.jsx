import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { TbDownload } from "react-icons/tb";

export default function ResumeViewer({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MY_RESUME.pdf";
    link.download = "Mohith_Kumar_Resume.pdf";
    link.click();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 lg:inset-8 z-[101] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between p-4 lg:p-6 border-b bg-gradient-to-r from-gray-50 to-white"
            >
              <h2 className="text-xl lg:text-2xl font-bold">My Resume</h2>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm lg:text-base"
                >
                  <TbDownload size={18} />
                  <span className="hidden sm:inline">Download</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <HiX size={24} />
                </motion.button>
              </div>
            </motion.div>

            {/* PDF Viewer with Smooth Scrolling */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 overflow-auto bg-gray-100"
              style={{
                scrollBehavior: "smooth",
                scrollbarWidth: "thin",
              }}
            >
              <div className="flex justify-center p-4 lg:p-8 min-h-full">
                <motion.iframe
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  src="/MY_RESUME.pdf#view=FitH&toolbar=1&navpanes=1&scrollbar=1"
                  className="w-full h-full min-h-[600px] lg:min-h-[800px] rounded-lg shadow-lg border border-gray-300"
                  style={{
                    maxWidth: "900px",
                    scrollBehavior: "smooth",
                  }}
                  title="Mohith Kumar Resume"
                  allow="fullscreen"
                />
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-xs lg:text-sm pointer-events-none"
            >
              Scroll to view resume
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
