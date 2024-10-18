import React, { useState, useEffect } from 'react';
import './index.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Testimonials from './components/Testimonials';
import {
  banners, boyswear, brands, categories,
  discounted, essentials, girlswear,
  menofficial, menwear, newArrivals,
  recommended, shoes, womenofficial, womenwear
} from './utils/data';
import { settings } from './utils/slidersettings';
import { Link, useLocation, useNavigate } from 'react-router-dom';

    
const App = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const navigate = useNavigate();

  const handleDivClick = (id) => {
    navigate(`/post/${id}`);
  };

  //add to cart logic
  const handleAddToCart = (item, e) => {
    e.stopPropagation(); // Prevent the div click from firing
    addToCart(item); // Call the addToCart function with the item
  };

 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Set up interval to change the image every 3 seconds
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        // After the fade-out completes, change the image
        setCurrentIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); // Start fade-in
      }, 300); // 500ms matches the fade-out duration
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <>
      <div className='text-center p-2'>
        <h1 className='text-yellow-200 font-extralight text-lg sm:text-2xl'>Timeless Trends</h1>
        <hr className='my-1 border-t-[0.01px] border-yellow-100 ' />

      </div>
    <div className="text-white mt-2 lg:w-[85%]   mx-auto">
     
    <div className="flex  justify-center w-full h-[100px] sm:h-[230px]">
      {/* Display the current image with fade effect */}
      <div
        key={banners[currentIndex].id}
        className={`transition-opacity w-full h-full duration-500 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={banners[currentIndex].img}
          alt={banners[currentIndex].name}
          className="w-full h-full object-cover"
        />
        
      </div>
        </div>
          
        
        {/* recommended items */}
        <div
         className='w-full p-1 mt-4 sm:mt-[70px]  flex justify-between'
        > <h1 className='w-[50%] sm:w-[30%] text-yellow-200 bg-black p-1 px-3 text-xs sm:text-[14px] 
        rounded-md rounded-tr-full shadow-white shadow-sm'>Reccomended for you</h1>
          <Link to={"/search?recommended"}>
            <h1 className='text-orange-200 cursor-pointer hover:underline mr-2'>See all</h1>
          </Link>
         
        </div>
        <Slider {...settings} className=' ring-yellow-200  ring-[0.4px] p-3 mt-2  rounded-md'>
        {recommended.map((item) => (
    <div
      onClick={() => handleDivClick(item.id)}
      key={item.id}
      className='rounded-md p-[3px] w-[150px]  shadow-black shadow-md my-2 sm:w-[170px] flex-shrink-0 '
    >
      <div className="relative w-full h-[180px] overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <p className='ml-2 mt-1 text-[13px] font-thin'>{item.name}</p>
      <p className='ml-2 my-2 text-sm '>Ksh <span className='font-thin'>{item.price.toLocaleString()}</span></p>
      <div className='flex flex-row-reverse'>
        <button
          onClick={(e) => handleAddToCart(item, e)}
          className='text-orange-400 text-4xl mr-4 mb-1 rounded-full w-5 hover:text-yellow-400'
        >
          +
        </button>
      </div>
    </div>
    ))}
        </Slider>

     
        
      

         {/* Shoes category */}
      <div className='w-full p-1 mt-4 sm:mt-[70px] flex justify-between'>
          <h1 className='w-[50%] sm:w-[30%] text-yellow-200 bg-black p-1 px-3 text-xs 
          sm:text-[14px] rounded-md rounded-tr-full
         shadow-white shadow-sm'>
          Footwear Collection
        </h1>
      </div>
      <div className='w-full mt-2 rounded-md'>
        <div className='grid grid-cols-2 sm:grid-cols-6 gap-1'>
          {Object.entries(shoes).map(([key, shoe]) => (
            <div key={key} className='p-1 rounded-sm shadow-black shadow-md overflow-hidden'>
              <img
                src={shoe.src}
                alt={shoe.label}
                className='object-cover rounded-sm h-[170px] sm:h-[200px] w-full 
                transition-transform duration-300 ease-in-out hover:scale-105'
              />
              <p className='mb-1 ml-2 p-1 mt-1 sm:mt-2'>{shoe.label}</p>
            </div>
          ))}
        </div>
      </div>

                


            {/* all fashion wear section */}
        <div className='w-full p-1 mt-4 flex justify-between'>
          <h1 className='w-[50%] sm:w-[30%] text-yellow-200 bg-black p-1 px-3 text-xs sm:text-[14px]
           rounded-md rounded-tr-full shadow-white shadow-sm'>
            All Fashion Wear
          </h1>
        </div>
        <div className='w-full mt-2 ring-yellow-200 ring-[0.4px] p-2 sm:p-4 rounded-md'>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 rounded-md'>
            {[
              { src: womenwear, label: 'Women' },
              { src: menwear, label: 'Men' },
              { src: boyswear, label: 'Boys' },
              { src: girlswear, label: 'Girls' }
            ].map((wear, index) => (
              <div key={index} className='bg-slate-950 overflow-hidden rounded-md'>
                <img src={wear.src} alt={wear.label} className='h-[170px] sm:h-[300px] w-full object-cover
                 transition-transform duration-300 ease-in-out hover:scale-105' />
                <p className='ml-2 mb-1 p-1 mt-1 sm:mt-2'>{wear.label}</p>
              </div>
            ))}
          </div>
        </div>

        
      
       
      
      
       {/* items on discount */}
      
       <div
         className='w-full p-1 mt-4 sm:mt-[70px]  flex justify-between'
        > <h1 className='w-[50%] sm:w-[30%] text-yellow-200 bg-black p-1 px-3 text-xs sm:text-[14px] 
        rounded-md rounded-tr-full shadow-white shadow-sm'>Discounted Treasures</h1>
            <Link to={"/search?discounted"}>
            <h1 className='text-orange-200 cursor-pointer hover:underline mr-2'>See all</h1>
          </Link>
        </div>
        
        <Slider {...settings} className=" ring-yellow-200 ring-[0.4px] p-3 rounded-md mt-2">
        {discounted.map((item) => (
          <div
          onClick={() => handleDivClick(item.id)}
            key={item.id} className='rounded-md p-[3px] sm:p-[10px] shadow-black shadow-md my-2 overflow-hidden
            h-full w-[150px] sm:w-[170px] flex-shrink-0'>
            <img src={item.img} alt={item.name} className="w-full rounded-md  h-[180px] object-cover
             transition-transform duration-300 ease-in-out hover:scale-105" />
            <p className='ml-2 mt-1 text-[13px] font-thin'>{item.name}</p>
            <p className='ml-2  text-xs font-extralight line-through text-slate-300'>Ksh <span className='font-thin'>{item.price}</span></p>
            <p className='ml-2 my-2 text-sm '>Ksh <span className='font-thin'>{(item.price)-100}</span></p>
            <div className='flex flex-row-reverse'>
              
              <button
                  onClick={(e) => handleAddToCart(item, e)}
                className='text-orange-400 text-3xl mr-3 mb-1 rounded-full w-5'>+</button>
            </div>
          </div>
        ))}
      </Slider>
      

      
        {/* brand selection */}
                
          <div
                  className='w-full p-1 mt-4 sm:mt-[70px]  flex justify-between'
                  > <h1 className='w-[50%] sm:w-[30%] text-yellow-200 bg-black p-1 px-3 text-[10px] sm:text-[14px] 
                  rounded-md rounded-tr-full shadow-white shadow-sm'>Shop Your Brand</h1>
                  </div>
                <div className='m-1'>
                  
                  <div className='flex w-full mt-6   '>
            <div className='flex mx-auto gap-1 lg:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide'>
              {brands.map((item) => (
                <Link to={`/search?brand=${item.name}`}>
                <div key={item.id} className='bg-slate-900 rounded-md p-[1px] h-full w-[100px] flex-shrink-0 gap-1 overflow-hidden'>
                    <img src={item.img} alt={item.name} className="w-full rounded-md h-[100px] object-cover
                   transition-transform duration-300 ease-in-out hover:scale-105" />
                  
                
                    
                  </div>
                </Link>
              ))}
            </div>
                </div>
                </div>
         
      
                {/* new arrivals */}
                <div
                  className='w-full p-1 mt-4 sm:mt-[70px]  flex justify-between'
                > <h1 className='w-[50%] sm:w-[30%] text-yellow-200 bg-black p-1 
                  px-3 text-xs sm:text-[14px] rounded-md rounded-tr-full shadow-white shadow-sm'>New Arrivals</h1>
            <Link to={"/search?latest"}>
            <h1 className='text-orange-200 cursor-pointer hover:underline'>See all</h1>
          </Link>
                  </div>
                 
                  <Slider {...settings} className="mt-2 ring-yellow-200 ring-[0.4px] p-3 rounded-md cursor-pointer">
          {newArrivals.map((item) => (
                         
            <div
            onClick={() => handleDivClick(item.id)}
              key={item.id} className='rounded-md p-[5px] sm:p-[10px] shadow-black shadow-md my-2 h-full 
                        w-[150px] overflow-hidden
                     sm:w-[170px] '>
                      <img src={item.img} alt={item.name} className="w-full rounded-md h-[180px] object-cover
                       transition-transform duration-300 ease-in-out hover:scale-105" />
                      <p className='ml-2 mt-1 text-[13px] font-thin'>{item.name}</p>
                      <p className='ml-2 my-2 text-sm font-thin'>Ksh <span className='font-thin'>{item.price}</span></p>
                      <div className='flex flex-row-reverse'>
              
                <button
                   onClick={(e) => handleAddToCart(item, e)}
                  className='text-orange-400 text-3xl mr-3 mb-1 rounded-full w-5'>+</button>
                     </div>
                    </div>
                    
                  
                  ))}
                </Slider>
       

                  {/* Browse categories selection */}
            <div className='w-full p-1 mt-4 sm:mt-[70px]  '>
          <h1 className='w-[50%] sm:w-[30%] text-yellow-200 bg-black p-1 px-3 text-xs sm:text-[14px] rounded-md
               rounded-tr-full shadow-white shadow-sm'>
                Browse Categories
              </h1>
            </div>
            <div className=' mt-2  p-1 sm:p-3 ring-yellow-200 ring-[0.4px] rounded-md'>
        <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 overflow-hidden '>
            {Object.entries(categories).map(([key, category]) => (
              <Link to={`/search?category=${category.name}`}>
               <div key={key} className=' overflow-hidden shadow-black shadow-md mb-2'>
              <img src={category.img} alt={category.name} className='h-[170px] sm:h-[200px] w-full object-cover 
              transition-transform duration-300 ease-in-out hover:scale-105
              ' />
              <p className='ml-2 mb-1 mt-1 sm:mt-2 p-1 text-xs font-thin sm:text-[14px]'>{category.name}</p>
            </div>
            </Link>
          
          ))}
        </div>
      </div>

        


         {/* official wear */}
         <div
         className='w-full p-1 mt-4 sm:mt-[70px]  flex justify-between'
        > <h1 className='w-[50%] sm:w-[30%] text-yellow-200 bg-black p-1 px-3 text-xs sm:text-[14px] 
        rounded-md rounded-tr-full shadow-white shadow-sm'>Official wear</h1>
        </div>
           <div className='w-full bg-slate-700 mt-2 flex flex-col gap-2 p-1 '>
          
          <div className='w-full flex gap-2'>
            <div className='w-1/2 sm:w-[200px] bg-slate-900 overflow-hidden'>
              <img src={menofficial} alt="" className='h-[190px] w-full sm:w-[200px] sm:h-[250px]
               object-cover transition-transform duration-300 ease-in-out hover:scale-105' />
              <p className='ml-2 mt-1 mb-1 p-1 text-sm sm:text-md'>Casual Men</p>
            </div>
            <div className='w-1/2 sm:w-[200px] bg-slate-900 overflow-hidden'>
              <img src={womenofficial} alt="" className='h-[190px] w-full sm:w-[200px]  sm:h-[250px] 
               object-cover transition-transform duration-300 ease-in-out hover:scale-105' />
              <p className='ml-2 mt-1 mb-1 p-1 text-sm sm:text-md'>Casual Women</p>
            </div>
            </div>
             </div>
             

           

          {/* Utilities */}
      <div className='w-full p-1 mt-4 sm:mt-[70px] flex justify-between'>
        <h1 className='w-[50%] sm:w-[30%] text-yellow-200 bg-black p-1 px-3 text-xs sm:text-[14px] rounded-md rounded-tr-full shadow-white shadow-sm'>
          Intimates and Essentials
        </h1>
      </div>

      <div className='w-full mt-2  p-1 sm:p-2 ring-yellow-200 ring-[0.4px] rounded-md'>
        <div className='grid grid-cols-2 sm:grid-cols-5 gap-2'>
          {Object.entries(essentials).map(([key, item]) => (
            <div key={item.id} className='shadow-black shadow-md hover:shadow-white my-1 mx-1 overflow-hidden '>
              <img src={item.img} alt={key} className='h-[170px] sm:h-[200px] w-full object-cover
               transition-transform duration-300 ease-in-out hover:scale-105' />
              <p className='ml-2 mb-1 p-1 capitalize'>{key}</p>
            </div>
          ))}
        </div>
      </div>


        {/* label for search */}
      <div className=' flex flex-col text-center bg-slate-900 p-2 mt-5 justify-center'>
          <h1 className='text-yellow-300'>Still looking for your perfect suit?</h1>
          <label htmlFor="search" className='bg-orange-800 mx-5 rounded-lg py-2 mt-2 mb-1 text-white font-semibold'>Search Our store
        </label>
          <label htmlFor="searchbs" className='bg-orange-800 mx-5 hidden md:flex rounded-lg py-2 mt-2 mb-1 text-white font-semibold'>Search Our store
        </label>
      </div>
      
      

      </div>
      <div className='p-1 m-2 bg-slate-900 mt-4'>
        <Testimonials/>
      </div>
      </>
  );
};

export default App;