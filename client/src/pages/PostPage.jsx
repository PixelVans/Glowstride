import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




const PostPage = () => {
  // Sample product data
    const product = {
      size: {min: 32, max: 44},
      title: 'Product Title',
      rating: 4,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkKFi9Hoei0uAG-UEvnowTeKkeDT38czzKg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkKFi9Hoei0uAG-UEvnowTeKkeDT38czzKg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkKFi9Hoei0uAG-UEvnowTeKkeDT38czzKg&s',
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  };

  return (
      <div className=" min-h-screen mx-auto w-full sm:max-w-4xl ">
          
       
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              {/* image column */}
              <div className=''>
              <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        className="mb-4"
      >
        {product.images.map((src, index) => (
          <SwiperSlide key={index} className=''>
            <img src={src} alt={`Slide ${index + 1}`} className="rounded-lg object-cover w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
              </div>

                {/* product info column */}
              <div className='text-white'>
                  <h1>{product.title }</h1>
                  <h1>{product.price }</h1>
                  <h1>{product.rating }</h1>
                  <h1>{product.description}</h1>
                  
                  <div>
                      {/* select size design */}
                  </div>
              </div>
      </div>
    </div>
  );
};

export default PostPage;
