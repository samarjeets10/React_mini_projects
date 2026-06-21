import React from 'react'

function Filterbar({searchProduct, setSearchProduct, filterProduct, setFilterProduct}) {



  return (
    <>
        <div className='w-full flex items-center justify-between gap-6'>
            
            <div className='flex items-center gap-4'>
                <div className='flex items-center justify-center'>
                    <input 
                    value={searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}
                    className='w-full px-4 py-1 mx-w-2xl border-2 border-gray-300 rounded-full outline-none' type="text" placeholder='Search..' />
                </div>

                <div className='flex items-center justify-center'>
                    <select 
                    value={filterProduct}
                    onChange={(e) => setFilterProduct(e.target.value)}
                    className='w-full px-2 py-1 mx-w-2xl border-2 text-neutral-600 border-gray-300 rounded-full outline-none' type="text" placeholder='filter'>
                        <option value="all">All</option>
                        <option value="mens">Mens</option>
                        <option value="womens">Womens</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
            </div>

            <div className='flex items-center justify-between gap-4'>
                <div className='flex items-center justify-center px-3 py-1 border-2 rounded-full border-neutral-300 cursor-pointer'>
                    <h3 className='text-sm'>Mens</h3>
                </div>
                <div className='flex items-center justify-center px-3 py-1 border-2 rounded-full border-neutral-300 cursor-pointer'>
                    <h3 className='text-sm'>Womens</h3>
                </div>
                <div className='flex items-center justify-center px-3 py-1 border-2 rounded-full border-neutral-300 cursor-pointer'>
                    <h3 className='text-sm'>Kids</h3>
                </div>
                <div className='flex items-center justify-center px-3 py-1 border-2 rounded-full border-neutral-300 cursor-pointer'>
                    <h3 className='text-sm'>Winter Collection</h3>
                </div>
                <div className='flex items-center justify-center px-3 py-1 border-2 rounded-full border-neutral-300 cursor-pointer'>
                    <h3 className='text-sm'>Jackets</h3>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Filterbar