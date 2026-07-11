import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }

  });

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(cart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
      )
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }

  }

  const increaseQuantity = (productId) => {
    setCart(cart.map((item) => item.id === productId ? {...item, quantity: item.quantity + 1} : item));
  }


  const decreaseQuantity = (productId) => {
    setCart(cart.map((item) =>
      item.id === productId ? {...item, quantity: item.quantity - 1} : item).filter((item) => item.quantity > 0)
    );
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])


  return (
    <>
       <Routes>
          <Route path='/' element={<ProductsPage addToCart={addToCart} cart={cart} />} />
          <Route path='/cart' element={<CartPage cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />} />
       </Routes>
    </>
  )
}

export default App