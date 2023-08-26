import React from 'react'
import '../public/spinner.css'

const Spinner = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center fixed bg-black opacity-90 bottom-0 left-0 right-0 top-0 z-10'>
        <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
        </div>
    </div>
  )
}

export default Spinner