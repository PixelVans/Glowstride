import React, { useEffect, useState } from 'react';

import { searchResults } from '../utils/data';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterSearchResults from '../components/FilterSearchResults';
import MobileFilterModal from '../components/MobileFilterModal';

export const Searchpage = () => {
  const { pathname } = useLocation();
  const [filterPopup, setFilterPopup] = useState(false)
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Add to cart logic
  const handleAddToCart = (item, e) => {
    e.stopPropagation(); // Prevent the div click from firing
    addToCart(item); // Call the addToCart function with the item
  };

  // View item logic
  const navigate = useNavigate();
  const handleDivClick = (id) => {
    navigate(`/post/${id}`);
  };


  const pages = [1, 2, 3, 4];

  return (
    <> 
      <div className='flex flex-col h-full lg:mx-9 sm:mx-1 mt-1 relative md:flex-row'>
        
        {/* Filter results for desktop */}
      <div className='w-full  lg:w-1/4 xl:w-1/5 md:w-1/3 p-2 sm:p-5 shadow-sm shadow-slate-600 hidden lg:block'>
         <FilterSearchResults />
              <div className='h-9'></div>
        </div> 

        

          {/* Filter search results for mobile phones */}
          <div>
    

    {filterPopup && <MobileFilterModal onClose={() => setFilterPopup(false)} />}
  </div>


        
        {/* Results area */}
        <div className='w-full lg:w-5/6 items-center'>
          <div className='flex justify-between'>
            <h1 className='ml-5 my-2 text-white text-xs '>Found 1200 results</h1>
            <button onClick={() => setFilterPopup(!filterPopup)}
              className='text-orange-300 mr-4  flex lg:hidden hover:underline'>Filter results</button>
          </div>

        <div className=''>
            <div className='lg:mx-auto lg:p-5 md:p-1 flex flex-wrap justify-center md:gap-4 sm:gap-2 '>
            {searchResults.map((item) => (
              <div
              onClick={() => handleDivClick(item.id)}
                key={item.id} className='rounded-md p-[3px] mb-5  shadow-black shadow-md w-1/2 lg:w-[200px] md:w-[240px] '>
                <img src={item.img} alt={item.name} className="w-full rounded-md h-[190px] lg:h-[210px] md:h-[250px]  object-cover" />
                <p className='ml-2 mt-1 text-[13px]  text-white'>{item.name}</p>
                <p className='ml-2 my-2 text-sm  text-white'>Ksh <span className=''>{item.price.toLocaleString()}</span></p>
                <div className='flex flex-row-reverse'>
                  <button
                    onClick={(e) => handleAddToCart(item, e)}
                    className='text-orange-400 text-4xl mr-4 mb-2 rounded-full w-5 hover:text-green-400'>+</button>
                </div>
              </div>
            ))}
            </div>
          </div>
            
          {/* Pagination */}
        <div className="flex items-center justify-center gap-6 mt-9 mb-5">
          <button className="text-white mx-3">Prev</button>
          {pages.map((page) => (
            <button key={page} className="text-white">{page}</button>
          ))}
          <button className="text-white mx-3">Next</button>
        </div>



        </div>
      </div>
    </>
  );
};
