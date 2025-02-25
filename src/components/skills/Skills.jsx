import React from 'react';
import bgImage from '../../assets/1_reJe0jcz6I3bHe_VvwGY3w.png';
import imgSkillHTNL from '../../assets/images.jpeg'
import imgSkillCSS from '../../assets/images (1).jpeg'
import imgSkillTWC from '../../assets/Без названия.jpeg'
import imgSkillJS from '../../assets/images (2).jpeg'
import imgSkillNEXTJS from '../../assets/Без названия (1).jpeg'
import imgSkillREACT from '../../assets/Benefits-of-ReactJS.jpg'


const skills = [
  { name: 'HTML', imgskill: imgSkillHTNL  , target: 'https://www.w3schools.com/html/' },
  { name: 'CSS', imgskill: imgSkillCSS , target:  'https://developer.mozilla.org/ru/docs/Web/CSS'},
  { name: 'Tailwindcss', imgskill: imgSkillTWC  , target: 'https://tailwindcss.com/'},
  { name: 'JavaScript', imgskill: imgSkillJS , target: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
  { name: 'Next.JS', imgskill: imgSkillNEXTJS  , target: 'https://nextjs.org'},
  { name: 'REACT', imgskill: imgSkillREACT  , target: 'https://react.dev/learn'},
 ]

function Skills() {
  return (
    <section className="h-[124vh]   bg-cover bg-center relative " style={{backgroundImage: `url(${bgImage})`}}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-gray-800/60 to-indigo-700/70">
        <div className="container mx-auto sm:px-10 h-[70%] relative ">
          <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="mt-16">
              <h2 className="text-yellow-50 text-5xl text-center pt-10">My Skills</h2>
              <p className='text-white text-xl text-center mt-10 px-12'>  I chose these technologies because each offers unique strengths. React's component-based architecture is great, Next.js excels with SEO and server-side rendering, while HTML and CSS are my foundation, which I understand well </p>
              </div>
            <div className="flex relative w-full max-md:overflow-x-auto max-md:whitespace-nowrap max-md:-mx-6 scrollbar-hide">
              <div className="flex flex-nowrap justify-center mt-10 md:flex-wrap gap-6 sm:gap-12 px-6 ">
                {skills.map((skill, index) => (
                  <div key={index} className="text-white rounded-3xl w-60 md:w-72 h-64 flex flex-col justify-center items-center shrink-0">
                    <img src={skill.imgskill} alt={skill.name} className="w-full h-[75%] mb-4 rounded-3xl"/>
                    <a href={skill.target} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-center" > {skill.name} </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
</section>
  );
}

export default Skills;
