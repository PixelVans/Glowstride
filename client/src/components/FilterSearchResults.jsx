import React, { useState } from 'react'
import { PriceSlider } from './RangeSlide';


const FilterSearchResults = () => {

    
  const [minPrice, setMinPrice] = useState(100); // Starting minimum price
  const [maxPrice, setMaxPrice] = useState(20000); // Starting maximum price
  const minRange = 67; // Define the minimum range
  const maxRange = 20000; // Define the maximum range

  
  const handleMaxChange = (event) => {
    const value = Math.max(event.target.value, minPrice);
    setMaxPrice(value);
  };


  const handleMinChange = (event) => {
    const value = Math.min(event.target.value, maxPrice);
    setMinPrice(value);
  };
  return (
    <div className='w-full flex flex-col gap-2'>
    <h1 className='text-yellow-300 font-thin mt-5 text-center'>Category</h1> <hr />
      <div className='text-white font-thin p-2 sm:p-2 rounded-md hover:bg-orange-700'>Kids</div>
      <div className='text-white font-thin p-2 sm:p-2 rounded-md hover:bg-orange-700'>Men</div>
      <div className='text-white font-thin p-2 sm:p-2 rounded-md hover:bg-orange-700'>Women</div>
      <div className='text-white font-thin p-2 sm:p-2 rounded-md hover:bg-orange-700'>Footwear</div>
      <div className='text-white p-2 sm:p-2 rounded-md hover:bg-orange-700'>Clothing</div>
              <div className='flex justify-between'>
                  <h1 className='text-white font-semibold mt-2 text-center'>Price</h1>  
                  <button className='hover:bg-white hover:text-black px-4 rounded-md text-orange-400 text-sm'>Apply</button>      
         </div>
      
      <div className='text-white p-2 sm:p-2 rounded-md hover:bg-slate-900'>

        {/* Use PriceSlider component */}
                  <PriceSlider
                      className="mb-2"
          minPrice={minPrice}
          maxPrice={maxPrice}
          minRange={minRange}
          maxRange={maxRange}
          handleMinChange={handleMinChange}
          handleMaxChange={handleMaxChange}
        />
      </div>
      <div className='flex justify-between text-white mt-4 mb-5'>
      <span>Min: Ksh {minPrice.toLocaleString()}</span>
      <span>Max: Ksh <span className='text-orange-400'>{maxPrice.toLocaleString()}</span></span>

              </div>
             
              <h1 className='text-yellow-300 font-thin mt-5 text-center'>Popular Brands</h1> <hr />
      <div className='text-white p-2 font-thin sm:p-2 rounded-md hover:bg-orange-700'>Nike</div>
      <div className='text-white p-2 font-thin sm:p-2 rounded-md hover:bg-orange-700'>Jordan</div>
      <div className='text-white p-2 font-thin sm:p-2 rounded-md hover:bg-orange-700'>Vans</div>
      <div className='text-white p-2 font-thin sm:p-2 rounded-md hover:bg-orange-700'>Adidas</div>
      <div className='text-white p-2 font-thin sm:p-2 rounded-md hover:bg-orange-700'>Puma</div>
      <div className='text-white p-2 font-thin sm:p-2 rounded-md hover:bg-orange-700'>Converse</div>
          </div>
  )
}

export default FilterSearchResults