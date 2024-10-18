import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import HamburgerSlider from './HamburgerSlider';
import { FaSignInAlt } from 'react-icons/fa';


function Navbar() {
  const categories = ["Men", "Women", "Kids", "Shoes", "Clothes", "Trending"];
  const cartItemCount = 9;
  const [searchVal, setSearchVal] = useState('');
  const [sideSlide, setSideSlide] = useState(false);
  const navigate = useNavigate()
  
  const handleSearchSubmit = () => {
    navigate(`/search?q=${searchVal}`)
  }

  return (
    <div className='bg-slate-950 w-full '>
      <div className='sm:mx-[30px] mx-[6px]'>

        {/* Main Nav */}
        <div className='flex justify-between w-full  p-1 sm:p-2'>
          
          {/* Burger Icon */}
          <div
             onClick={() => setSideSlide(!sideSlide)}
            className='text-white block md:hidden mt-2'>
            <div className='w-[26px] h-[2px] bg-slate-100'></div>
            <div className='w-[24px] h-[2px] mt-1 bg-slate-100'></div>
            <div className='w-[22px] h-[2px] mt-1 bg-slate-100'></div>
          </div>

          {/* Brand Logo */}
          <Link to={"/"}>
            <h1 className='text-yellow-200 font-semibold text-xl '>Glowstride</h1> 
          </Link>
          
          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className='w-[340px] mt-1 p-[2px] rounded-lg hidden md:flex bg-slate-700 items-center'>
            <input
              id='searchbs'
              className='w-full px-4 py-[3px] bg-gray-100 text-black border border-gray-600 rounded-md focus:outline-none focus:border-orange-500'
              type="text" 
              placeholder='Search..' 
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            /> 
            <button type='submit' className='px-2 text-white hover:text-orange-400'>
              <FaSearch/> 
            </button>
          </form>

          {/* Cart and User Icons */}
          <div className='flex gap-6 items-center'>
            <Link to={"/cart"} className="relative">
              <h1 className='text-white text-lg sm:text-[21px] hover:text-orange-300 flex items-center'>
                <FaShoppingCart />
                {cartItemCount > 0 && (
                  <span className='absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-1 mt-1'>
                    {cartItemCount}
                  </span>
                )}
              </h1>
            </Link>
            <Link to={"/signin"}>
              <h1 className='text-white  block'>  <FaSignInAlt size={24} /></h1>
            </Link>
            <Link to={"/admin"} className='text-white hidden md:block hover:text-orange-300'>
              <FaUser/>
            </Link>
          </div>
        </div>

        {/* Mobile Search Form */}
        <form className='mx-2 mt-1 p-[2px] rounded-lg flex md:hidden bg-slate-700 items-center'>
          <input
            id='search'
            className='w-full px-4 py-[3.1px] bg-gray-200 text-black border border-gray-600 rounded-md focus:outline-none focus:border-orange-500'
            type="text" 
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder='Search..' 
          /> 
          <button type='submit'  className='px-2 text-white hover:text-orange-400'>
            <FaSearch/> 
          </button>
        </form>

        {/* Category Section with Horizontal Scroll */}
        <div className='flex gap-3 p-2 w-full pb-2 mx-auto items-center'>
          <div className='flex mx-auto gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide'>
            {categories.map((category, index) => (
              <Link key={index} to={`/search?category=${category}`}>
                <div className='text-white border-b-[3px] pb-2 border-transparent hover:border-orange-400 px-4 cursor-pointer'>
                  {category}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SideSlide Div */}
        <div
          className={`fixed top-0 left-0 h-full w-[250px] z-20 bg-slate-900 text-white transition-transform duration-300 ${
            sideSlide ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <button
            onClick={() => setSideSlide(false)}
            className='absolute top-4 right-4 text-white text-2xl m-2'>
            <AiOutlineClose/>
          </button>
          <div className='mt-16 p-4'>
            <HamburgerSlider setSideSlide={setSideSlide}  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
