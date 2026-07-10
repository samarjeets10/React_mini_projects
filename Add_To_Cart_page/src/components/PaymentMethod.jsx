import React from 'react'

function PaymentMethod() {
  return (
    <div className='w-full p-6 border border-neutral-300 rounded-md shadow-xs'>
        <h1 className='text-xl font-bold mb-4'>Payment Method</h1>

        <div className='w-full flex flex-col gap-4'>

            <div className='w-full p-3 flex items-center gap-2 border border-neutral-300 rounded-sm'>
                <input className='cursor-pointer' type="radio" />
                <i class="ri-bank-card-line"></i>
                <p className='text-sm font-semibold'>Credit/Debit Card</p>
            </div>

            <div className='w-full p-3 flex items-center gap-2 border border-neutral-300 rounded-sm'>
                <input className='cursor-pointer' type="radio" />
                <i class="ri-paypal-line"></i>
                <p className='text-sm font-semibold'>UPI Payment</p>
            </div>
            
            <div className='w-full p-3 flex items-center gap-2 border border-neutral-300 rounded-sm'>
                <input className='cursor-pointer' type="radio" />
                <i class="ri-apple-line"></i>
                <p className='text-sm font-semibold'>Apple Pay</p>
            </div>

        </div>

        <form className='w-full py-4'>
            <div className='py-2'>
                <h3 className='text-md mb-2'>Card Number</h3>
                <input 
                className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                required 
                type="text" 
                placeholder='eg. 1234 5678 9012 3456' />
            </div>
            
            <div className='w-full flex flex-col justify-between gap-4 sm:flex-row'>

                <div className='py-2 w-full'>
                    <h3 className='text-md mb-2'>Expiry Date</h3>
                    <input 
                    className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                    required 
                    type="date" 
                    placeholder='eg. Mumbai' />
                </div>

                <div className='py-2 w-full'>
                    <h3 className='text-md mb-2'>CVC</h3>
                    <input 
                    className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                    required 
                    type="text" 
                    placeholder='eg. 123' />
                </div>
            </div>

            <div className='py-2'>
                <h3 className='text-md mb-2'>Name on Card</h3>
                <input 
                className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                required 
                type="text" 
                placeholder='eg. Jhon Doe' />
            </div>

        </form>
    </div>
  )
}

export default PaymentMethod