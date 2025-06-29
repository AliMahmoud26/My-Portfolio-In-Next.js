import React, { useState } from 'react';
import { FaEllipsisH, FaGithub } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { projectsData } from '../data/Data';
import Image from 'next/image';
import { Rowdies } from 'next/font/google';
import Link from 'next/link';

const rowdies = Rowdies({
  weight: ['400', '700'],
  subsets: ['latin'],
});


const RecentWork = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section className='projects py-12 px-4 md:px-8 lg:px-16' id='projects'>
      <h1 className={`${rowdies.className} mb-2 relative text-3xl font-bold text-cyan-400`}>RECENT WORK</h1>
      <div className="line-1 absolute bottom-[-82.75rem] left-[4rem] h-[0.2rem] w-[8rem] bg-cyan-400 rounded-[50%] max-lg:hidden"></div>
      <div className="line-1 absolute bottom-[-83.25rem] left-[4rem] h-[0.2rem] w-[13.5rem] bg-cyan-400 rounded-[50%] max-lg:hidden"></div>
      <h2 className={`font-bold text-white text-xl md:text-2xl lg:text-5xl my-12 leading-14 max-md:leading-8 max-sm:my-6 max-sm:mb-8`}>
        Here are some of my favorite projects I have done lately. Feel free to check them out.
      </h2>

      <div className="container mx-auto">
        <div className="projects-container grid grid-cols-1 lg:grid-cols-3 mx-12">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="project relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 m-2"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="img w-full h-64 md:h-80 lg:h-96 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className={`content absolute inset-0 bg-black flex flex-col justify-center items-center p-6
                ${activeProject === project.id ? 'opacity-90 bg-opacity-90' : 'opacity-0 bg-opacity-0'}  
                lg:opacity-0 bg-opacity-0
                group-hover:opacity-90 group-hover:bg-opacity-90 
                transition-all duration-300`}
              >
                <span className="text-white uppercase tracking-widest text-md font-bold mb-1">
                  {project.category}
                </span>
                
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`text-white max-sm:text-sm uppercase tracking-wider text-md font-bold mb-1 ${
                      project.highlightTech && index === project.technologies.length - 1 
                        ? 'text-cyan-400 font-bold' 
                        : ''
                    }`}
                  >
                    {tech}
                  </span>
                ))}
                
                <h2 className={`${rowdies.className} text-cyan-400 text-xl max-sm:text-[1rem] mt-4 mb-6 uppercase tracking-wider ${project.font}`}>
                  {project.title}
                </h2>
                
                <div className="icons flex gap-4">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url !== "#" ? link.url : undefined}
                      target={link.url !== "#" ? "_blank" : undefined}
                      rel={link.url !== "#" ? "noopener noreferrer" : undefined}
                      className={`text-white text-2xl max-md:text-md border-2 border-white rounded-full p-2 transition-all duration-300 hover:text-cyan-400 hover:border-cyan-400 ${
                        link.url === "#" ? "cursor-pointer" : ""
                      }`}
                      title={link.title}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (link.url === "#") {
                          // Handle click for project details (e.g., open modal)
                          console.log("Show project details for:", project.title);
                        }
                      }}
                    >
                      {link.icon === 'FaGithub' ? (
                        <FaGithub />
                      ) : link.icon === 'MdArrowOutward' ? (
                        <MdArrowOutward />
                      ) : (
                        <FaEllipsisH />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-[#222] rounded-lg max-w-2xl w-full p-6 relative">
            <button 
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <h3 className={`${rowdies.className} text-cyan-400 text-2xl mb-4`}>
              {selectedProject.title}
            </h3>
            <div className="text-white space-y-4">
              <p>{selectedProject.description}</p>
              <div>
                <h4 className="font-bold">Technologies Used:</h4>
                <ul className="list-disc pl-5">
                  {selectedProject.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default RecentWork;