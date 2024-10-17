import React, { useEffect, useState } from 'react';
import { PriceSlider } from '../components/RangeSlide';  // Import the PriceSlider component
import { searchResults } from '../utils/data';
import { useLocation, useNavigate } from 'react-router-dom';




export const Searchpage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const [minPrice, setMinPrice] = useState(100); // Starting minimum price
  const [maxPrice, setMaxPrice] = useState(20000); // Starting maximum price
  const minRange = 67; // Define the minimum range
  const maxRange = 20000; // Define the maximum range

  // to fetch search results from the database



  const handleMinChange = (event) => {
    const value = Math.min(event.target.value, maxPrice);
    setMinPrice(value);
  };
  

    //add to cart logic
    const handleAddToCart = (item, e) => {
      e.stopPropagation(); // Prevent the div click from firing
      addToCart(item); // Call the addToCart function with the item
  };
  //view item logic
  const navigate = useNavigate();
  const handleDivClick = (id) => {
    navigate(`/post/${id}`);
  };
  
  const handleMaxChange = (event) => {
    const value = Math.max(event.target.value, minPrice);
    setMaxPrice(value);
  };

  return (
    <> 
    <div className='flex flex-col h-full  sm:flex-row'>
        {/* sort categories */}
        
      <div className='w-full md:w-2/6 lg:w-1/6 p-2 sm:p-5 shadow-sm shadow-slate-600 hidden sm:block'>
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
              <div className='h-9'></div>
        </div> 
        
        {/* results area */}
        <div className='w-full lg:w-5/6 md:w-4/6 items-center  '>
          <div className='flex justify-between'>
            <h1 className='ml-5  my-2 text-white text-xs font-thin'>Found 1200 results</h1>
            <button className='text-orange-300 mr-4 flex sm:hidden'>Filter results</button>
          </div>
          

        <div className='flex  '>
            <div className='lg:mx-auto lg:p-5 md:p-1 flex flex-wrap '>
            {searchResults.map((item) => (
              <div
              onClick={() => handleDivClick(item.id)}
                key={item.id} className='rounded-md p-[3px] mb-5 shadow-black shadow-md  mx-auto w-1/2 sm:w-[170px] '>
            <img src={item.img} alt={item.name} className="w-full rounded-md h-[180px] object-cover" />
            <p className='ml-2 mt-1 text-[13px] font-thin text-white'>{item.name}</p>
            <p className='ml-2 my-2 text-sm font-thin text-white'>Ksh <span className='font-thin'>{item.price.toLocaleString()}</span></p>
            <div className='flex flex-row-reverse'>
              
                  <button
                    onClick={(e) => handleAddToCart(item, e)}
                    className='text-orange-400 text-3xl mr-3 mb-1 rounded-full w-5'>+</button>
            </div>
          </div>
        ))}
          </div>
          </div>
            
          {/* pagination */}
          <div className='flex items-center text-center  gap-6 mt-9 mb-5 justify-center'>

            <button className='text-white text-center mx-3'>Prev</button>
            <button className='text-white text-center'>1</button>
            <button className='text-white text-center'>2</button>
            <button className='text-white text-center'>3</button>
            <button className='text-white text-center'>4</button>
            <button className='text-white text-center mx-3'>Next</button>
           
           </div>
          </div>
      </div>
      </>
  );
};
