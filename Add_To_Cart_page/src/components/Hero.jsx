import React from 'react'
import Filterbar from './Filterbar'

function Hero({searchProduct, setSearchProduct, filterProduct, setFilterProduct}) {

  return (
    <div className='flex flex-col flex-wrap gap-8 lg:gap-12 w-full py-6 px-4 sm:px-12 lg:px-24 xl:px-40'>
        <Filterbar 
        searchProduct={searchProduct} 
        setSearchProduct={setSearchProduct}
        filterProduct={filterProduct}
        setFilterProduct={setFilterProduct}
        />

        <div className='flex flex-col gap-6 lg:flex-row'>
            <div className='flex flex-col gap-4 md:gap-6 lg:gap-8 w-full'>
                <h2 className='text-3xl font-bold md:text-4xl lg:text-5xl'>Unleash Your Style <br />Shop the Latest <br />Trend </h2>
                <p className='text-sm max-w-md lg:text-md text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ad possimus. Ab recusandae quasi quos ad non ipsa voluptatibus eius!</p>

                <div className='flex items-center'>
                    <button className='px-12 py-4 bg-neutral-900 text-white text-md font-semibold rounded-full'>Shop Now</button>
                    <div className='flex items-center justify-center px-5 py-4 bg-neutral-900 text-white rounded-full'>
                        <i class="ri-arrow-right-up-line"></i>
                    </div>
                </div>
            </div>

            <div className='h-full w-full rounded-3xl overflow-hidden'>
                <img 
                className='w-full h-full object-cover object-center'
                src="https://plus.unsplash.com/premium_photo-1687294575742-27c7f9fd6935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8" alt="" />
            </div>
        </div>

        <div className='w-full grid grid-cols-3 gap-4'>

            <div className='h-60 overflow-hidden rounded-3xl shadow-xs'>
                <img 
                className='h-full w-full object-cover object-center'
                src="https://images.unsplash.com/photo-1680003266512-eebf9ba167b3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="#" />
            </div>

            <div className='h-60 overflow-hidden rounded-3xl shadow-xs'>
                <img 
                className='h-full w-full object-cover object-center'
                src="https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fEZhc2hpb24lMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D" alt="#" />
            </div>

            <div className='h-60 text-center flex flex-col gap-2 items-center justify-center rounded-3xl border-2 border-neutral-300 shadow-xs'>
                <p className='text-2xl font-bold'>Model wearing <br /> full out fits</p>
                <button className='px-6 py-2 text-sm text-white bg-neutral-900 rounded-lg'>Explore Fasshion</button>
            </div>

        </div>

    </div>
  )
}

export default Hero