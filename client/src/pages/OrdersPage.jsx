import React from 'react';

const OrdersPage = () => {
  // Sample order data
  const orders = [
    {
      id: 'ORD001',
      customer: 'John Doe',
      date: '2024-10-01',
      amount: 'Ksh 5,000',
      status: 'Shipped',
    },
    {
      id: 'ORD002',
      customer: 'Jane Smith',
      date: '2024-10-02',
      amount: 'Ksh 7,000',
      status: 'Pending',
    },
    {
      id: 'ORD003',
      customer: 'Tom Brown',
      date: '2024-10-03',
      amount: 'Ksh 3,500',
      status: 'Delivered',
    },
    // Add more orders as needed
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Orders</h1>

      <div className="bg-white shadow-md rounded-md overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Customer</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-center">Amount</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {orders.map(order => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{order.id}</td>
                <td className="py-3 px-6 text-left">{order.customer}</td>
                <td className="py-3 px-6 text-left">{order.date}</td>
                <td className="py-3 px-6 text-center">{order.amount}</td>
                <td className="py-3 px-6 text-center">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      order.status === 'Delivered'
                        ? 'bg-green-200 text-green-600'
                        : order.status === 'Pending'
                        ? 'bg-yellow-200 text-yellow-600'
                        : 'bg-blue-200 text-blue-600'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
