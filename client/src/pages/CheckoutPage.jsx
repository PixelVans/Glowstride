import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../index.css';
const CheckoutPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex  justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full h-full mt-5 max-w-md">
        <h1 className="text-2xl text-yellow-300 text-center font-semibold mb-4">Select Payment Method</h1>
        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out 
              ${paymentMethod === 'stripe' ? 'bg-yellow-300 text-gray-900' : 'bg-gray-700 text-white'}`}
            onClick={() => handlePaymentMethodChange('stripe')}
          >
            <h2 className="text-lg font-semibold">Stripe</h2>
            <p className="text-sm">Pay securely using your credit/debit card.</p>
          </div>
          <div
            className={`p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out 
              ${paymentMethod === 'mpesa' ? 'bg-green-600 text-white' : 'bg-gray-700 text-white'}`}
            onClick={() => handlePaymentMethodChange('mpesa')}
          >
            <h2 className="text-lg font-semibold">M-Pesa</h2>
            <p className="text-sm">Make payments through your M-Pesa account.</p>
          </div>
        </div>
        <button
          disabled={!paymentMethod}
          className={`mt-6 w-full p-2 rounded-lg text-white font-semibold 
            ${paymentMethod ? 'bg-orange-600 hover:bg-orange-500' : 'bg-gray-500 cursor-not-allowed'}`}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
