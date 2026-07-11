import React, { useState } from 'react'

function ProductCard({product, addToCart}) {

  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000)
  }

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
          className={`w-28 px-4 py-2 text-sm font-semibold ${added ? 'bg-gray-400' : 'bg-neutral-900'} cursor-pointer text-white rounded-full`}
          onClick={handleAddToCart}
          >
            {
              added ? "Added" : "Add to Cart"
            }
          </button>
        </div>
    </div>
  )
}

export default ProductCard