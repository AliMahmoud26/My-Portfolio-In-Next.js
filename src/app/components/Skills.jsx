import React from 'react';
import { skillsData } from '../data/Data';
import { Rowdies } from 'next/font/google';

const rowdies = Rowdies({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Skills = () => {
  return (
    <section className='skills px-8 max-md:px-2 lg:px-16 max-md:mt-18' id='skills'>
      <h1 className={`${rowdies.className} relative text-3xl font-bold text-cyan-400`}>SKILLS</h1>
      <div className="line-1 absolute bottom-[-2.5rem] left-[4rem] h-[0.2rem] w-[3.5rem] bg-cyan-400 rounded-[50%] max-lg:hidden"></div>
      <div className="line-1 absolute bottom-[-3rem] left-[4rem] h-[0.2rem] w-[5.75rem] bg-cyan-400 rounded-[50%] max-lg:hidden"></div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[5rem] mx-12 max-md:mx-2">
        {skillsData.map((skillCategory) => (
          <div 
            key={skillCategory.id}
            className={`bg-[#03cdff17] py-5 px-7 rounded shadow-md shadow-cyan-600/20 ml-5 max-md:ml-0 border-l-4 border-cyan-400 transition-all ease-in-out duration-600 hover:scale-105`}
          >
            <h2 className={`${rowdies.className} text-2xl text-cyan-400 mb-4`}>
              {skillCategory.category}
            </h2>
            
            <div className="tech-skills space-y-2">
              {skillCategory.skills.map((skill, index) => (
                <p key={index} className="text-white">
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;