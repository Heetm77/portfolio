// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaCoffee, FaHandshake } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const Contact = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)] px-6 py-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADING BLOCK – centered for whole page */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact</h1>
          <p className="text-gray-300 text-sm md:text-base">
            Whether it’s a project idea, collaboration, or just a question about
            something I've built, I'm happy to connect.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-5">
            <div className="bg-[#202020] border border-gray-800 rounded-xl p-4 flex gap-4 items-start">
              <FaEnvelope className="text-[#e85a85] mt-1" size={20} />
              <div>
                <h2 className="text-base font-semibold mb-1">Email</h2>
                <p className="text-xs text-gray-400 mb-1">
                  Best way to reach me directly.
                </p>
                <a
                  href="mailto:hnm1@fordham.edu"
                  className="text-sm text-[#e85a85] hover:underline"
                >
                  hnm1@fordham.edu
                </a>
              </div>
            </div>

            <div className="bg-[#202020] border border-gray-800 rounded-xl p-4 flex gap-4 items-start">
              <FaCoffee className="text-[#e85a85] mt-1" size={20} />
              <div>
                <h2 className="text-base font-semibold mb-1">Coffee Chat</h2>
                <p className="text-xs text-gray-400 mb-1">
                  Open to virtual coffee chats about tech, AI, or careers.
                </p>
                <a
                  href="https://www.linkedin.com/in/heetnirajmehta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e85a85] hover:underline"
                >
                  Message me on LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-[#202020] border border-gray-800 rounded-xl p-4 flex gap-4 items-start">
              <FaHandshake className="text-[#e85a85] mt-1" size={20} />
              <div>
                <h2 className="text-base font-semibold mb-1">
                  Collaborations
                </h2>
                <p className="text-xs text-gray-400 mb-1">
                  I'm always interested in meaningful projects and ideas.
                </p>
                <a
                  href="https://www.linkedin.com/in/heetnirajmehta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#e85a85] hover:underline"
                >
                  Let&apos;s collaborate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
