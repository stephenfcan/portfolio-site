import React from 'react'

const Portfolio = () => {
  return (
    <div className='h-screen pt-32'>
      <div className='flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0'>
        <img className='h-60 w-60 lg:h-auto lg:w-auto' src="https://media-exp1.licdn.com/dms/image/C5603AQENQWze4byJKQ/profile-displayphoto-shrink_400_400/0/1659452655667?e=1675296000&v=beta&t=caoFYyyLV0yFdM2Xq-_LcuBCUXBtAx5Mg9s9ohJvvUI" alt="" />
        <div>
          <p className='text-white md:text-lg font-light mb-3'>As a child, I&apos;ve always had a knack for breaking rule. I thrive in ambiguity, exploring new ideas, designing a cohesive vision, and executing relentlessly.</p>
          <p className='text-white md:text-lg font-light'>Let&apos;s get to work.</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio