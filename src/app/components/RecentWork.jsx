import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { projectsData } from '../data/Data';
import Image from 'next/image';
import { Rowdies } from 'next/font/google';

const rowdies = Rowdies({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const RecentWork = () => {
  return (
    <section className='projects py-12 px-4 md:px-8 lg:px-16' id='projects'>
      <h1 className={`${rowdies.className} mb-2 relative text-3xl font-bold text-cyan-400`}>RECENT WORK</h1>
      <div className="line-1 absolute bottom-[-82.75rem] left-[4rem] h-[0.2rem] w-[8rem] bg-cyan-400 rounded-[50%] max-sm:bottom-[-204.75rem] max-sm:left-[1rem]"></div>
      <div className="line-1 absolute bottom-[-83.25rem] left-[4rem] h-[0.2rem] w-[13.5rem] bg-cyan-400 rounded-[50%] max-sm:bottom-[-205.25rem] max-sm:left-[1rem]"></div>
      <h2 className={`font-bold text-white text-xl md:text-2xl lg:text-5xl mt-10 mb-12 leading-14`}>
        Here are some of my favorite projects I have done lately. Feel free to check them out.
      </h2>

      <div className="container mx-auto">
        <div className="projects-container grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="project relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="img w-full h-64 md:h-80 lg:h-96 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="content absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <span className="text-white uppercase tracking-widest text-md font-bold mb-1">
                  {project.category}
                </span>
                
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`text-white uppercase tracking-wider text-md font-bold mb-1 ${
                      project.highlightTech && index === project.technologies.length - 1 
                        ? 'text-cyan-400 font-bold' 
                        : ''
                    }`}
                  >
                    {tech}
                  </span>
                ))}
                
                <h2 className={`${rowdies.className} text-cyan-400 text-xl md:text-xl mt-4 mb-6 uppercase tracking-wider`}>
                  {project.title}
                </h2>
                
                <div className="icons flex gap-4">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl border-2 border-white rounded-full p-2 transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400"
                      title={link.title}
                    >
                      {link.icon === 'FaGithub' ? <FaGithub /> : <MdArrowOutward />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;