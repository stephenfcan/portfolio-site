import Link from 'next/link'
import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='min-h-screen h-full pt-32 md:py-40 md:flex items-center'>
      <div className='space-y-10 md:space-y-20 flex flex-col items-center'>
        <h1 className='font-semibold text-2xl md:text-5xl text-white md:leading-[55px]'>Hi there! The name&apos;s Stephen. I&apos;m a <span className='text-orange-500'>technical program manager</span> at Abnormal Security looking to build delightful experiences and products for <s>users</s> humans.</h1>
        <Link href='#about'>
          <button className='flex flex-col text-center justify-center items-center text-white/40 hover:text-white'>
            <h1 className='text-sm font-extralight tracking-widest transition-all'>SEE MORE</h1>
            <AiOutlineDown size={20} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero