import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Stephen An</title>
        <meta name="description" content="Stephen An - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mx-10 md:mx-40 space-y-10 md:space-y-20'>
        <section className='snap-start' id='hero'>
          <Hero />
        </section>
        <section className='snap-start' id='about'>
          <About />
        </section>
        <section className='snap-start' id='portfolio'>
          <Portfolio />
        </section>
        {/* <section className='snap-end' id='footer'>
          <Footer />
        </section> */}
      </main>
    </div>
  )
}
