import React from 'react'
import CartItem from './CartItem'

function OrderSummary({cart}) {
  return (
    <div className='p-6 border border-neutral-300 rounded-md shadow-xs'>
        <h1 className='text-xl font-bold mb-4'>Order Summary</h1>
        <div className='flex flex-col gap-4'>
          {
            cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          }
        </div>
    </div>
  )
}

export default OrderSummary