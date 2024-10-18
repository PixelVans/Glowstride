import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { searchResults } from '../utils/data';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterSearchResults from '../components/FilterSearchResults';

export const Searchpage = () => {
  const { pathname } = useLocation();
  const [filterPopup, setfilterPopup] = useState(false)
  
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

  return (
    <> 
    <div className='flex flex-col h-full mx-2 relative md:flex-row'>
        {/* Filter for desktop */}
      <div className='w-full md:w-2/6 lg:w-1/6 p-2 sm:p-5 shadow-sm shadow-slate-600 hidden md:block'>
         <FilterSearchResults />
              <div className='h-9'></div>
        </div> 

        

          {/* Filter search results for mobile phones */}
          {filterPopup && (
              <div className='md:hidden my-5 mx-5 shadow-bott p-2'>
                  
                   <div className='flex justify-end mr-4'>
                    <button
                      onClick={()=> setfilterPopup(false)}
                     className='text-2xl flex-end text-white cursor-pointer'><AiOutlineClose/></button> 
              </div>
             {/* header */}
                <FilterSearchResults/>
                          
                              
            <div className='h-7 bg-slate-200 mt-2'>
              
                </div>
              </div>
        )}  


        
        {/* Results area */}
        <div className='w-full lg:w-5/6 md:w-4/6 items-center'>
          <div className='flex justify-between'>
            <h1 className='ml-5 my-2 text-white text-xs '>Found 1200 results</h1>
            <button onClick={() => setfilterPopup(!filterPopup)}
              className='text-orange-300 mr-4 flex md:hidden hover:underline'>Filter results</button>
          </div>

        <div className='flex'>
            <div className='lg:mx-auto lg:p-5 md:p-1 flex flex-wrap '>
            {searchResults.map((item) => (
              <div
              onClick={() => handleDivClick(item.id)}
                key={item.id} className='rounded-md p-[3px] mb-5 shadow-black shadow-md mx-auto w-1/2 sm:w-[170px]'>
                <img src={item.img} alt={item.name} className="w-full rounded-md h-[190px] sm:h-[200px]  object-cover" />
                <p className='ml-2 mt-1 text-[13px]  text-white'>{item.name}</p>
                <p className='ml-2 my-2 text-sm  text-white'>Ksh <span className=''>{item.price.toLocaleString()}</span></p>
                <div className='flex flex-row-reverse'>
                  <button
                    onClick={(e) => handleAddToCart(item, e)}
                    className='text-orange-400 text-3xl mr-3 mb-1 rounded-full w-5'>+</button>
                </div>
              </div>
            ))}
            </div>
          </div>
            
          {/* Pagination */}
          <div className='flex items-center text-center gap-6 mt-9 mb-5 justify-center'>
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
