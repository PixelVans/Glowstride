import React, { useState } from 'react';
import { PriceSlider } from './RangeSlide';

const FilterSearchResults = () => {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(20000);
  const minRange = 67;
  const maxRange = 20000;

  const handleMaxChange = (event) => setMaxPrice(Math.max(event.target.value, minPrice));
  const handleMinChange = (event) => setMinPrice(Math.min(event.target.value, maxPrice));

  const categories = ['Kids', 'Men', 'Women', 'Footwear', 'Clothing'];
  const brands = ['Nike', 'Jordan', 'Vans', 'Adidas', 'Puma', 'Converse'];

  return (
    <div className='w-full flex flex-col gap-2'>
      <h1 className='text-yellow-300 font-thin mt-5 text-center'>Category</h1> <hr />
      {categories.map((category) => (
        <div key={category} className='text-white font-semibold sm:font-normal p-2 sm:p-2 rounded-md hover:bg-orange-700'>
          {category}
        </div>
      ))}
      <div className='flex justify-between'>
        <h1 className='text-white font-bold mt-2 text-center'>Price</h1>
        <button className='hover:bg-white hover:text-black px-4 rounded-md text-orange-400 text-sm'>Apply</button>
      </div>
      <div className='text-white p-2 sm:p-2 rounded-md hover:bg-slate-900'>
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
      {brands.map((brand) => (
        <div key={brand} className='text-white p-2 font-semibold sm:font-normal sm:p-2 rounded-md hover:bg-orange-700'>
          {brand}
        </div>
      ))}
    </div>
  );
};

export default FilterSearchResults;
