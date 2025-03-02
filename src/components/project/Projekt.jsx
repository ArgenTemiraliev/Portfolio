import React from 'react';
import imgProject1 from '../../assets/project1.png';
import imgProject2 from '../../assets/project2.png';
import imgProject3 from '../../assets/project3.png';
import imgProject4 from '../../assets/project4.png';


import { motion } from 'framer-motion';
import { img } from 'framer-motion/client';

const projekts = [
  { name: 'Java Script', text: 'A modern JavaScript web project with an interactive interface.', img: imgProject1, link: 'https://java-script-mauve.vercel.app/' },
  { name: 'QR Menu', text: 'QR menu for restaurants with easy navigation and quick access.', img: imgProject2, link: 'https://beknazar007.github.io/qr-menu-website/' },
  { name: 'Sport Store', text: 'Online store of sporting goods with catalog and filtering.', img: imgProject3, link: 'https://github.com/Abaijan/sports' },
  {name: "Coffee Shop" , tetx:"The project is a demo website for a coffee shop, showcasing its offerings, atmosphere, and customer experiences.", img: imgProject4 , link :"https://coffee-seven-beryl.vercel.app/"}
];

function Projekt() {
  return (
    <section id='project' className="bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          My Projects
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Take a look at what we've created and get inspired
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-10">
          {projekts.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className=" bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:shadow-2xl transition">
              <img src={project.img} alt={project.name} className="w-full h-60 object-cover" />
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-white mb-2">{project.name}</h2>
                <p className="text-gray-400 mb-4">{project.text}</p>
                <a  href={project.link} target="_blank"  rel="noopener noreferrer"  className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold transition hover:bg-blue-500 hover:shadow-lg">  View project </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projekt;
