import Link from 'next/link'
import React, { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { AiOutlineMenu, AiFillLinkedin, AiFillGithub, AiFillYoutube } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'

const NavBar = () => {
  const { showMenu, setShowMenu } = useStateContext();

  return (
    <div className='sticky top-5 z-50 max-w-7xl mx-auto'>
      {showMenu ? (<HamburgerMenu />) : (
      <div className='flex justify-between items-center py-5 rounded-lg mx-4 md:mx-6 px-3 md:px-7 bg-white/10 backdrop-blur-lg'>
        <div className='flex space-x-3 items-center'>
          {/* Hamburger Menu */}
          <button onClick={() => setShowMenu(true)} className='text-white/40 hover:text-white'>
            <AiOutlineMenu size={20} />
          </button>

          {/* Name/Logo */}
          <div className='font-bold text-xl cursor-pointer'>
            <Link href='#hero'>
              <button className='text-white flex items-center space-x-2'>
                <p>STEPHEN AN</p>
              </button>
            </Link>
          </div>
        </div>

        {/* Socials */}
        <div className='hidden md:inline-flex space-x-3'>
          <div className='text-white/40 hover:text-white'>
            <Link href='https://github.com/stephenfcan'>
              <AiFillGithub size={30} />
            </Link>
          </div> 
          <div className='text-white/40 hover:text-white'>
            <Link href='https://www.linkedin.com/in/stephen-an'>
              <AiFillLinkedin size={30} />
            </Link>
          </div> 
          <div className='text-white/40 hover:text-white'>
            <Link href='https://www.youtube.com/@stee-fen'>
              <AiFillYoutube size={30} />
            </Link>
          </div>  
        </div>

      </div>
    )}
    </div>
  )
}

export default NavBar