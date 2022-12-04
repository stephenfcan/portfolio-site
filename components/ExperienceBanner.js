import Link from 'next/link'
import React from 'react'

function ExperienceBanner({ date, title, company, link, city }) {
  return (
    <div>
      <div className='md:flex text-sm uppercase tracking-wider justify-between'>
        <h1>{date}</h1>
        <h1>{title}</h1>
        <Link href={link}>
          <h1 className='button'>{company}</h1>
        </Link>
        <h1>{city}</h1>
      </div>
    </div>
  )
}

export default ExperienceBanner