import React from 'react'
import Filterbar from './Filterbar'

function Hero() {
  return (
    <div className='flex flex-col flex-wrap gap-8 w-full py-6 px-4 sm:px-12 lg:px-24 xl:px-40'>
        <Filterbar />
    </div>
  )
}

export default Hero