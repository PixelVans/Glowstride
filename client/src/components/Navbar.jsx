import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const categories = ["Men", "Women", "Kids", "Shoes", "Clothes", "Trending"];
  const cartItemCount = 9;



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
          
          <form className='w-[300px] mt-1 hidden md:flex'>
            <input
              id='search'
              className='p-[2px] pl-5 w-full rounded'
              type="text" 
              placeholder='Search..' 
            /> 
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
        
        <form className='w-full mt-1 md:hidden flex'>
          <input
            className='p-[2px] pl-5 w-full rounded'
            type="text" 
            placeholder='Search..' 
          /> 
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
