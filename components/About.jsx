import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen h-full pt-28 md:pt-32 py-40 md:flex items-center'>
      <div className='flex flex-col items-center space-y-5 md:flex-row md:items-start md:space-x-5 md:space-y-0'>
        <img className='h-60 w-60 object-contain lg:h-96 lg:w-96' src="https://user-images.githubusercontent.com/84104582/206887035-f5bff4bc-4335-414e-a9cc-f5d488a4c6fc.JPEG" alt="" />
        <div className=''>
          <p className='text-white text-md font-light mb-3'>A Georgia native now residing in Silicon Valley, I consider myself a life-long learner and risk-taker - a constant cycle of failing fast and personal growth. I thrive in uncertainty, exploring new ideas, designing a cohesive vision, and executing relentlessly.</p>
          <p className='text-white text-md font-light mb-3'>Today, I&apos;m currently at the intersection of product management, full-stack development, and user experience. I&apos;m passionate about building products that have a positive impact on society and even more so when I get to build them alongside incredible talent. Feel free to reach out if you&apos;d like to learn more about my experience, create something amazing together, or just want to <Link href='mailto:stephenfcan@gmail.com'><span className='underline hover:opacity-60'>have a chat</span></Link>.</p>
          <p className='text-white text-md font-light mb-3'>Let&apos;s get to work.</p>
          <img className='h-32' src="https://user-images.githubusercontent.com/84104582/205430009-475c2ff1-2a24-4719-a71e-569e147949a9.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About