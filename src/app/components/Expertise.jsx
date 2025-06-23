import React from 'react';
import { expertiseData } from '../data/Data';
import { Rowdies } from 'next/font/google';

const rowdies = Rowdies({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Expertise = () => {
  return (
    <section className='expertise mt-20 py-12 px-8 md:px-12 lg:px-16' id='expertise'>
      <h1 className={`${rowdies.className} mb-2 relative text-3xl font-bold text-cyan-400`}>EXPERTISE</h1>
      <div className="line-1 absolute bottom-[-36.75rem] left-[4rem] h-[0.2rem] w-[5.5rem] bg-cyan-400 rounded-[50%]"></div>
      <div className="line-1 absolute bottom-[-37.25rem] left-[4rem] h-[0.2rem] w-[9.5rem] bg-cyan-400 rounded-[50%]"></div>

      <div className="mt-18 grid grid-cols-1 lg:grid-cols-2 gap-20 mx-12">
        {/* Experience Section */}
        <div className="experience">
          <h4 className="text-white mb-8 text-lg tracking-widest font-normal">
            EXPERIENCE
          </h4>
          
          {expertiseData.experience.map((exp) => (
            <div key={exp.id} className="experience-holder mb-8 relative pl-8">
              <div className="experience-timeline absolute left-0 top-0 h-full">
                <div className="circle absolute top-3 left-0 w-3 h-3 bg-cyan-400 rounded-full z-10"></div>
                <div className={`line absolute top-6 left-[0.35rem] w-px bg-gray-600 rounded-full z-0 ${exp.lineHeight}`}></div>
              </div>
              <div className="content">
                <h2 className={`${rowdies.className} text-white text-xl mb-1`}>{exp.title}</h2>
                <h3 className={`${rowdies.className} text-white text-base mb-1`}>{exp.subtitle}</h3>
                <span className="text-gray-500 text-xs tracking-wider">{exp.date}</span>
                <p className="text-gray-300 mt-6 leading-8">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="education">
          <h4 className="text-white mb-8 text-lg tracking-widest font-normal">
            EDUCATION
          </h4>
          
          {expertiseData.education.map((edu) => (
            <div key={edu.id} className="education-timeline relative pl-8">
              <div className="timeline absolute left-0 top-0 h-full">
                <div className="circle absolute top-3 left-0 w-3 h-3 bg-cyan-400 rounded-full z-10"></div>
                <div className={`line absolute top-6 left-[0.35rem] w-px bg-gray-600 rounded-full z-0 ${edu.lineHeight}`}></div>
              </div>
              <div className="content">
                <h2 className={`${rowdies.className} text-white text-xl mb-1`}>{edu.title}</h2>
                <h3 className={`${rowdies.className} text-white text-base mb-1`}>{edu.subtitle}</h3>
                <span className="text-gray-500 text-xs tracking-wider">{edu.date}</span>
                <p className="text-gray-300 mt-6 leading-8">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;