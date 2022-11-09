import React from 'react'
import About from './components/About'
import Clients from './components/Clients'
import CTA from './components/CTA'
import Hero from './components/Hero'
import Sdd from './components/Sdd'
import Testimonials from './components/Testimonials'

function Home() {
  return (
    <div className='font-fauc text-dark-blue'>
        <Hero />
        <About />
        <Testimonials />
        <Clients />
        <Sdd />
        <CTA />
    </div>
  )
}

export default Home