import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Rowdies } from 'next/font/google'
const rowdies = Rowdies({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll) };
  }, [])

  return (
    <header className={`fixed py-[1rem] px-[4rem] top-0 w-full z-50 transition-all duration-500 ease-out ${isScrolled ? 'bg-cyan-400 shadow-md' : 'bg-[#222]'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <a href='#' className={`${rowdies.className} text-[2.5rem] text-white transition-colors duration-300`}>Ali.</a>
          </div>
          
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={handleNavToggle}
          >
            {navbarOpen ? (
              <FaTimes size={25} className="hover:text-cyan-300 transition-colors duration-300" />
            ) : (
              <FaBars size={25} className="hover:text-cyan-300 transition-colors duration-300" />
            )}
          </button>

          <nav className={`${navbarOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="lg:flex lg:items-center lg:space-x-8 space-y-4 lg:space-y-0">
              <li>
                <a 
                  href="#" 
                  className={`${rowdies.className} text-white hover:text-cyan-600 text-xl transition-colors duration-300`}
                  onClick={() => setNavbarOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={`${rowdies.className} text-white hover:text-cyan-600 text-xl transition-colors duration-300`}
                  onClick={() => setNavbarOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#expertise" 
                  className={`${rowdies.className} text-white hover:text-cyan-600 text-xl transition-colors duration-300`}
                  onClick={() => setNavbarOpen(false)}
                >
                  Expertise
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`${rowdies.className} text-white hover:text-cyan-600 text-[1.25rem] transition-colors duration-300`}
                  onClick={() => setNavbarOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`${rowdies.className} text-white hover:text-cyan-600 text-xl transition-colors duration-300`}
                  onClick={() => setNavbarOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar