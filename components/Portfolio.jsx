import React from 'react'
import ExperienceBanner from './ExperienceBanner'
import Footer from './Footer'

const Portfolio = () => {
  return (
    <div className='min-h-screen h-full pt-28 md:pt-32'>
      <div className='text-white text-sm space-y-10 pb-20'>
      <div className='space-y-2'>
          {/* Abnormal Job */}
          <ExperienceBanner
            date={'Jan 2024 - Present'}
            title={'Associate Technical Program Manager'}
            company={'Abnormal Security'}
            link={'https://abnormalsecurity.com/'}
            city={'San Francisco'}
          />
          <p>Working...</p>
        </div>

        <div className='space-y-2'>
          {/* Youtube Channel */}
          <ExperienceBanner
            date={'Jan 2023 - Present'}
            title={'Content Creator'}
            company={'Youtube Channel'}
            link={'https://www.youtube.com/@stephen-an'}
            city={'San Francisco'}
          />
          <div className='flex space-x-5 overflow-scroll snap-x scrollbar-hide'>
            <img className='snap-end rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/216759311-8ef5af75-764e-4b42-b8bd-e6905c7dd05c.jpg" alt="" />
            <img className='snap-end rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/282406561-8575bfcf-16a7-40c9-b5fb-a8472ee85c98.png" alt="" />
            <img className='snap-end rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/282406597-9143b30a-4b9a-4960-b28e-b8c97a3321a5.png" alt="" />
            <img className='snap-center rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/216759136-66994d69-13c8-4d5a-aa94-d27657abf872.jpg" alt="" />
            <img className='snap-end rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/216759267-41a17d30-f2cb-4db2-b9fe-16a3a0c47d02.jpg" alt="" />
          </div>
          <p>Creating educational videos catered towards business and product strategy to learn from some of the most influential companies in the world.</p>
        </div>

        <div className='space-y-2'>
          {/* ServiceNow Job */}
          <ExperienceBanner
            date={'Jan 2023 - Jan 2024'}
            title={'Associate Program Manager, Engineering & Product Ops'}
            company={'ServiceNow'}
            link={'https://www.servicenow.com/'}
            city={'Santa Clara'}
          />
          {/* <div className='flex space-x-5 overflow-scroll snap-x scrollbar-hide'>
            <img className='snap-end rounded-md md:rounded-2xl' src="https://github.com/stephenfcan/dummy-app/assets/84104582/baa58376-068a-490e-a98a-556c397f3e1b" alt="" />
            <img className='snap-end rounded-md md:rounded-2xl' src="https://github.com/stephenfcan/dummy-app/assets/84104582/b21c1811-a4bd-435b-b14e-4080adb719db" alt="" />
            <img className='snap-end rounded-md md:rounded-2xl' src="https://github.com/stephenfcan/dummy-app/assets/84104582/6edfc6fc-6c4a-4edb-964f-ff41d83fc7d5" alt="" />
          </div> */}
          <p>Responsible for conducting, analyzing, and improving product and engineering metrics across dCX properties &#40;Now Learning, Impact, and Now Support&#41;, improving average application performance and deployment frequency by 26% and 58% and reducing change failure rate and cycle time by 77% and 66%. Led the development and execution of the dCX Product Operations initaitive, building a Unified Support Model, dashboards, and processes to improve incident prioritization, monitoring, and remediation, resulting in a 10x improvement in MTTR and 0 aged incidents. Managed financial operations including API license renewals and the procurement and delivery of 50+ contract workers.</p>
        </div>

        <div className='space-y-2'>
          {/* ServiceNow Internship */}
          <ExperienceBanner
            date={'May 2022 - Dec 2022'}
            title={'Program Manager Intern - Engineering'}
            company={'ServiceNow'}
            link={'https://www.servicenow.com/'}
            city={'Santa Clara'}
          />
          {/* <div className='flex space-x-5 overflow-scroll snap-x scrollbar-hide'>
            <img className='snap-end rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205474502-7a703c58-f128-49f0-90bd-6557920377f0.png" alt="" />
            <img className='snap-center rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205475054-7c47a428-13c0-44ea-84e0-3aa62ba888df.png" alt="" />
            <img className='snap-center rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205475400-4de842f5-4138-4ecf-82a6-2ad604159da2.png" alt="" />
            <img className='snap-start rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205474850-2be4a31f-7ab3-47be-ba91-42744e1c8351.png" alt="" />
          </div> */}
          <p>Project Manager for engineering teams &#40;LXP & Platform, Now Learning Training&#41;, leading SAFe rituals and resolving blockers to deliver features such as Partner Enterprise Training Agreements, AI Search, and ML Recommendations. Strategized and oversaw E2E, UAT, and performance testing efforts, managing dashboards to track and resolve defects.</p>
        </div>

        <div className='space-y-2'>
          {/* UNRELENTING */}
          <ExperienceBanner
            date={'INCUBATING'}
            title={'Founder'}
            company={'UNRELENTING'}
            link={'https://unrelenting.com/'}
            city={'San Francisco'}
          />
          <div className='flex space-x-5 overflow-scroll snap-x scrollbar-hide'>
            <img className='snap-end rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205454940-5d30e26c-be36-4963-8ea4-8e2e1af18043.png" alt="" />
            <img className='snap-start rounded-md md:rounded-2xl' src="https://user-images.githubusercontent.com/84104582/205474294-34c8abed-409c-4d61-861d-3879cd1b80bb.png" alt="" />
          </div>
          <p>Built ground-up e-commerce web application using Next.js and features global cart state and Stripe Checkout API.</p>
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