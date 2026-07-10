import React from 'react'
import ShippingForm from './ShippingForm'
import OrderTotal from './OrderTotal'
import OrderSummary from './OrderSummary'
function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  return (
    <div className='w-full px-4 py-8 sm:px-4 lg:px-24 xl:px-40'>

        <div className='w-full flex gap-6 flex-col-reverse sm:flex-row'>

            <div className='w-full sm:w-1/2'>
                {/* shipping Info section */}
                <ShippingForm />
            </div>

            <div className='w-full sm:w-1/2 flex flex-col gap-4'>
                
                {/* Order Cart Summary component */}
                <OrderSummary cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />

                {/* Order Total component */}
                <OrderTotal cart={cart} />

                <div className='w-full p-4 border border-neutral-300 rounded-md shadow-xs flex items-center gap-4'>
                    <div className='text-green-500 flex items-center gap-2'>
                        <i class="ri-shield-line"></i>
                        <p className='text-sm text-neutral-500'>Secure Payment</p>
                    </div>

                    <div className='text-red-500 flex items-center gap-2'>
                        <i class="ri-rotate-lock-fill"></i>
                        <p className='text-sm text-neutral-500'>SSL Encripted</p>
                    </div>

                    <div className='text-blue-500 flex items-center gap-2'>
                        <i class="ri-truck-line"></i>
                        <p className='text-sm text-neutral-500'>8 days return polacy</p>
                    </div>
                </div>

                <div className='w-full py-2 text-white bg-neutral-900 flex items-center justify-center rounded-md cursor-pointer shadow-xs'>
                    <h2 className='text-md'>Place Order</h2>
                </div>

                <div className='w-full py-2 border border-neutral-300 flex items-center justify-center rounded-md cursor-pointer shadow-xs'>
                    <h2 className='text-md'>Continue Shopping</h2>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Cart