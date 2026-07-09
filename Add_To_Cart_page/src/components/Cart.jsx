import React from 'react'

function Cart() {
  return (
    <div className='w-full px-4 py-8 sm:px-4 lg:px-24 xl:px-40'>

        <div className='w-full flex gap-6 flex-col-reverse sm:flex-row'>

            <div className='w-full sm:w-1/2'>

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

            </div>

            <div className='w-full sm:w-1/2 flex flex-col gap-4'>
                
                <div className='p-6 border border-neutral-300 rounded-md shadow-xs'>
                    <h1 className='text-xl font-bold mb-4'>Order Summary</h1>

                    <div className='w-full p-4 border border-neutral-300 rounded-xl'>
                        <div className='w-full flex gap-2'>
                            <div className='overflow-hidden rounded-xl'>
                                <img 
                                className='h-30 w-30 object-cover object-center'
                                src="https://plus.unsplash.com/premium_photo-1760179325525-ec3edff26677?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>

                            <div className='h-full p-2 flex flex-col gap-2'>
                                <h2 className='text-lg font-bold'>Tape Winter Coat</h2>
                                <p className='text-sm text-neutral-400'>Size: <span>M</span></p>
                                <h3 className='text-lg font-bold'>$<span>235,00</span></h3>
                            </div>

                        </div>

                        <div className='h-[1px] mt-4 w-full bg-neutral-300'></div>

                        <div className='w-full pt-4 flex items-center justify-between gap-4'>
                            <div>
                                <p className='text-md text-neutral-400'>Estimate Total</p>
                                <h3 className='text-lg font-bold'>$<span>235,00</span></h3>
                            </div>

                            <div className='flex items-center gap-2'>
                                <button className='px-6 py-2 text-white font-semibold bg-neutral-900 rounded-full border-none cursor-pointer'>Buy</button>

                                <button className='px-3 py-2 text-white font-semibold bg-neutral-900 rounded-full border-none cursor-pointer'>
                                    <i class="ri-delete-bin-6-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

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