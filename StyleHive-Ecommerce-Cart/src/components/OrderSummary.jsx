import React from 'react'
import CartItem from './CartItem'
import CartSvg from '../assets/shopping-cart-2-line.svg'

function OrderSummary({cart, increaseQuantity, decreaseQuantity, removeFromCart}) {
  return (
    <div className='p-6 border border-neutral-300 rounded-md shadow-xs'>
        <h1 className='text-xl font-bold mb-4'>Order Summary</h1>
        <div className='flex flex-col gap-4'>
          {
            cart.length === 0 ? (
              <div className='w-full h-20 p-4 bg-gray-300 flex items-center justify-center rounded-lg'>
                <p className='text-md font-normal text-neutral-600'>Your Cart is empty!</p>
              </div>
            ) : (
                cart.map((item) => (
                <CartItem key={item.id} item={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />
              ))
            )
          }
        </div>
    </div>
  )
}

export default OrderSummary