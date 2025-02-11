import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PriceSlider } from './RangeSlide';

const MobileFilterModal = ({ onClose }) => {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(20000);
  const minRange = 67;
  const maxRange = 20000;

  const handleMaxChange = (event) => {
    const value = Math.max(event.target.value, minPrice);
    setMaxPrice(value);
  };

  const handleMinChange = (event) => {
    const value = Math.min(event.target.value, maxPrice);
    setMinPrice(value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 lg:hidden ">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-[90%] max-w-md mt-9">
        <div className="flex justify-between items-center ">
          <h1 className="text-yellow-300 font-semibold text-lg my-2">Filter</h1>
          <button onClick={onClose} className="text-white text-2xl">
            <AiOutlineClose />
          </button>
        </div>
        <hr className="border-gray-700 my-3" />

        <h1 className="text-yellow-300 font-thin text-center">Category</h1>
              <div onClick={onClose}
                  className="space-y-2 my-2">
          {['Kids', 'Men', 'Women', 'Footwear', 'Clothing'].map((category) => (
            <div key={category} className="text-white font-semibold p-2 rounded-md hover:bg-orange-700 cursor-pointer">
              {category}
            </div>
          ))}
        </div>

        <h1 className="text-white font-bold my-3 text-center">Price</h1>
        <div className="flex justify-between mb-3">
          <span className="text-white">Min: Ksh {minPrice.toLocaleString()}</span>
          <span className="text-white">
            Max: Ksh <span className="text-orange-400">{maxPrice.toLocaleString()}</span>
          </span>
        </div>

        <PriceSlider
          className="mb-4"
          minPrice={minPrice}
          maxPrice={maxPrice}
          minRange={minRange}
          maxRange={maxRange}
          handleMinChange={handleMinChange}
          handleMaxChange={handleMaxChange}
        />

        <h1 className="text-yellow-300 font-thin text-center mt-4">Popular Brands</h1>
              <div onClick={onClose}
                  className="space-y-2 my-2">
          {['Nike', 'Jordan', 'Vans', 'Adidas', 'Puma', 'Converse'].map((brand) => (
            <div key={brand} className="text-white font-semibold p-2 rounded-md hover:bg-orange-700 cursor-pointer">
              {brand}
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-between">
          <button onClick={onClose} className="text-white bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600">
            Cancel
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterModal;
