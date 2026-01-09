// src/pages/Experience.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const experiences = [
  {
    role: "Portfolio Management Intern",
    company: "Shagun Wealth, Ahmedabad, Gujarat, India",
    period: "May 2024 to Jun 2024",
    description:
      "Assisted in managing high net worth client portfolios totaling $500M AUM by conducting NAV trend analysis and portfolio beta assessment.",
    longDescription:
      "As a Portfolio Management Intern at Shagun Wealth, I assisted in managing high net worth client portfolios totaling $500M AUM by conducting NAV trend analysis and portfolio beta assessment. I supported client onboarding through trading account setup and investment recommendations, executed purchases and redemptions across various mutual fund schemes, and used NSE/BSE trading terminals to monitor real time market movements.",
  },
  {
    role: "Project Intern, Software Development",
    company: "Silver Touch Technologies Ltd, Ahmedabad, Gujarat, India",
    period: "Jan 2024 to Apr 2024",
    description:
      "Led the development of a front end flight booking system using Flutter, Dart, HTML, and CSS, improving load speed by 30% and reducing booking effort by 40%.",
    longDescription:
      "At Silver Touch Technologies Ltd, I led the development of a front end flight booking system using Flutter, Dart, HTML, and CSS. I collaborated with a team of four and coordinated tasks to ensure on time project delivery. I enhanced system performance by improving load speed by 30% and reducing booking effort by 40%, implementing core features including user authentication, flight search and filters, and seat selection.",
  },
  {
    role: "Intern, Python Development",
    company: "Silver Touch Technologies Ltd, Ahmedabad, Gujarat, India",
    period: "May 2023 to Jul 2023",
    description:
      "Developed finance domain application using Python and PostgreSQL, contributing to internal tools that reduced reporting time for the finance team by 25%.",
    longDescription:
      "During my Python Development internship at Silver Touch Technologies Ltd, I developed finance domain application using Python and PostgreSQL, contributing to internal tools that reduced reporting time for the finance team by 25%. I cleaned and standardized large datasets to improve data reliability and supported testing and deployment of production modules, ensuring alignment with business logic and performance standards.",
  },
  {
    role: "Intern, Web Development",
    company: "Silver Touch Technologies Ltd, Ahmedabad, Gujarat, India",
    period: "Jun 2022 to Jun 2022",
    description:
      "Completed a web development internship focused on UI design and static website implementation, ensuring cross browser compatibility and mobile responsiveness.",
    longDescription:
      "At Silver Touch Technologies Ltd, I completed a web development internship focused on UI design and static website implementation. I designed and coded responsive layouts using HTML and CSS, ensuring cross browser compatibility and mobile responsiveness. I built multiple user interface prototypes for client facing applications, collaborated with senior developers to translate wireframes into clean front end code, and assisted in basic database integration planning for dynamic pages.",
  },
];

const Experience = () => {
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
          Experience
        </h1>
        <p className="text-gray-300 mb-8 text-sm md:text-base text-center">
          A snapshot of my professional experience, including internships and roles to date.
        </p>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(exp)}
              className="w-full text-left bg-[#202020] border border-gray-800 rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all focus:outline-none"
            >
              <h2 className="text-lg sm:text-xl font-semibold mb-1">{exp.role}</h2>
              <p className="text-xs sm:text-sm text-gray-300 mb-1 break-words">{exp.company}</p>
              <p className="text-xs text-gray-400 mb-3">{exp.period}</p>
              <p className="text-xs sm:text-sm text-gray-300">{exp.description}</p>
              <p className="text-xs text-[#e85a85] mt-2">
                Click to read more
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal for long description */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 py-4">
          <div className="bg-[#202020] border border-gray-700 rounded-xl max-w-3xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-y-auto p-4 sm:p-6 shadow-xl">
            <div className="flex items-start justify-between mb-3 gap-2">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl font-semibold mb-1 break-words">
                  {selected.role}
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 break-words">{selected.company}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {selected.period}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-sm text-gray-400 hover:text-white ml-2 sm:ml-4 flex-shrink-0"
              >
                Close
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              {selected.longDescription}
            </p>
          </div>
        </div>
      )}
    </motion.main>
  );
};

export default Experience;
