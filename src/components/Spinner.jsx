import React from 'react'
import '../public/spinner.css'

const Spinner = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center fixed bg-black opacity-90 bottom-0 left-0 right-0 top-0 z-10'>
        <i className="fa-duotone fa-spinner-third fa-spin text-white text-5xl"></i>
    </div>
  )
}

export default Spinner