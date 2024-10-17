import React, { useState } from 'react';
import { categories, brands, essentials } from '../utils/data'; // Assuming you have categories and brands data available.

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [isCasual, setIsCasual] = useState(false); // State for casual checkbox

  const [itemDescription, setItemDescription] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemBrand, setItemBrand] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [itemGender, setItemGender] = useState('');
  const [shoeType, setShoeType] = useState('');
  const [itemType, setItemType] = useState(''); // New state for item type
  const [minShoeSize, setMinShoeSize] = useState('');
const [maxShoeSize, setMaxShoeSize] = useState('');
const [isDiscounted, setIsDiscounted] = useState(false); // New state for discount checkbox
const [isEssential, setIsEssential] = useState(false); // New state for discount checkbox

  const [initialPrice, setInitialPrice] = useState('');
  
  const handleImageChange = (e) => {
    setItemImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your upload logic here, e.g., send data to API
    console.log({
      itemName,
      itemPrice,
      itemDiscountedPrice,
      itemDescription,
      itemCategory,
      itemBrand,
      itemImage,
      isFeatured,
      itemGender,
      shoeType,
    });
  };

  return (
    <div className='container mx-auto min-h-screen p-4 max-w-[99%] md:max-w-[90%] lg:max-w-[80%] '>
      <h1 className='text-yellow-200 text-2xl text-center mb-4'>Add New Item</h1>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-6 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 gap-9 h-full'>
        <div>
          <div className='mb-4'>
            <p htmlFor='itemName' className='text-yellow-200 mb-2 '>Item Name</p>
            <input
              type='text'
              id='itemName'
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
              className="w-full px-4  py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className='mb-4'>
            <p htmlFor='itemPrice' className='text-yellow-200  mb-2 '>Item Price (Ksh)</p>
            <input
              type='number'
              id='itemPrice'
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              required
               className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
            />
          </div>

          

          <div className='mb-4'>
            <p htmlFor='itemDescription' className='text-yellow-200  mb-2 '>Description</p>
            <textarea
              id='itemDescription'
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:border-orange-500"
              rows='4'
            />
          </div>
        </div>
          <div>
        <div className='mb-4 flex gap-2 sm:mt-[26px]'>
          <button type='button' onClick={() => setItemType('clothing')} className={`w-full p-2 rounded-md ${itemType === 'clothing' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>Add Clothing</button>
          <button type='button' onClick={() => setItemType('footwear')} className={`w-full p-2 rounded-md ${itemType === 'footwear' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>Add Footwear</button>
        </div>

        
     {/* Clothing */}
{itemType === 'clothing' && (
  <div>
    {/* Category Selection */}
    <div className='mb-4'>
      <label htmlFor='itemCategory' className='text-yellow-200'>Category</label>
      <select
        id='itemCategory'
        value={itemCategory}
        onChange={(e) => setItemCategory(e.target.value)}
        required
        className='w-full p-2 mt-1 rounded-md border border-gray-400 bg-slate-300'
      >
        <option value=''>Select Category</option>
        {Object.entries(categories).map(([key, value]) => (
          <option key={key} value={key}>
            {value.name}
          </option>
        ))}
      </select>
    </div>

    {/* Gender Selection */}
    <div className='mb-4'>
      <label htmlFor='itemGender' className='text-yellow-200'>Gender</label>
      <select
        id='itemGender'
        value={itemGender}
        onChange={(e) => setItemGender(e.target.value)}
        required
        className='w-full p-2 mt-1 rounded-md border border-gray-400 bg-slate-300'
      >
        <option value=''>Select Gender</option>
        <option value='men'>Men</option>
        <option value='women'>Women</option>
        <option value='boys'>Boys</option>
        <option value='girls'>Girls</option>
      </select>
    </div>

    {/* Casual Checkbox */}
    <div className='mb-4 flex items-center'>
      <input
        type='checkbox'
        id='isCasual'
        checked={isCasual}
        onChange={() => setIsCasual(!isCasual)} // Add state handler for isCasual
        className='mr-2 w-4 h-4'
       />
        <label htmlFor='isCasual' className='text-yellow-200'>Casual?</label>
              </div>
                    {/* Checkbox for Discount Confirmation */}
                    <div className='mb-4 flex items-center'>
                
                <input
                  type='checkbox'
                  id='isDiscounted'
                  checked={isDiscounted}
                  onChange={() => setIsDiscounted(!isDiscounted)}
                  className='mr-2 w-4 h-4 '
                />
                <label htmlFor='isDiscounted' className='text-yellow-200'> Discounted?</label>
              </div>
      
              {/* Conditional Input for Initial Price */}
              {isDiscounted && (
                <div className='mb-4'>
                  <label htmlFor='initialPrice' className='text-yellow-200'>Initial Price (Ksh)</label>
                  <input
                    type='number'
                    id='initialPrice'
                    value={initialPrice}
                    onChange={(e) => setInitialPrice(e.target.value)}
                    required={isDiscounted} // Make this field required only if discounted
                    className='w-[140px] p-2 mt-1 ml-4 rounded-md border border-gray-400 bg-slate-300'
                  />
                </div>


              )}

               {/* Checkbox for Essential Confirmation */}
               <div className='mb-4 flex items-center'>
                
                <input
                  type='checkbox'
                  id='isEssential'
                  checked={isEssential}
                  onChange={() => setIsEssential(!isEssential)}
                  className='mr-2 w-4 h-4 '
                />
                <label htmlFor='isDiscounted' className='text-yellow-200'>Essentials?</label>
              </div>
              
              {isEssential && (
                
                <select
                id='itemCategory'
                value={itemCategory}
                onChange={(e) => setItemCategory(e.target.value)}
                required
                className='w-full p-2 mt-1 rounded-md border border-gray-400 bg-slate-300'
              >
                <option value=''>Select Essential Type</option>
                {Object.entries(essentials).map(([key, value]) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>

              )}
            </div>
            
  
            
          )}
          

             
             

            {/* footwear */}
        {itemType === 'footwear' && (
         <div>
         <div className='mb-4'>
           <label htmlFor='itemBrand' className='text-yellow-200'>Shoe Brand</label>
           <select
             id='itemBrand'
             value={itemBrand}
             onChange={(e) => setItemBrand(e.target.value)}
             required
             className='w-full p-2 mt-1 rounded-md border border-gray-400 bg-slate-300'
           >
             <option value=''>Select Brand</option>
             {brands.map((brand, index) => (
               <option key={index} value={brand.name}>
                 {brand.name}
               </option>
             ))}
           </select>
         </div>
       
         <div className='mb-4'>
           <label htmlFor='shoeType' className='text-yellow-200'>Shoe Type</label>
           <select
             id='shoeType'
             value={shoeType}
             onChange={(e) => setShoeType(e.target.value)}
             className='w-full p-2 mt-1 rounded-md border border-gray-100 bg-slate-300'
           >
             <option value=''>Select Shoe Type</option>
             <option value='sneaker'>Sneakers</option>
             <option value='flats'>Flats</option>
             <option value='heels'>Boots</option>
             <option value='heels'>Heels</option>
             <option value='heels'>Summer Wear</option>
           </select>
         </div>
         
              


         {/* New Fields for Shoe Size Range */}
         <div className='mb-4 flex gap-4 items-center'>
           <label htmlFor='minShoeSize' className='text-yellow-200'>Size Range</label>
            <input
                  placeholder='Min'
             type='number'
             id='minShoeSize'
             value={minShoeSize}
             onChange={(e) => setMinShoeSize(e.target.value)}
             required
             className=' p-2 w-[73px] h-[36px] first-line:mt-1 rounded-md border border-gray-100 bg-slate-100'
           />
        
            <input
                   placeholder='Max'
             type='number'
             id='maxShoeSize'
             value={maxShoeSize}
             onChange={(e) => setMaxShoeSize(e.target.value)}
             required
             className='w-[73px] h-[36px] p-2 mt-1 rounded-md border border-gray-400 bg-slate-100'
           />
         </div>
         
              

             {/* Checkbox for Discount Confirmation */}
              <div className='mb-4 flex items-center'>
                
          <input
            type='checkbox'
            id='isDiscounted'
            checked={isDiscounted}
            onChange={() => setIsDiscounted(!isDiscounted)}
            className='mr-2 w-4 h-4 '
          />
          <label htmlFor='isDiscounted' className='text-yellow-200'>Is this item discounted?</label>
        </div>

        {/* Conditional Input for Initial Price */}
        {isDiscounted && (
          <div className='mb-4'>
            <label htmlFor='initialPrice' className='text-yellow-200'>Initial Price (Ksh)</label>
            <input
              type='number'
              id='initialPrice'
              value={initialPrice}
              onChange={(e) => setInitialPrice(e.target.value)}
              required={isDiscounted} // Make this field required only if discounted
              className='w-[140px] p-2 mt-1 ml-4 rounded-md border border-gray-400 bg-slate-300'
            />
          </div>
        )}
       </div>
       
        )}

        <div className='mb-4'>
          <label htmlFor='itemImage' className='text-yellow-200'>Upload Image</label>
          <input
            type='file'
            id='itemImage'
            accept='image/*'
            onChange={handleImageChange}
            required
            className='w-full p-2 mt-1'
          />
        </div>

        <div className='mb-4 flex items-center'>
          <input
            type='checkbox'
            id='isFeatured'
            checked={isFeatured}
            onChange={() => setIsFeatured(!isFeatured)}
            className='mr-2 w-4 h-4'
          />
          <label htmlFor='isFeatured' className='text-yellow-200'>Reccomended Post</label>
        </div>

        <button type='submit' className='bg-orange-600 text-white px-4 py-2 w-full rounded-md hover:bg-orange-500'>
          Add Item
          </button>
          </div>
      </form>
    </div>
  );
};

export default AddItem;
