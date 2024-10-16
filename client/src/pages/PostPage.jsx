import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { recommended } from '../utils/data';
import Slider from 'react-slick';
import { settings } from '../utils/slidersettings';
import { useLocation } from 'react-router-dom';

const PostPage = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  // Sample product data
  const product = {
    size: { min: 36, max: 40 },
    title: 'Product Title',
    price: 1000, // Added price
    rating: 2,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkKFi9Hoei0uAG-UEvnowTeKkeDT38czzKg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkKFi9Hoei0uAG-UEvnowTeKkeDT38czzKg&s',
      'https://img.freepik.com/premium-photo/sneaker-shoes-hd-wallpaper-photographic-image_993236-2618.jpg',
    ],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  .`,
                  reviews: [
                    { id: 1, user: 'John Doe', rating: 5, comment: 'Great product! Highly recommend!' },
                    { id: 2, user: 'Jane Smith', rating: 4, comment: 'Good value for the price.' },
                    { id: 3, user: 'Mike Lee', rating: 3, comment: 'Average quality, but decent for everyday use.' },
                    { id: 3, user: 'Mike Lee', rating: 3, comment: 'Average quality, but decent for everyday use.' },
                    { id: 3, user: 'Mike Lee', rating: 3, comment: 'Average quality, but decent for everyday use.' },
                    { id: 3, user: 'Mike Lee', rating: 3, comment: 'Average quality, but decent for everyday use.' },
                    { id: 3, user: 'Mike Lee', rating: 3, comment: 'Average quality, but decent for everyday use.' },
                   
                  ],
  };
    
  const   similarProducts = recommended
  const [selectedSize, setSelectedSize] = useState(product.size.min);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

    return (
      <>
    <div className=" mx-auto w-full  sm:max-w-7xl p-4 mt-2 sm:mt-5">
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 '>
        {/* Image column */}
        <div className=''>
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            navigation
            className="mb-4"
          >
            {product.images.map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Slide ${index + 1}`} className="rounded-lg object-cover w-full h-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product info column */}
        <div className='text-white p-3'>
          <h1 className="text-md sm:text-xl font-bold mb-2">{product.title}</h1>
          <h2 className="text-md sm:text-xl font-semibold text-yellow-400 mb-2">Ksh {product.price.toLocaleString()}</h2>
          <div className="flex items-center mb-2">
            <span className="mr-2 mt-3">Rating: </span>
            <span className="text-yellow-400 mt-3">{'⭐'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</span>
          </div>
          <p className="mb-4 text-sm sm:text-md text-slate-400">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-4">
            <label htmlFor="size" className="block mb-1">Select Size:</label>
            <select
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
              className="bg-gray-900 text-white border border-gray-600 rounded-md p-2 w-full"
            >
              {[...Array(product.size.max - product.size.min + 1).keys()].map((_, index) => (
                <option key={index} value={product.size.min + index}>{product.size.min + index}</option>
              ))}
            </select>
          </div>

          {/* Quantity Selection */}
          <div className="flex items-center mb-4">
            <label className="mr-2">Quantity:</label>
            <button
              onClick={() => handleQuantityChange('decrement')}
              className="bg-gray-600 text-white px-2 py-1 rounded-md hover:bg-gray-700"
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={() => handleQuantityChange('increment')}
              className="bg-gray-900 text-white px-2 py-1 rounded-md hover:bg-gray-700"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-orange-600 hover:bg-orange-700 w-full justify-center text-white font-semibold py-2 px-4 rounded flex items-center">
            Add to Cart
          </button>
                    </div>
                    {/* Customer Reviews */}
                    <div className='mt-6'>
                    <h2 className="text-lg sm:text-2xl font-bold mb-4 text-orange-600">Customer Reviews</h2>
                    {product.reviews.length > 0 ? (
                        <div className="h-[300px] overflow-y-auto space-y-4"> {/* Set fixed height and overflow */}
                        {product.reviews.map(review => (
                            <div key={review.id} className="border border-gray-600 rounded-md p-4">
                            <div className="flex items-center mb-2">
                                <span className="font-semibold text-slate-400">{review.user}</span>
                                <span className="ml-2 text-yellow-400">{'⭐'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                            </div>
                            <p className='text-xs sm:text-sm text-slate-500'>{review.comment}</p>
                            </div>
                        ))}
                        </div>
                    ) : (
                        <p className="text-gray-400">No reviews yet.</p>
                    )}
                    </div>
               </div>
            </div>
            

            {/* similar items */}
            <h1 className='text-yellow-200 mx-auto text-center mt-5 sm:mt-12'>Similar Products</h1>
            <div className='sm:mx-[100px] p-2 mb-[60px]'>
            <Slider {...settings} className=' ring-yellow-200  ring-[0.4px] p-3 mt-2  rounded-md'>
        {similarProducts.map((item) => (
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
      <p className='ml-2 mt-1 text-[13px] font-thin text-white'>{item.name}</p>
      <p className='ml-2 my-2 text-sm font-thin text-white'>Ksh <span className='font-thin'>{item.price.toLocaleString()}</span></p>
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
            </div>
            </>
  );
};

export default PostPage;
