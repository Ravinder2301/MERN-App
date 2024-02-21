import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SetInterval from './SetInterval'

const HeroSection = ({auth}) => {

  return (
    <>
      <div className='min-h-calc-vh bg-[url("./assets/Banner2.jpg")] bg-no-repeat bg-cover bg-center flex items-center justify-center'>
        <div className='rounded bg-opacity-50 backdrop-blur-xl sm:backdrop-blur-0 sm:bg-opacity-0 p-3 py-4'>
          <h1 className='text-4xl md:text-7xl text-red-50 font-bold'>Food Website</h1>
          <p className='text-3xl md:text-5xl text-black my-3'>Best Food In India</p>
          <Link to='/' className='bg-gradient-to-tl from-gray-800 to-gray-300 md:px-6 md:py-3 p-2 text-xl rounded-xl'>
              ORDER NOW
           </Link>
            
        </div>
      </div>
      {/* <SetInterval/> */}
    </>
    
  )
}

export default HeroSection
