import React, { useEffect, useState } from 'react';
import { cartItems } from '../utils/data';
import { FaTrash } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const CartPage = () => {
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [cart, setCart] = useState(cartItems);

  // Handle removing item from cart
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  // Calculate total
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-2 sm:p-6">
      <h1 className="text-lg sm:text-2xl font-semibold mb-6 text-center">Your Cart</h1>

      {/* Cart Items */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-3xl h-full mb-9 mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 border-b border-gray-700 pb-4"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="sm:w-20 sm:h-20 w-10 h-10 object-cover rounded-md"
                />
                <div className="flex-1 px-4">
                  <h3 className="text-xs sm:text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-lg ">Ksh {item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="text-2xl font-thin bg-gray-600 rounded-full px-4  hover:bg-gray-700"
                    disabled={item.quantity <= 1}
                  >
                    <h1 className='mb-1'> -</h1>
                  </button>
                  <span className='text-sm sm:text-lg'>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="text-2xl font-thin bg-gray-600 rounded-full px-3  hover:bg-gray-700"
                  ><h1 className='mb-1'> +</h1>
                   
                  </button>
                </div>
                
              </div>
            ))}

            {/* Cart Total */}
            <div className="flex justify-between sm:mt-6">
                              <h2 className="text-sm sm:text-2xl font-semibold">Total: Ksh {calculateTotal().toLocaleString()}.00</h2>
                              <Link to={"/checkout"}>
                                  <button className=" bg-orange-600 flex hover:bg-orange-500 text-white py-1 sm:py-2 px-6 rounded-md">
                                    <span className='hidden sm:block'>Proceed to</span> Checkout
                                   </button>
                              </Link>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
