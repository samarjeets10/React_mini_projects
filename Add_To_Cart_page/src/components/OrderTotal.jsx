import React from 'react'

function OrderTotal() {
  return (
    <div className='p-4 border border-neutral-300 rounded-md shadow-xs'>
        <h1 className='text-xl font-bold mb-4'>Order Total</h1>

        <div className='w-full flex flex-col gap-2'>
            <div className='w-full flex items-center justify-between gap-2'>
                <h3 className='text-md font-semibold'>Subtotal</h3>
                <span className='text-md text-neutral-500'>$2096.00</span>
            </div>

            <div className='w-full flex items-center justify-between gap-2'>
                <h3 className='text-md font-semibold'>Shipping</h3>
                <span className='text-md text-neutral-500'>$15.00</span>
            </div>

            <div className='w-full flex items-center justify-between gap-4'>
                <h3 className='text-md font-semibold'>Tax</h3>
                <span className='text-md text-neutral-500'>$167.68</span>
            </div>

            <div className='h-[1px] mt-2 w-full bg-neutral-300'></div>

            <div className='w-full flex items-center justify-between gap-4'>
                <h2 className='text-xl font-bold'>Total</h2>
                <span className='text-xl font-bold'>$2278.68</span>
            </div>
        </div>

        <div className='w-full mt-4 px-2 py-1 text-xl text-blue-700 flex items-center gap-2 bg-blue-300/20 backdrop:blur-lg rounded-lg'>
            <i class="ri-truck-line"></i>
            <p className='text-sm'>Free shipping on order over $500</p>
        </div>
    </div>
  )
}

export default OrderTotal