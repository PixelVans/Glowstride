import React from 'react'
import { Link } from 'react-router-dom'

const HamburgerSlider = ({setSideSlide}) => {
  return (
     
           
      <div className="w-full  text-white  flex md:hidden flex-col">
      <h2 className="text-lg font-bold mb-4 justify-center mx-auto">Admin Panel</h2>
          <div className="flex flex-col gap-2">
          <Link to={"/admin"}>
                <button onClick={() => setSideSlide(false)} className="w-full bg-slate-800 py-2 px-4 rounded-md hover:bg-blue-600">Dashboard</button>
                </Link>
                  
                  <Link to={"/add-product"}>
            <button onClick={() => setSideSlide(false)} className="w-full bg-slate-800 py-2 px-4 rounded-md hover:bg-blue-600">Add Products</button>        
                </Link>
                <Link to={"/manage-products"}>
            <button onClick={() => setSideSlide(false)} className="w-full bg-slate-800 py-2 px-4 rounded-md hover:bg-blue-600">Manage Products</button>        
                </Link>
                <Link to={"/orders"}>
                    <button onClick={() => setSideSlide(false)} className="w-full bg-slate-800 py-2 px-4 rounded-md hover:bg-blue-600">Manage Orders</button> 
                    </Link>  
                <Link to={"/customers"}>
                    <button onClick={() => setSideSlide(false)} className="w-full bg-slate-800 py-2 px-4 rounded-md hover:bg-blue-600">Customers</button> 
                    </Link>  
        
      
      </div>
    </div>
          
      
  )
}

export default HamburgerSlider