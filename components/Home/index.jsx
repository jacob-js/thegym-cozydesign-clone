import React from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'

function Home() {
  return (
    <div className='font-fauc text-dark-blue'>
        <Hero />
        <About />
        <Testimonials />
    </div>
  )
}

export default Home