import React from 'react';
import Navbar from './Navbar';
import { FaDownload } from 'react-icons/fa';
import { Rowdies } from 'next/font/google';
import Image from 'next/image';

// Initialize Rowdies font
const rowdies = Rowdies({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Header = () => {
  return (
    <main className="bg-[#222] min-h-screen">
      {/* Navbar Section */}
      <section className="navbar">
        <Navbar />
      </section>

      {/* Hero/About Section */}
      <section className="about pt-[9rem] px-[4rem] max-md:px-8 max-sm:px-4">
        <div className="my-info flex justify-between items-center flex-col-reverse md:flex-row gap-8 max-md:items-start">
          {/* Text Content */}
          <div className="text w-full md:w-2/3 mt-[4rem] max-md:mt-[1rem]">
            <span className={`${rowdies.className} mb-[10rem] text-white uppercase font-semibold text-sm md:text-base`}>
              Software Engineer
            </span>
            <br />
            <span className={`${rowdies.className} mb-[0.875rem] text-cyan-400 text-4xl md:text-6xl font-extrabold block`}>
              Hello I'm
            </span>
            <span className={`${rowdies.className} text-cyan-400 text-4xl md:text-6xl font-extrabold block`}>
              Ali Mahmoud
            </span>
            <p className="info text-white mt-5 mb-[6.5rem] leading-7 max-w-3xl text-sm md:text-base">
              I'm a Passionate frontend developer skilled in building dynamic, user-friendly web applications using React and 
              Next.js. I aim to leverage my technical expertise and creative problem-solving abilities to build scalable, 
              responsive applications that enhance user experience. Looking for opportunities to further develop my skills, 
              contribute to impactful projects, and grow within collaboratives and forward-thinking teams.
            </p>
          </div>

          {/* Image with Border Effects */}
          <div className="img mt-4 relative h-[28rem] w-[23rem] z-0 max-sm:mx-auto max-[450px]:w-[14rem] max-[450px]:w-[20rem]">
            <div className="absolute top-[-0.25rem] left-[-0.25rem] w-30 h-40 border-t-4 border-l-4 border-cyan-400"></div>
            <div className="absolute bottom-[-0.25rem] right-[-0.25rem] w-30 h-40 border-b-4 border-r-4 border-cyan-400"></div>
            <Image 
              src="/my-img.jpg" 
              alt="Ali Mahmoud" 
              width={368}
              height={448}
              className="h-full w-full z-10 relative object-cover shadow-md shadow-cyan-400"
              priority
            />
          </div>
        </div>

        {/* Download CV Button */}
        <div className="btn bg-[#03cdff17] border-2 border-[#03cdff17] rounded-full py-[0.75rem] px-8 w-fit mt-[-4rem] transition-colors duration-300 hover:bg-transparent shadow-md shadow-cyan-400/50 rounded-lg">
          <a 
            href="/Ali_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${rowdies.className} text-cyan-400 hover:text-cyan-400 flex items-center gap-2 transition-colors duration-300 text-sm md:text-base font-semibold`}
          >
            DOWNLOAD CV <FaDownload />
          </a>
        </div>

        {/* Social Icons (commented out) */}
        {/* <div className="socials flex justify-center mt-8">
          <a href="https://github.com/AliMahmoud26" target='_blank' title='Github Account' className="flex items-center justify-center mr-6 text-white text-xl border-2 border-white rounded-full p-4 transition-colors duration-300 hover:text-cyan-400 hover:border-cyan-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ali-mahmoud-b94668226/" target='_blank' title='Linkedin Account' className="flex items-center justify-center mr-6 text-white text-xl border-2 border-white rounded-full p-4 transition-colors duration-300 hover:text-cyan-400 hover:border-cyan-400">
            <FaLinkedin />
          </a>
          <a href="https://www.frontendmentor.io/profile/AliMahmoud21" target='_blank' title='Frontend Mentor Account' className="flex items-center justify-center mr-6 text-white text-xl border-2 border-white rounded-full p-4 transition-colors duration-300 hover:text-cyan-400 hover:border-cyan-400">
            <FaArrowsTurnRight />
          </a>
        </div> */}
      </section>
    </main>
  );
};

export default Header;