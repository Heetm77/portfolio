// src/pages/Achievements.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const achievements = [
  {
    title: "Gold Medal Winner",
    description: "Post Graduate Diploma in Financial Management",
    institution: "California State University, San Bernardino & Ahmedabad Management Association",
    period: "2024 to 2025",
    image: null,
  },
  {
    title: "Microeconomics: The Power of Markets",
    description: "Course Certificate",
    institution: "University of Pennsylvania, Coursera",
    period: "May 2025",
    image: "/microeconomic.png",
  },
  {
    title: "Introduction to Financial Accounting",
    description: "Course Certificate",
    institution: "University of Pennsylvania (Wharton), Coursera",
    period: "May 2025",
    image: "/intorduction to financial.png",
  },
  {
    title: "Investment Banking: Financial Analysis and Valuation",
    description: "Course Certificate",
    institution: "University of Illinois Urbana-Champaign, Coursera",
    period: "February 2024",
    image: "/investment_banking.png",
  },
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)] px-6 py-10"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Achievements
        </h1>
        <p className="text-gray-300 mb-8 text-sm md:text-base text-center">
          Recognition and accomplishments throughout my academic and professional journey.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              onClick={() => achievement.image && setSelectedImage(achievement.image)}
              className={`bg-[#202020] border border-gray-800 rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all ${
                achievement.image ? "cursor-pointer" : ""
              }`}
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-1 text-purple-400">
                {achievement.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mb-1">
                {achievement.description}
              </p>
              <p className="text-xs text-gray-400 mb-1 break-words">
                {achievement.institution}
              </p>
              <p className="text-xs text-gray-500">{achievement.period}</p>
              {achievement.image && (
                <p className="text-xs text-[#e85a85] mt-2">Click to view certificate</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto rounded-lg shadow-2xl max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Achievements;

