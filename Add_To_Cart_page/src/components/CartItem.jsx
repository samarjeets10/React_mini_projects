import React from 'react'

function CartItem({item}) {
  return (
    <div className='w-full p-4 border border-neutral-300 rounded-xl'>
        <div className='w-full flex gap-2'>
            <div className='overflow-hidden rounded-xl'>
                <img 
                className='h-30 w-30 object-cover object-center'
                src={item.image} alt={item.name} />
            </div>

            <div className='h-full p-2 flex flex-col gap-2'>
                <h2 className='text-lg font-bold'>{item.name}</h2>
                <p className='text-sm text-neutral-400'>Size: <span>{item.size}</span></p>
                
                <div className='w-full flex items-center justify-between gap-4'>
                    <h3 className='text-lg font-bold'>$<span>{item.price}</span></h3>
                    <p className='text-sm font-semibold'>Qty: <span className='text-sm text-neutral-400'>{item.quantity}</span></p>
                </div>
            </div>

        </div>

        <div className='h-[1px] mt-4 w-full bg-neutral-300'></div>

        <div className='w-full pt-4 flex items-center justify-between gap-4'>
            <div>
                <p className='text-md text-neutral-400'>Estimate Total</p>
                <h3 className='text-lg font-bold'>$<span>{item.price * item.quantity}</span></h3>
            </div>

            <div className='flex items-center gap-2'>
                <button className='px-6 py-2 text-white font-semibold bg-neutral-900 rounded-full border-none cursor-pointer'>Buy</button>

                <button className='px-3 py-2 text-white font-semibold bg-neutral-900 rounded-full border-none cursor-pointer'>
                    <i class="ri-delete-bin-6-line"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem