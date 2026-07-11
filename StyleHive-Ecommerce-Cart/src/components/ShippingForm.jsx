import React from 'react'

function ShippingForm() {
  return (
    <div className='w-full p-6 border border-neutral-300 rounded-md shadow-xs'>
        <h1 className='text-xl font-bold mb-4'>Shipping Information</h1>
        <form className='w-full'>
            <div className='py-2'>
                <h3 className='text-md mb-2'>Full Name</h3>
                <input 
                className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                required 
                type="text" 
                placeholder='eg. Jhon Doe' />
            </div>
            <div className='py-2'>
                <h3 className='text-md mb-2'>Phone Number</h3>
                <input 
                className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                required 
                type="text" 
                placeholder='+91 00000 00000' />
            </div>
            <div className='py-2'>
                <h3 className='text-md mb-2'>Address</h3>
                <input 
                className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                required 
                type="text" 
                placeholder='eg. 23 bolock, earthplace' />
            </div>

            <div className='w-full flex flex-col justify-between gap-4 sm:flex-row'>

                <div className='py-2 w-full'>
                    <h3 className='text-md mb-2'>City</h3>
                    <input 
                    className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                    required 
                    type="text" 
                    placeholder='eg. Mumbai' />
                </div>

                <div className='py-2 w-full'>
                    <h3 className='text-md mb-2'>ZIP Code</h3>
                    <input 
                    className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                    required 
                    type="text" 
                    placeholder='eg. 100212' />
                </div>
            </div>

            <div className='w-full flex flex-col justify-between gap-4 sm:flex-row'>

                <div className='py-2 w-full'>
                    <h3 className='text-md mb-2'>State</h3>
                    <input 
                    className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                    required 
                    type="text" 
                    placeholder='eg. Maharashtra' />
                </div>

                <div className='py-2 w-full'>
                    <h3 className='text-md mb-2'>Country</h3>
                    <input 
                    className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                    required 
                    type="text" 
                    placeholder='eg. India' />
                </div>
            </div>

            <div className='w-full pt-4 flex items-center gap-2'>
                <input className='text-xl cursor-pointer' type="checkbox" />
                <p className='text-sm'>Save this information for next time</p>
            </div>
        </form>
    </div>
  )
}

export default ShippingForm