import React from 'react'

function OrderTotal({ cart }) {

    const subTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    const shipping = 15.00;
    const tax = 0.08;

    const finalTotal = cart.length > 0 ? subTotal + shipping + tax : 0; 

  return (
    <div className='p-4 border border-neutral-300 rounded-md shadow-xs'>
        <h1 className='text-xl font-bold mb-4'>Order Total</h1>

        <div className='w-full flex flex-col gap-2'>
            <div className='w-full flex items-center justify-between gap-2'>
                <h3 className='text-md font-semibold'>Subtotal</h3>
                <span className='text-md text-neutral-500'>${subTotal.toFixed(2)}</span>
            </div>

            <div className='w-full flex items-center justify-between gap-2'>
                <h3 className='text-md font-semibold'>Shipping</h3>
                <span className='text-md text-neutral-500'>
                    {
                        cart.length > 0 ? `$${shipping.toFixed(2)}` : '$0.00'
                    }
                </span>
            </div>

            <div className='w-full flex items-center justify-between gap-4'>
                <h3 className='text-md font-semibold'>Tax (8%)</h3>
                <span className='text-md text-neutral-500'>${tax.toFixed(2)}</span>
            </div>

            <div className='h-[1px] mt-2 w-full bg-neutral-300'></div>

            <div className='w-full flex items-center justify-between gap-4'>
                <h2 className='text-xl font-bold'>Total</h2>
                <span className='text-xl font-bold'>${finalTotal.toFixed(2)}</span>
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