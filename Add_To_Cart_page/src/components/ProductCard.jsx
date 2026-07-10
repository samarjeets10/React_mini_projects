import React from 'react'

function ProductCard({product, addToCart}) {
  return (
    <div className='flex flex-col gap-2 p-4 bg-neutral-100 rounded-xl'>
        <div className='h-[200px] w-full rounded-xl overflow-hidden'>
          <img 
          className='h-full w-full object-cover object-center'
          src={product.image} alt="" />
        </div>
        <div className=''>
          <h2 className='text-lg font-semibold'>{product.name}</h2>
          <p className='text-sm'>Lorem ipsum dolor sit.</p>
        </div>

        <div className='w-full flex items-center justify-between'>
          <h2 className='text-xl font-bold'>${product.price}</h2>

          <button 
          className='px-4 py-2 text-xs bg-gray-900 cursor-pointer text-white rounded-full'
          onClick={() => addToCart(product)}
          >Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard