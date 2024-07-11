import React from 'react'
import Navbar from '../component/Navbar'
import About from '../component/About'
import Footer from '../component/Footer'

function Abouts() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <About/>
    </div>
    <Footer />
    </div>
  )
}

export default Abouts
