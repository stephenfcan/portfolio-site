import Link from 'next/link'
import React from 'react'
import { AiOutlineUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='pb-10'>
      <div className='flex items-center justify-center'>
        <Link href='#hero'>
          <button className='mb-10 flex flex-col text-center justify-center items-center text-white/40 hover:text-white'>
            <AiOutlineUp size={20} />
            <h1 className='text-sm font-extralight tracking-widest transition-all'>TOP</h1>
          </button>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 text-white space-y-7 md:space-y-0'>
        {/* Socials */}
        <div className='space-y-2 md:space-y-4'>
          <h1 className='text-lg font-semibold tracking-widest'>SOCIALS</h1>
          <div className='space-y-2'>
            <div>
              <Link href='https://www.linkedin.com/in/stephen-an/'>
                <p className='button text-sm'>LinkedIn</p>
              </Link>
            </div>
            <div>
              <Link href='https://github.com/stephenfcan'>
                <p className='button text-sm'>Github</p>
              </Link>
            </div>
            <div>
              <Link href='https://www.youtube.com/@stephen-an'>
                <p className='button text-sm'>Youtube</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className='space-y-2 md:space-y-4'>
          <h1 className='text-lg font-semibold tracking-widest'>CONTACT</h1>
          <div>
            <Link href='mailto:stephenfcan@gmail.com'>
              <p className='button text-sm'>stephenfcan@gmail.com</p>
            </Link>
          </div>
        </div>

        {/* General Info */}
        <div className='space-y-2 md:space-y-4'>
          <h1 className='text-lg font-semibold tracking-widest'>GENERAL INFO</h1>
          <div className='space-y-2'>
            <p className='text-sm'>⛰︎ Based in: Denver</p>
            <p className='text-sm'>🐶 Education: University of Georgia</p>
            <p className='text-sm'>🎓 Major: Management Information Systems</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='mt-10'>
        <p className='text-white text-xs uppercase tracking-widest'>Copyright · Stephen An</p>
      </div>
    </div>
  )
}

export default Footer