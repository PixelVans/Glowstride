import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const categories = ["Men", "Women", "Kids", "Shoes", "Clothes", "Trending"];
  const cartItemCount = 9;
  const [searchVal, setSearchVal] = useState('');


  return (
    <div className='bg-slate-950 w-full '>
      <div className='sm:mx-[30px] mx-[10px]'>
        <div className='flex justify-between w-full p-2'>
          <div className='text-white block md:hidden mt-2'>
            <div className='w-[26px] h-[2px] bg-slate-100'></div>
            <div className='w-[24px] h-[2px] mt-1 bg-slate-100'></div>
            <div className='w-[22px] h-[2px] mt-1 bg-slate-100'></div>
          </div>
          <Link to={"/"}>
           <h1 className='text-white'>Glowstride</h1> 
          </Link>
          
          <form className='w-[340px] mt-1 p-[2px] rounded-lg hidden md:flex bg-slate-700 items-center'>
            <input
              id='search'
              className='w-full px-4 py-[3px] bg-gray-100 text-black border border-gray-600 rounded-md focus:outline-none focus:border-orange-500'
              type="text" 
              placeholder='Search..' 
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            /> 
            <Link to={`/search?q=${searchVal}`} className='px-2 text-white hover:text-orange-400'>
              <FaSearch/> 
            </Link>
           
          </form>
          <div className='flex gap-6 items-center'>
          <Link to={"/cart"} className="relative">
        <h1 className='text-white text-sm sm:text-[21px] hover:text-orange-300 flex items-center'>
          <FaShoppingCart />
          {cartItemCount > 0 && (
            <span className='absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-1 mt-1'>
              {cartItemCount}
            </span>
          )}
        </h1>
      </Link>
            <Link to={"/signin"}>
              <h1 className='text-white hidden md:block'>Signin</h1>
            </Link>
            
            <Link to={"/admin"} className='text-white block  hover:text-orange-300'>
              <FaUser/>
            </Link>
          </div>
        </div>
        
        <form className='mx-2 mt-1 p-[2px] rounded-lg flex md:hidden bg-slate-700 items-center'>
            <input
              id='search'
              className='w-full px-4 py-[3px] bg-gray-100 text-black border border-gray-600 rounded-md focus:outline-none focus:border-orange-500'
             type="text" 
             value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder='Search..' 
            /> 
              <Link to={`/search?q=${searchVal}`}className='px-2 text-white hover:text-orange-400'>
              <FaSearch/> 
            </Link>
           
          </form>
              
        {/* Category Section with Horizontal Scroll and Hidden Scrollbar */}
        <div className='flex gap-3 p-2 w-full pb-2 mx-auto items-center'>
    <div className='flex mx-auto gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide'>
            {categories.map((category, index) => (
              <Link
               key={index} 
                to={`/search?category=${category}`}>
        <div
          
          className='text-white border-b-[3px] pb-2 border-transparent hover:border-orange-400 px-4 cursor-pointer'
        >
          {category}
                </div>
              </Link>
      ))}
    </div>
  </div>
      </div>
     
    </div>
  )
}

export default Navbar;
