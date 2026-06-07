import React from 'react'

function Card() {
  return (
    <div className='w-full bg-white border-2 border-neutral-200 rounded-2xl'>
        <div className='w-full h-full px-6 py-8 flex justify-between gap-2'>
            <div className='w-1/2 h-full py-2'>
                <div className='w-full'>
                    <h1 className='text-xl md:text-2xl font-semibold'>Calculate your compound intrest</h1>
                    <p className='text-sm mt-1 md:text-md text-neutral-500'>Compound intrest is where the intrest you earn, earn intrest.</p>
                </div>

                <div className='w-full mt-12'>

                    <div className='w-full flex items-center gap-[2rem]'>

                        <div className='w-1/2'>
                            <h3 className='text-lg font-normal'>Your savings amount</h3>
                            <div className='mt-3 flex items-center gap-3 text-xl'>
                                <i class="ri-money-rupee-circle-line"></i>
                                <input 
                                className='text-[1.2rem] text-green-600 outline-none border-b-2 border-neutral-300'
                                type="text"
                                placeholder='eg. 20000' />
                            </div>
                        </div>

                        <div className='w-1/2'>
                            <h3 className='text-lg font-normal'>Years will be saved</h3>
                            <div className='mt-3 flex items-center gap-3 text-xl'>
                                <input 
                                className='text-[1.2rem] text-green-600 text-md outline-none border-b-2 border-neutral-300'
                                type="text"
                                placeholder='100' />
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-full mt-12'>

                    <div className='w-full flex items-center gap-[2rem]'>

                        <div className='w-1/2 flex flex-col gap-6'>
                            <div className='w-full flex items-center justify-between gap-2'>
                                <h3 className='text-lg'>Rate of return</h3>
                                <span className='text-lg text-green-600'>50%</span>
                            </div>
                            <input
                            className='w-full'
                            type="range" />
                        </div>

                        <div className='w-1/2 flex flex-col gap-4'>
                            <h3 className='text-lg font-normal'>Years will be saved</h3>
                            <div className=' flex items-center gap-3 text-xl'>
                                <input 
                                className='text-[1.2rem] text-green-600 text-md outline-none border-b-2 border-neutral-300'
                                type="text"
                                placeholder='100' />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='w-1/2 h-full p-4 bg-green-800 rounded-2xl text-white'>
                <div className='w-full'>
                    <h3 className='text-lg md:text-xl font-normal'>Your estimated savings</h3>
                    <p className='text-sm mt-1 md:text-md text-neutral-300
                    '>Get estimations</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
