// src/pages/Achievements.jsx
import React from "react";
import { motion } from "framer-motion";

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
    period: "2024 - 2025",
  },
];

const Achievements = () => {
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

        <div className="space-y-5">
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-[#202020] border border-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold mb-1 text-purple-400">
                {achievement.title}
              </h2>
              <p className="text-sm text-gray-300 mb-1">
                {achievement.description}
              </p>
              <p className="text-xs text-gray-400 mb-1">
                {achievement.institution}
              </p>
              <p className="text-xs text-gray-500">{achievement.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Achievements;

