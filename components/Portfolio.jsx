import React from 'react'
import ExperienceBanner from './ExperienceBanner'
import Footer from './Footer'

const Portfolio = () => {
  return (
    <div className='min-h-screen h-full pt-28 pb-20 md:pt-32'>
      <div className='text-white text-sm space-y-10'>
        <div className='space-y-2'>
          {/* ServiceNow */}
          <ExperienceBanner
            date={'Jan 2023 - Present'}
            title={'Assoc Product & Strategy Program Manager'}
            company={'ServiceNow'}
            link={'https://www.servicenow.com/'}
            city={'Santa Clara'}
          />

          <p>Just started!</p>
        </div>

        <div className='space-y-2'>
          {/* ServiceNow Internship */}
          <ExperienceBanner
            date={'May 2022 - Dec 2022'}
            title={'App Engineering Program Manager Intern'}
            company={'ServiceNow'}
            link={'https://www.servicenow.com/'}
            city={'Santa Clara'}
          />
          <div className='flex space-x-5 overflow-scroll snap-x scrollbar-hide'>
            <img className='snap-end rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205474502-7a703c58-f128-49f0-90bd-6557920377f0.png" alt="" />
            <img className='snap-center rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205475054-7c47a428-13c0-44ea-84e0-3aa62ba888df.png" alt="" />
            <img className='snap-center rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205475400-4de842f5-4138-4ecf-82a6-2ad604159da2.png" alt="" />
            <img className='snap-start rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205474850-2be4a31f-7ab3-47be-ba91-42744e1c8351.png" alt="" />
          </div>
          <p>Led engineering teams &#40;Learning Experience Platform & Now Platform, Now Learning Training&#41; to successfully build and deploy features such as Core LXP v1.4-1.8, Partner ETA &#40;delivered $10+mm in ARR&#41;, AI Search, LaaS API, and AI/ML Recommendations.</p>
        </div>

        <div className='space-y-2'>
          {/* UNRELENTING */}
          <ExperienceBanner
            date={'Present'}
            title={'Founder'}
            company={'UNRELENTING'}
            link={'https://www.unrelenting.com/'}
            city={'San Francisco'}
          />
          <div className='flex space-x-5 overflow-scroll snap-x scrollbar-hide'>
            <img className='snap-end rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205454940-5d30e26c-be36-4963-8ea4-8e2e1af18043.png" alt="" />
            <img className='snap-start rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205474294-34c8abed-409c-4d61-861d-3879cd1b80bb.png" alt="" />
          </div>
          <p>Launching new clothing brand in mid-2023. Built ground-up e-commerce web application using Next.js and features global cart state and Stripe Checkout API. Currently collaborating with suppliers to navigate supply chains and apparel design/quality.</p>
        </div>

        <div className='space-y-2'>
          {/* Boehringer Ingelheim */}
          <ExperienceBanner
            date={'Aug 2021 - Jan 2023'}
            title={'IT OPS Digitalization Co-op'}
            company={'Boehringer Ingelheim'}
            link={'https://www.boehringer-ingelheim.com/'}
            city={'Remote'}
          />
          <p>Directed multiple digitalization initiatives including lab occupancy application development, digital maturity assessments, IoT smart factory transformations, and robotic-process-automation PoC.</p>
        </div>

        <div className='space-y-2'>
          {/* Gartner */}
          <ExperienceBanner
            date={'Jun 2021 - Jul 2023'}
            title={'Global Tech Sales Intern'}
            company={'Gartner'}
            link={'https://www.gartner.com/'}
            city={'Remote'}
          />
          <p>Consulted with CIOs and senior IT leaders on digital transformation and cybersecurity-related challenges to align them with appropriate research and solutions. Assisted with go-to-market strategy planning with Health & Life Sciences business development team.</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio