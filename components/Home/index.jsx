import React from 'react'
import About from './components/About'
import Hero from './components/Hero'

function Home() {
  return (
    <div className='font-fauc text-dark-blue'>
        <Hero />
        <About />
    </div>
  )
}

export default Home