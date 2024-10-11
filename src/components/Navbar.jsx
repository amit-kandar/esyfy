import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { LOGO } from '../utils/constants'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works?", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" }
  ]

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  }

  const listVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <header className={`w-full sticky px-5 md:px-10 py-4 hero-section bg-[#FBF5D5]`}>
      <div className='w-full lg:max-w-7xl mx-auto flex justify-between items-center'>
        <div className=''>
          {/* <img src={LOGO} alt="Vihaan" className='w-full h-full' /> */}
          <h1 className='text-5xl lowercase font-semibold font-serif text-black'>{LOGO}</h1>
        </div>
        <nav className='hidden lg:block'>
          <ul className='flex gap-6 items-center text-[#ffffff] text-xl font-medium'>
            {
              navLinks.map((item, index) =>
                <li className="relative cursor-pointer group capitalize text-black" key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'font-semibold border-b-[3px] border-slate-900'
                        : 'font-normal'
                    }
                  >
                    {item.name}
                    <span className="absolute left-1/2 top-[26px] w-0 h-[3px] bg-slate-700 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
                  </NavLink>
                </li>
              )
            }
            <li>
              <Link to="/contact-us" className="font-regular text-sm min-w-36 inline-flex cursor-pointer items-center justify-center text-center h-10 px-8 rounded-full text-black bg-white hover:opacity-80 border border-zinc-200 ">
                login
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="font-regular text-sm inline-flex cursor-pointer items-center justify-center text-center min-w-[160px] h-10 px-8 rounded-full text-white bg-black hover:opacity-80 duration-300">
                Start Free trail
              </Link>
            </li>

          </ul>
        </nav>
        <div className='lg:hidden'>
          <div className={`${isOpen ? 'hidden' : 'block'}`} onClick={handleOnClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </div>

          <div onClick={handleOnClick} className={`${isOpen ? 'block' : 'hidden'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-x" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 4l10 16" />
              <path d="M17 4l-10 16" />
            </svg>
          </div>
        </div>
      </div>

      <div className={`w-1/2 bg-[#f0f8ff] flex flex-col items-end justify-start absolute top-[80px] left-0 min-h-screen z-50 transition-transform duration-500 ease-in-out ${isOpen ? '-translate-x-0' : '-translate-x-full'}`}>
        <ul className='w-full pt-10 pl-10 flex flex-col items-start gap-5'>
          {
            navLinks.map((item, index) => {
              return (
                <motion.li
                  key={index}
                  initial="hidden"
                  custom={index}
                  animate={isOpen ? 'visible' : 'hidden'}
                  variants={listVariants}
                  className='text-2xl font-medium text-black'
                >
                  <NavLink to={item.path}>
                    {item.name}
                  </NavLink>
                </motion.li>
              )
            })
          }
        </ul>
      </div>
    </header>
  )
}

export default Navbar