import React from 'react'
import Filterbar from './Filterbar'

function Hero({searchProduct, setSearchProduct, filterProduct, setFilterProduct}) {

  return (
    <div className='flex flex-col flex-wrap gap-8 w-full py-6 px-4 sm:px-12 lg:px-24 xl:px-40'>
        <Filterbar 
        searchProduct={searchProduct} 
        setSearchProduct={setSearchProduct}
        filterProduct={filterProduct}
        setFilterProduct={setFilterProduct}
        />

        <div className='flex flex-col lg:flex-row gap-6 py-8'>
            <div className='flex flex-col gap-8 w-full'>
                <h2 className='text-2xl font-bold md:text-4xl lg:text-5xl'>Unleash Your Style <br />Shop the Latest <br />Trend </h2>
                <p className='text-sm lg:text-md text-neutral-500 max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ad possimus. Ab recusandae quasi quos ad non ipsa voluptatibus eius!</p>

                <div className='flex items-center'>
                    <button className='px-12 py-4 bg-neutral-900 text-white text-md font-semibold rounded-full'>Shop Now</button>
                    <div className='flex items-center justify-center px-5 py-4 bg-neutral-900 text-white rounded-full'>
                        <i class="ri-arrow-right-up-line"></i>
                    </div>
                </div>
            </div>

            <div className='h-full w-full rounded-2xl overflow-hidden'>
                <img 
                className='w-full h-full object-cover object-center'
                src="https://plus.unsplash.com/premium_photo-1687294575742-27c7f9fd6935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Hero