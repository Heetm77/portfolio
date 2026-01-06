// src/pages/Education.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const education = [
  {
    institution: "Fordham University, Gabelli School of Business",
    location: "New York, NY",
    degree: "MS, Quantitative Finance Student, Dean's Scholarship Recipient",
    period: "August 2025 – December 2026",
    details: [
      "Relevant Coursework: Derivatives, Financial Markets and Modeling, Financial Programming, Machine Learning and Econometrics, Probability and Statistics, Math for Quantitative Finance, Introduction to Stochastic Calculus",
      "Member of the Quantitative Finance Society, Investments Club, and Capital Markets Club",
    ],
  },
  {
    institution: "California State University, San Bernardino & Ahmedabad Management Association (Joint Degree)",
    location: "San Bernardino, CA & Ahmedabad, Gujarat, India",
    degree: "Post Graduate Diploma, Financial Management",
    period: "July 2024 – May 2025",
    details: [
      "Relevant Coursework: Risk Management, Capital Budgeting, Mergers and Acquisitions (M&A), Financial Statement Analysis, Personal Finance, Foreign Exchange",
    ],
  },
  {
    institution: "Indus Institute of Technology and Engineering",
    location: "Ahmedabad, Gujarat, India",
    degree: "Bachelors, Computer Science and Engineering, GPA 3.57/4.00",
    period: "September 2020 – April 2024",
    details: [
      "Relevant Coursework: Linear Algebra, Calculus, Differential Equations, Data Science",
      "President of the Sports Committee; organized inter-college soccer tournament with 12+ universities across the city",
    ],
  },
];

const Education = () => {
  const [selected, setSelected] = useState(null);

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
          Education
        </h1>
        <p className="text-gray-300 mb-8 text-sm md:text-base text-center">
          Academic journey and educational achievements.
        </p>

        <div className="space-y-5">
          {education.map((edu, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(edu)}
              className="w-full text-left bg-[#202020] border border-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all focus:outline-none"
            >
              <h2 className="text-xl font-semibold mb-1">{edu.institution}</h2>
              <p className="text-sm text-gray-300 mb-1">{edu.location}</p>
              <p className="text-sm text-purple-400 mb-1">{edu.degree}</p>
              <p className="text-xs text-gray-400 mb-3">{edu.period}</p>
              <p className="text-xs text-[#e85a85] mt-2">
                Click to read more
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal for details */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#202020] border border-gray-700 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 shadow-xl">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-2xl font-semibold mb-1">
                  {selected.institution}
                </h2>
                <p className="text-sm text-gray-300 mb-1">{selected.location}</p>
                <p className="text-sm text-purple-400 mb-1">{selected.degree}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {selected.period}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-sm text-gray-400 hover:text-white ml-4"
              >
                Close
              </button>
            </div>
            <div className="space-y-3">
              {selected.details.map((detail, index) => (
                <p key={index} className="text-sm text-gray-200 leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.main>
  );
};

export default Education;

