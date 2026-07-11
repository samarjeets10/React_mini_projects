import React from 'react'

function PromoCode() {
  return (
    <div className='w-full p-6 border border-neutral-300 rounded-md shadow-xs'>
        <h1 className='text-xl font-bold mb-4'>Promo Code</h1>

        <form className='w-full'>
            <div>
                <input 
                className='px-2 py-2 text-sm w-full border border-neutral-300 rounded-sm outline-none'
                required 
                type="text" 
                placeholder='eg. 1234 5678 9012 3456' />
            </div>
        </form>
    </div>
  )
}

export default PromoCode