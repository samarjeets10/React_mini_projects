import React from 'react'
import Title from './Title'
import ProductCard from './ProductCard'

function ItemsList({displayList, addToCart}) {
  return (
    <div className='flex flex-col gap-8 w-full py-4 px-4 sm:px-12 lg:px-24 xl:px-40'>
        <Title />
        
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6 w-full'>
          {
            displayList.map((product, index) => (
              <ProductCard key={product.id ?? index} product={product}
              addToCart={addToCart}
              />
            ))
          }
        </div>

    </div>
  )
}

export default ItemsList