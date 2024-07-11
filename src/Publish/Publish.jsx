import React from 'react'
import Navbar from '../component/Navbar'
import Publish from '../component/Publish'
import Footer from '../component/Footer'

function PublishBook() {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Publish />
      </div>
      <Footer />

    </div>
  )
}

export default PublishBook
