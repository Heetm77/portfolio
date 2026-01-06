import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

// About section: introduces the developer with a dark card containing
// an image, descriptive text and social icons.  Colours echo the
// original dark theme with subtle purple highlights.

const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-20 flex justify-center items-center">
      <div className="bg-[#2a2a2a] max-w-5xl w-full rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full md:w-1/3">
          <img
            src="/avatar-placeholder.png.png"
            alt="Heet Mehta"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-2/3 text-left">
          <h2 className="text-3xl font-bold text-white mb-4">About Me 👨‍💻</h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            I am a graduate student in Quantitative Finance with a strong foundation in computer science and a deep interest in risk management, fixed income, and portfolio management. My academic and project experience spans quantitative modeling, derivatives, and financial programming, where I have applied tools such as Python and Bloomberg Terminal.
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            I am motivated by the intersection of technology and finance. Alongside my academic pursuits, I value collaboration, clear communication, and continuous learning. I am eager to apply my quantitative skills, analytical mindset, and curiosity in a research driven, collaborative environment.
          </p>
          {/* Social links */}
          <div className="flex gap-4 mt-2 text-white text-xl">
            <a href="mailto:hnm1@fordham.edu" title="Email"><FaEnvelope /></a>
            <a href="https://github.com/Heetm77" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/heetnirajmehta/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About