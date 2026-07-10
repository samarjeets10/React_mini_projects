import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ItemsList from '../components/ItemsList'
import products from '../assets/productsData'

function ProductsPage({addToCart}) {

  const [searchProduct, setSearchProduct] = useState("");
  const [filterProduct, setFilterProduct] = useState("all");

  const displayProductsList = products.filter((product) => {
    const searchMatch = product.name.toLowerCase().includes(searchProduct.toLowerCase());
    const filterMatch = filterProduct === 'all' || product.category === filterProduct;

    return searchMatch && filterMatch;
  })
  

  return (
    <div className='w-full min-h-screen relative bg-neutral-200'>
      <Navbar />
      <Hero
      searchProduct={searchProduct}
      setSearchProduct={setSearchProduct}
      filterProduct={filterProduct}
      setFilterProduct={setFilterProduct}
      />
      <ItemsList displayList={displayProductsList} addToCart={addToCart} />
    </div>
  )
}

export default ProductsPage