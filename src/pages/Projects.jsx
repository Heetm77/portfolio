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
    title: "Invoice Generation App",
    description:
      "An application that creates PDF invoices from Excel files. Automates invoice generation process with support for custom headers, company logos, and pricing calculations. Streamlines billing workflow by converting spreadsheet data into professional PDF invoices.",
    tech: ["Python"],
    github: "https://github.com/Heetm77/Invoice_Generation",
  },
  {
    title: "News API Email",
    description:
      "Fetches the latest news for a chosen topic via NewsAPI and prepares the results for email delivery. Currently prints article titles and descriptions to stdout, easily extendable to send via SMTP or email providers.",
    tech: ["Python", "Requests"],
    github: "https://github.com/Heetm77/News_Api_Email",
  },
  {
    title: "Weather Data API",
    description:
      "Flask API serving historical temperature data from local datasets. Provides endpoints for single date temperatures, full station data, and yearly subsets without external API calls at runtime.",
    tech: ["Python", "Flask", "Pandas"],
    github: "https://github.com/Heetm77/Your_Weather_Api",
  },
  {
    title: "Weather Forecast Dashboard",
    description:
      "Interactive Streamlit app that visualizes OpenWeatherMap 5 day forecasts. Users pick a city and days ahead to view temperature trends or sky conditions with Plotly charts and weather icons.",
    tech: ["Python", "Streamlit", "Plotly", "Requests", "OpenWeatherMap"],
    github: "https://github.com/Heetm77/Weather_Data_Forecast_App",
  },
  {
    title: "Student Management System (PyQt6 + MySQL)",
    description:
      "Desktop app to create, view, update, search, and delete student records. PyQt6 GUI backed by MySQL with dialogs for add/edit/delete, search by name, and a table view of all students.",
    tech: ["Python", "PyQt6", "MySQL", "PyMySQL"],
    github: "https://github.com/Heetm77/Student_Management_System_With_mysql",
  },
  {
    title: "Super Mario Python",
    description:
      "Super Mario Implementation in Python. This is inspired by Meth-Meth-Method's super mario game. A classic game implementation using pygame with full game mechanics including player movement, enemies, and level design.",
    tech: ["Python", "pygame", "scipy"],
    github: "https://github.com/Heetm77/Super_Mario",
  },
  {
    title: "Browser Automation with Selenium",
    description:
      "Python application that automates web browser interactions using Selenium WebDriver. Demonstrates automated login, form filling, and file downloading with both command-line and GUI interfaces built with Tkinter.",
    tech: ["Python", "Selenium", "Tkinter", "ChromeDriver"],
    github: "https://github.com/Heetm77/Browser_Automation_Selenium",
  },
  
  {
    title: "Flask Job Application Form",
    description:
      "Flask web application with an interactive job application form. Stores submissions in SQLite database using SQLAlchemy and sends confirmation emails to applicants using Flask Mail with Bootstrap styled UI.",
    tech: ["Python", "Flask", "SQLAlchemy", "Flask-Mail", "SQLite", "Bootstrap"],
    github: "https://github.com/Heetm77/Flask_Form",
  },
  {
    title: "Hotel Booking System",
    description:
      "Command line hotel booking system with credit card validation and reservation ticket generation. Features OOP design with support for spa packages, secure credit card authentication, and CSV based data storage.",
    tech: ["Python", "Pandas", "CSV"],
    github: "https://github.com/Heetm77/Hotel_Booking",
  },
  {
    title: "PDF Template Generator",
    description:
      "Python application that generates PDF templates with ruled lines for note taking from CSV files. Creates customizable PDFs with topic headers, footers, and automatic page management for each topic section.",
    tech: ["Python", "FPDF", "Pandas"],
    github: "https://github.com/Heetm77/Pdf_Template",
  },
  {
    title: "Tour Events Web Scraper",
    description:
      "Web scraping application that monitors websites for upcoming tour events, stores them in SQLite database, and sends email notifications when new events are discovered. Uses YAML based selectors for flexible data extraction.",
    tech: ["Python", "Requests", "SQLite", "SelectorLib", "YAML"],
    github: "https://github.com/Heetm77/Scraping_Tours_sql",
  },
  {
    title: "Student Management System (PyQt6 + SQLite)",
    description:
      "Desktop application for managing student records with PyQt6 GUI. Features create, view, update, search, and delete operations with SQLite database backend. Includes menu bar, dialogs, and table view interface.",
    tech: ["Python", "PyQt6", "SQLite"],
    github: "https://github.com/Heetm77/Student_Management_System",
  },
  {
    title: "Derivatives Pricing",
    description:
      "Portfolio grade quant project for derivatives pricing and risk modeling from first principles. Black Scholes analytical pricing and closed form Greeks, Monte Carlo (GBM) with control variates for variance reduction, numerical Greeks via finite differences, and American put pricing with Longstaff Schwartz LSM including early exercise boundary visualization and path split overfitting diagnostics. Benchmarked against binomial trees.",
    tech: ["Python", "NumPy", "SciPy", "Black Scholes", "Monte Carlo", "Longstaff Schwartz"],
    github: "https://github.com/Heetm77/Derivatives_Pricing",
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
