import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const AdminPage = () => {
  // Sample data for charts
  const salesData = [
    { name: 'Jan', income: 4007 },
    { name: 'Feb', income: 3030 },
    { name: 'Mar', income: 5000 },
    { name: 'Apr', income: 4810 },
    { name: 'May', income: 5890 },
    { name: 'Jun', income: 4190 },
    { name: 'Jul', income: 4996 },
  ];

  const genderData = [
    { name: 'Male', value: 60 },
    { name: 'Female', value: 40 },
  ];

  const COLORS = ['#8884d8', '#ff7300'];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Control Panel */}
      <div className="w-1/5 bg-gray-900 text-white p-6 space-y-6">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <div className="flex flex-col gap-2">
                  <button className="w-full bg-slate-800 py-2 px-4 rounded-md hover:bg-blue-600">Dashboard</button>
                  <Link to={"/add-product"}>
              <button className="w-full bg-slate-800 py-2 px-4 rounded-md hover:bg-blue-600">Add Products</button>        
                  </Link>
                  <Link to={"/manage-products"}>
              <button className="w-full bg-slate-800 py-2 px-4 rounded-md hover:bg-blue-600">Manage Products</button>        
                  </Link>
                  <Link to={"/orders"}>
                      <button className="w-full bg-slate-800 py-2 px-4 rounded-md hover:bg-blue-600">Manage Orders</button> 
                      </Link>  
                  <Link to={"/customers"}>
                      <button className="w-full bg-slate-800 py-2 px-4 rounded-md hover:bg-blue-600">Manage Orders</button> 
                      </Link>  
          
          <button className="w-full bg-slate-800 py-2 px-4 rounded-md hover:bg-blue-600">Settings</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-md p-6 rounded-md text-center">
            <h2 className="text-lg font-semibold">Total Sales</h2>
            <p className="text-2xl font-bold mt-2">Ksh 193,840</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md text-center">
            <h2 className="text-lg font-semibold">Orders</h2>
            <p className="text-2xl font-bold mt-2">254</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-md text-center">
            <h2 className="text-lg font-semibold">Customers</h2>
            <p className="text-2xl font-bold mt-2">98</p>
          </div>
        </div>

        {/* Charts: Bar Chart and Pie Chart in Two Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Income Bar Chart */}
          <div className="bg-white shadow-md p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Monthly Income</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="income" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gender Distribution Pie Chart */}
          <div className="bg-white shadow-md p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Customer Gender Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
