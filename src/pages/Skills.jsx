import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const skillGroups = [
  {
    title: "Programming",
    items: "Python, C++, R",
  },
  {
    title: "Quantitative Finance",
    items:
      "Derivatives Pricing (Black Scholes, Monte Carlo), Implied Volatility & Volatility Surface Modeling, Yield Curve Modeling (Nelson Siegel, Nelson Siegel Svensson), Portfolio Risk Metrics (Beta, VaR, Expected Shortfall), Backtesting and Model Validation (Kupiec Test), Time Series Analysis",
  },
  {
    title: "Statistics & Machine Learning",
    items:
      "Probability and Statistics, Stochastic Calculus, Regression, Classification, Clustering, Decision Trees, Feature Engineering, Model Training and Evaluation, Scikit-Learn",
  },
  {
    title: "Data Analysis & Visualization",
    items: "Pandas, NumPy, Matplotlib, Excel",
  },
  {
    title: "Financial & Market Data",
    items:
      "Options Chains, Equity & Fixed Income Data, Real Time Market Data Analysis, Bloomberg Terminal",
  },
  {
    title: "Software Engineering & Systems",
    items: "Data Structures & Algorithms, Object Oriented Programming",
  },
  {
    title: "Tools and Platforms",
    items: "Git, GitHub, Streamlit",
  },
];

const Skills = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Skills</h1>
        <p className="text-gray-300 mb-8 text-sm md:text-base text-center">
          A snapshot of the technologies and concepts I work with.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-[#202020] border border-gray-800 rounded-xl p-5 shadow-md"
            >
              <h2 className="text-lg font-semibold mb-2">{group.title}</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                {group.items}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Skills;
