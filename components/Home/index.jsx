import React from 'react'
import About from './components/About'
import Clients from './components/Clients'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'

function Home() {
  return (
    <div className='font-fauc text-dark-blue'>
        <Hero />
        <About />
        <Testimonials />
        <Clients />
    </div>
  )
}

export default Home