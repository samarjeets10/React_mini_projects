import React from 'react'
import Navbar from '../components/Navbar'
import Filterbar from '../components/Filterbar'
import Cart from '../components/Cart'

function CartPage({ cart }) {

  return (
    <div className='w-full min-h-screen relative bg-neutral-200'>
      <Navbar cart={cart} />
      <Cart cart={cart} />
    </div>
  )
}

export default CartPage