import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const projects = [
  {
    title: "Implied Volatility Surface and Arbitrage Detection",
    description:
      "Built a real-time volatility surface dashboard using the Black-Scholes model and live market data from yfinance. Computed implied volatility for European call options across multiple strikes and maturities. Detected butterfly arbitrage and visualized 3D IV surfaces and smiles using Plotly and Streamlit.",
    tech: ["Python", "yfinance", "Plotly", "Streamlit", "Black-Scholes"],
    github: "#",
  },
  {
    title: "Exotic Derivatives Pricing and Sensitivity Analysis",
    description:
      "Designed and executed Monte Carlo simulations (10,000+ iterations) using the Euler-Maruyama method to price exotic options, achieving accurate pricing for Asian and Lookback options. Conducted sensitivity analysis with Finite Difference Methods to compute Greeks (Delta, Gamma, Vega, Theta) and analyzed the effect of market parameters on option prices.",
    tech: ["Python", "Monte Carlo", "Finite Difference Methods", "Euler-Maruyama"],
    github: "#",
  },
  {
    title: "Invoice Generation App",
    description:
      "An application that creates PDF invoices from Excel files. Automates invoice generation process with support for custom headers, company logos, and pricing calculations. Streamlines billing workflow by converting spreadsheet data into professional PDF invoices.",
    tech: ["Python"],
    github: "https://github.com/Heetm77/app5-invoice-generation",
  },
  {
    title: "News API Email",
    description:
      "Fetches the latest news for a chosen topic via NewsAPI and prepares the results for email delivery. Currently prints article titles and descriptions to stdout; easily extendable to send via SMTP or email providers.",
    tech: ["Python", "Requests"],
    github: "https://github.com/Heetm77/app-6-news-api-email",
  },
  {
    title: "Weather Data API",
    description:
      "Flask API serving historical temperature data from local datasets. Provides endpoints for single-date temperatures, full-station data, and yearly subsets without external API calls at runtime.",
    tech: ["Python", "Flask", "Pandas"],
    github: "https://github.com/Heetm77/app-7-your-weather-api",
  },
  {
    title: "Weather Forecast Dashboard",
    description:
      "Interactive Streamlit app that visualizes OpenWeatherMap 5-day forecasts. Users pick a city and days ahead to view temperature trends or sky conditions with Plotly charts and weather icons.",
    tech: ["Python", "Streamlit", "Plotly", "Requests", "OpenWeatherMap"],
    github: "https://github.com/Heetm77/app-8-weather-data-forecast-app",
  },
  {
    title: "Student Management System (PyQt6 + MySQL)",
    description:
      "Desktop app to create, view, update, search, and delete student records. PyQt6 GUI backed by MySQL with dialogs for add/edit/delete, search by name, and a table view of all students.",
    tech: ["Python", "PyQt6", "MySQL", "PyMySQL"],
    github: "https://github.com/Heetm77/app-15-student-management-system-with-mysql",
  },
  {
    title: "Super Mario Python",
    description:
      "Super Mario Implementation in Python. This is inspired by Meth-Meth-Method's super mario game. A classic game implementation using pygame with full game mechanics including player movement, enemies, and level design.",
    tech: ["Python", "pygame", "scipy"],
    github: "https://github.com/Heetm77/super-mario-python",
  },
];

const Projects = () => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-4rem)] px-6 py-10"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Projects</h1>
        <p className="text-gray-300 mb-8 text-sm md:text-base text-center">
          A selection of projects I've built across AI, web, and finance.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-[#202020] border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3 gap-2">
                <h2 className="text-base sm:text-lg font-semibold flex-1">{project.title}</h2>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FaGithub size={20} />
                </a>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-[#2b2b2b] border border-gray-700 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs border border-gray-600 rounded-full px-4 py-2 hover:bg-[#e85a85] hover:border-[#e85a85] transition-all"
                >
                  View on GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs border border-gray-600 rounded-full px-4 py-2 hover:bg-[#e85a85] hover:border-[#e85a85] transition-all"
                  >
                    Live Website <FaExternalLinkAlt size={10} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Projects;
