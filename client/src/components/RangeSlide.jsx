import React from 'react';

export const PriceSlider = ({ minPrice, maxPrice, minRange, maxRange, handleMinChange, handleMaxChange }) => {
  return (
    <div className='price-range-container relative p-2'>
      <div className='relative'>
        {/* Background indicating selected range */}
        <div
          className='paint absolute top-0 left-0 h-2 bg-orange-600'
          style={{
            left: `${((minPrice - minRange) / (maxRange - minRange)) * 100}%`,
            width: `${((maxPrice - minPrice) / (maxRange - minRange)) * 100}%`,
          }}
        ></div>
        {/* Minimum price slider */}
        <input
          type="range"
          value={minPrice}
          min={minRange}
          max={maxRange}
          onChange={handleMinChange}
          className='ps absolute w-full h-2 bg-gray-300 rounded-md appearance-none'
          style={{ zIndex: 2 }}
        />
        {/* Maximum price slider */}
        <input
          type="range"
          value={maxPrice}
          min={minRange}
          max={maxRange}
          onChange={handleMaxChange}
          className='ps absolute w-full h-2 bg-gray-300 rounded-md appearance-none'
          style={{ zIndex: 2 }}
        />
      </div>
    </div>
  );
};
