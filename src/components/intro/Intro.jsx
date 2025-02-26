import React from 'react';
import temiraliev from '../../assets/ARGEN.jpg';

function Intro() {
  return (
    <section id='about' className="bg-gradient-to-r from-black via-gray-900 to-indigo-800 text-white py-16 px-10">
      <div className="container mx-auto flex items-center justify-center px-4 h-[80vh] ">
        <div className="flex flex-col lg:flex-row items-center justify-around lg:items-start w-full">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
            <h1 className="text-5xl font-semibold mb-6 text-blue-500">Argen Temiraliev</h1>
            <p className="text-2xl  mb-6 text-blue-700">Front-End Developer</p>
            <p className="text-base text-gray-300 max-w-xl mb-6">
              Front-End Developer passionate about creating responsive and accessible web applications. Experienced in modern JavaScript frameworks like React and JavaScript , and dedicated to building seamless user experiences across all devices and platforms.
            </p>
            <div className="space-x-6">
              <a
                href="https://github.com/ArgenTemiraliev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-white transition"
              >
                <i className="fab fa-github text-2xl">GitHub</i>
              </a>
              <a
                href="https://kg.linkedin.com/in/argen-zholdoshvai-uulu-3796a62b1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-white transition"
              >
                <i className="fab fa-linkedin text-2xl">LinkedIn</i>
              </a>
              <a
                href="https://t.me/Temiraliev_Argen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-white transition"
              >
                <i className="fab fa-twitter text-2xl">Telegram</i>
              </a>
            </div>
          </div>
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-blue-500 transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-6">
            <img
              src={temiraliev} 
              alt="Argen Temiraliev"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
