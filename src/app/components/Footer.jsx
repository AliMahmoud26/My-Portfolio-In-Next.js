import React from 'react';
import { Rowdies } from 'next/font/google';

const rowdies = Rowdies({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <footer className='w-full bg-[#03cdff17] pt-14 pb-5 px-8 md:px-16 mt-12' id='contact'>
      <div className="mx-auto flex flex-col max-w-7xl">
        {/* Reach Me Section */}
        <div className="reach-me mb-10">
          <h4 className="text-cyan-400 mb-2 tracking-widest font-bold">GET IN TOUCH</h4>
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-10 mb-4">
            I love to hear from you. Whether you have a question or asking for freelance or work availability — shoot me a message.
          </h1>
        </div>

        {/* Other Links Section */}
        <div className="other-links flex flex-row items-center gap-6 max-md:flex-col max-md:items-start mb-10">
          {/* Email Section */}
          <div className="email lg:w-1/4">
            <h4 className="text-cyan-400 font-normal text-base tracking-widest mb-2 font-bold">REACH ME AT</h4>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:alimahmoud.cs@outlook.com" 
                className="text-white text-lg hover:text-cyan-400 transition-colors duration-300"
              >
                Outlook
              </a>
              <a 
                href="mailto:alimah.engineer@gmail.com" 
                className="text-white text-lg hover:text-cyan-400 transition-colors duration-300"
              >
                Gmail
              </a>
            </div>
          </div>

          {/* Page Links Section */}
          <div className="page-links lg:w-1/4">
            <h4 className="text-cyan-400 font-normal text-base tracking-widest mb-2 lg:text-center font-bold">PAGE LINKS</h4>
            <div className="links flex flex-wrap gap-4 lg:justify-center">
              <a href="#" className="text-white text-lg hover:text-cyan-400 transition-colors duration-300">Home</a>
              <a href="#skills" className="text-white text-lg hover:text-cyan-400 transition-colors duration-300">Skills</a>
              <a href="#expertise" className="text-white text-lg hover:text-cyan-400 transition-colors duration-300">Expertise</a>
              <a href="#projects" className="text-white text-lg hover:text-cyan-400 transition-colors duration-300">Projects</a>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="socials lg:w-1/4">
            <h4 className="text-cyan-400 font-normal text-base tracking-widest mb-2 lg:text-center font-bold">SOCIAL</h4>
            <div className="social-links flex flex-wrap gap-4 lg:justify-center">
              <a 
                href="https://www.linkedin.com/in/ali-mahmoud-b94668226/" 
                target='_blank' 
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-cyan-400 transition-colors duration-300"
              >
                Linkedin
              </a>
              <a 
                href="https://github.com/AliMahmoud26" 
                target='_blank' 
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-cyan-400 transition-colors duration-300"
              >
                Github
              </a>
              <a 
                href="https://leetcode.com/u/AliMahmoud26/" 
                target='_blank' 
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-cyan-400 transition-colors duration-300"
              >
                LeetCode
              </a>
            </div>
          </div>

          {/* Email Box Section */}
          <div className="email-box bg-cyan-400 px-12 py-4 flex items-center cursor-pointer transition-colors duration-300 hover:bg-transparent max-md:mt-4">
            <a 
              href="mailto:alimahmoud.cs@outlook.com" 
              title='Outlook'
              className={`${rowdies.className} text-white text-sm tracking-widest transition-colors duration-300 hover:text-cyan-400`}
            >
              SAY HELLO.
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <p className='text-cyan-400 text-center text-sm mt-16 max-md:mt-8'>
          Copyright &copy; Ali Mahmoud 2024, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;