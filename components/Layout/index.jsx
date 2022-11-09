import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div className='font-fauc'>
        <Navbar />
        {children}
        <Footer/>
    </div>
  )
}

export default Layout