import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-32 pb-7'>
      <div className='grid grid-cols-1 md:grid-cols-3 text-white space-y-10 md:space-y-0'>
        {/* Socials */}
        <div className='space-y-4'>
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
              <Link href='https://www.youtube.com/@stee-fen'>
                <p className='button text-sm'>Youtube</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className='space-y-4'>
          <h1 className='text-lg font-semibold tracking-widest'>CONTACT</h1>
          <div>
            <Link href='mailto:stephenfcan@gmail.com'>
              <p className='button text-sm'>stephenfcan@gmail.com</p>
            </Link>
          </div>
        </div>

        {/* General Info */}
        <div className='space-y-4'>
          <h1 className='text-lg font-semibold tracking-widest'>GENERAL INFO</h1>
          <div className='space-y-2'>
            <p className='text-sm'>🌉 Based in: Cupertino, CA</p>
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