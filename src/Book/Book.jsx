import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Book from '../component/Book'

function book() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Book />
      </div>
      <Footer />

    </div>
  )
}

export default book