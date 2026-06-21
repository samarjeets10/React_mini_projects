import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

  const location = useLocation();

  return (
    <div className='flex items-center justify-between gap-8 px-4 py-4 sm:px-4 lg:px-24 xl:px-40 border-b-2 border-gray-300' >
        
        <div className='text-xl cursor-pointer'>
          <i class="ri-menu-5-line"></i>
        </div>

        <h1 className='text-2xl font-bold'>STYLEHIVE</h1>

        <div className='flex items-center gap-4'>
          <div className='h-[20px] w-[20px] p-4 text-lg font-semibold bg-neutral-300 rounded-full flex items-center justify-center cursor-pointer'>
            <i class="ri-user-3-line"></i>
          </div>

          {
            location.pathname === '/' ? (
                <Link to='/cart'>
                  <div className='h-[20px] w-[20px] p-4 text-lg relative font-semibold bg-neutral-300 rounded-full flex items-center justify-center cursor-pointer'>
                    <i class="ri-shopping-bag-2-line"></i>
                  </div>
                </Link>
            ) : (
                <Link to='/'>
                  <div className='h-[20px] w-[20px] p-4 text-lg relative font-semibold bg-neutral-300 rounded-full flex items-center justify-center cursor-pointer'>
                    <i class="ri-home-2-line"></i>
                  </div>
                </Link>
            )
          }

        </div>

    </div>
  )
}

export default Navbar