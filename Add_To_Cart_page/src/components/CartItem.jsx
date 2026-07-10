import React from 'react'

function CartItem({item, increaseQuantity, decreaseQuantity, removeFromCart}) {
  return (
    <div className='w-full p-4 border border-neutral-300 rounded-xl'>
        <div className='w-full flex gap-2'>
            <div className='overflow-hidden rounded-xl'>
                <img 
                className='h-30 w-40 object-cover object-center'
                src={item.image} alt={item.name} />
            </div>

            <div className='h-full p-2 flex flex-col gap-2'>
                <h2 className='text-lg font-bold'>{item.name}</h2>
                <div className='w-full flex items-center gap-4'>
                    <p className='text-md text-neutral-400'>Size:</p>
                    <div className='flex items-center gap-2'>
                        {
                            item.size.map((size) => (
                                <span className='px-1 bg-neutral-300 text-xs text-neutral-600 rounded-lg'>{size}</span>
                            ))
                        }
                    </div>
                </div>
                
                <div className='w-full flex items-center justify-between gap-4'>
                    <h3 className='text-lg font-bold'>$<span>{item.price}</span></h3>
                    <div className='flex items-center gap-4'>
                        <button 
                        className='px-1 text-white text-sm bg-neutral-900 border-none rounded-sm cursor-pointer font-semibold'
                        onClick={() => decreaseQuantity(item.id)}
                        ><i class="ri-subtract-line"></i></button>
                        <span className='text-md font-semibold'>{item.quantity}</span>
                        <button 
                        className='px-1 text-white text-sm bg-neutral-900 border-none rounded-sm cursor-pointer font-semibold'
                        onClick={() => increaseQuantity(item.id)}
                        ><i class="ri-add-line"></i> </button>
                    </div>
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

                <button 
                onClick={() => removeFromCart(item.id)}
                className='px-3 py-2 text-white font-semibold bg-neutral-900 rounded-full border-none cursor-pointer'>
                    <i class="ri-delete-bin-6-line"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem