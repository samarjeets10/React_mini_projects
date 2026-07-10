import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(cart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
      )
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }


  }

  return (
    <>
       <Routes>
          <Route path='/' element={<ProductsPage addToCart={addToCart} />} />
          <Route path='/cart' element={<CartPage cart={cart} />} />
       </Routes>
    </>
  )
}

export default App