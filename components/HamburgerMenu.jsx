import React from 'react'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'

const HamburgerMenu = () => {
  const { setShowMenu } = useStateContext();
  return (
    <div className='w-screen min-h-screen h-full left-0 bg-white/10 backdrop-blur-lg fixed top-0 z-100 transition ease-in-out'>
      <div className='max-w-7xl mx-auto'>
        {/* Exit Button */}
        <div className='flex justify-end m-5 text-white/40 hover:text-white'>
          <button onClick={() => setShowMenu(false)} className='flex items-center space-x-2'>
            <h1 className='font-semibold'>Exit</h1>
            <AiOutlineClose size={20} />
          </button>
        </div>

        {/* Menu Links */}
        <div className='flex flex-col items-start space-y-5'>
          <Link href='#hero'>
            <button onClick={() => setShowMenu(false)} className='text-white/40 hover:text-white cursor-pointer mx-[20px] text-5xl md:text-7xl font-bold'>HOME</button>
          </Link>
          <Link href='#about'>
            <button onClick={() => setShowMenu(false)} className='text-white/40 hover:text-white cursor-pointer mx-[20px] text-5xl md:text-7xl font-bold'>ABOUT</button>
          </Link>
          <Link href='#portfolio'>
            <button onClick={() => setShowMenu(false)} className='text-white/40 hover:text-white cursor-pointer mx-[20px] text-5xl md:text-7xl font-bold'>PORTFOLIO</button>
          </Link>
          <Link href='mailto:stephenfcan@gmail.com'>
            <button onClick={() => setShowMenu(false)} className='text-white/40 hover:text-white cursor-pointer mx-[20px] text-5xl md:text-7xl font-bold'>CONTACT</button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default HamburgerMenu