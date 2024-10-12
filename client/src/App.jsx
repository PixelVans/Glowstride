import React, { useState, useEffect } from 'react';
import './index.css'
import Testimonials from './components/Testimonials';
const App = () => {
  const img1 ='https://t3.ftcdn.net/jpg/04/63/74/54/360_F_463745476_fQ6EKEfofPQoXmv49AMNXcRUPsVVV3LL.jpg';
  const img2=  "https://oldnavyprod.a.bigcontent.io/v1/static/240501_25-M1203_B_DP_NewArrivals_0501"
  const img3 = "https://www.electrolux.in/globalassets/blog/how-to-get-white-clothes-white-again/how-to-get-white-clothes-white-again-banner.jpg"
  const img4 = "https://t3.ftcdn.net/jpg/02/10/85/26/240_F_210852662_KWN4O1tjxIQt8axc2r82afdSwRSLVy7g.jpg"
  
  const disc1 ='https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/587884/1.jpg?2392';
  const disc2=  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZK23rCFnqYwCsWV7zzBAac5YFKSR-J9CGg&s"
  const disc3 = "https://tabasamubridals.co.ke/wp-content/uploads/2024/06/OfficialHighHeelsForLadies-scaled.jpg"
  const disc4 = "https://image.kilimall.com/kenya/shop/store/goods/6549/2022/07/6549_07107879587823623.jpg"
  

  const menshoe = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkKFi9Hoei0uAG-UEvnowTeKkeDT38czzKg&s"
  const Womenshoe = "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/103875/1.jpg?7301"
  const kids = "https://nypost.com/wp-content/uploads/sites/2/2023/07/bestkidssneakers.jpg?quality=75&strip=all"
  
  const womenwear = "https://media.istockphoto.com/id/155596905/photo/high-class-female-clothing.jpg?s=612x612&w=0&k=20&c=V1HcqglhOc76MHidrmyPjraiMNXwhAzO-wMHbEMMEqM="
  const menwear = "https://m.media-amazon.com/images/I/51dnIvQ8L1L._AC_UF350,350_QL80_.jpg"
  const boyswear = "https://image.made-in-china.com/2f0j00ULAkmoPwwcqb/2023-New-Boys-Clothes-Set-Children-s-Small-Suit-Three-Pieces-Kids-Corduroy-Suits.webp"
  const girlswear = "https://i.pinimg.com/736x/a1/21/77/a12177e71aaeffdc24c33dab9cd30b8e.jpg"
  

   const nike = "https://fabrikbrands.com/wp-content/uploads/Nike-Logo-History-1-1.png"
   const jordan = "https://fabrikbrands.com/wp-content/uploads/Adidas-Logo-1-scaled.jpg"
   const vans = "https://fabrikbrands.com/wp-content/uploads/Gucci-Logo-1-scaled-1155x770.jpg"
   const gucci = "https://static.vecteezy.com/system/resources/previews/023/870/506/non_2x/jordan-brand-logo-symbol-with-name-red-design-clothes-sportwear-illustration-with-black-background-free-vector.jpg"
   const adiddas = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG--POF9ZiuyuV1-lWkTDbRXiqh_iF2963aw&s"
   
  
    const arrival1 = "https://i.pinimg.com/736x/f9/77/a2/f977a2f73b5b2df72ff900ab505834ee.jpg"
    const arrival2 = "https://acdn.mitiendanube.com/stores/001/700/176/products/basic21-efea22eabb7eba237616941094058455-1024-1024.jpg"
    const arrival3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdRIG7g4VWQjej6UrtyYJmLS7ba-hB0bniw&s"
    const arrival4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91lqkHpDCEp3L5GsbCsgVzomm3fo_My89w&s"
    
    
  
 
    const tshirts = "https://png.pngtree.com/thumb_back/fh260/background/20230629/pngtree-d-render-of-a-black-t-shirt-closeup-with-space-for-image_3701003.jpg";
    const dresses = "https://i.pinimg.com/736x/fe/67/89/fe6789e797f858416092644c938c8240.jpg";
    const pants = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7Bl4GtW_-uwpO7jKsbfwlF42wLjiwV-u0A&s";
    
    const hoodies ="https://www.shirtstop.us/cdn/shop/files/42626462425.png?v=1702417512&width=1021"
    const skirts ="https://i.ebayimg.com/images/g/CdwAAOSwxaNlacX7/s-l1200.jpg"
    const pullnecks ="https://i.pinimg.com/550x/d5/2c/71/d52c71ba29c6ae1e4b1daa3f5a8d3319.jpg"
    const sweaters ="https://i5.walmartimages.com/seo/Vivianyo-HD-Mens-Sweaters-for-the-Winter-Men-s-Fashion-Winter-High-Neck-Warm-Outdoor-Long-Sleeve-Knitted-Sweater-Top-Flash-Picks-Gray_3b340df4-399f-4201-9314-13b36a9a545f.addf25771828d6f8948f6e7f611a0950.jpeg"
    const pyjamas ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYS9drwm-ygQ4nJauyDQu0yy0z_5_BmcYZzg&s"
    const nightdresses ="https://image.made-in-china.com/202f0j00lcVqMYbRHEkj/Fat-Ladies-5XL-Nightgown-Blue-Night-Dresses-Hot-Sexy-Night-Sexy-Bedroom-Dress-for-Woman.jpg"
    const jackets ="https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745027.jpg"
    const tops ="https://media.istockphoto.com/id/1477053303/photo/black-crop-top-mockup-on-slim-girl-blank-canvas-bella-shirt-front-view-for-design-print.jpg?s=612x612&w=0&k=20&c=cKrv0Fkwsfj75q3NUCKxquFdtLRB58AGdsbDdeK_7PQ="
    const shirts ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsGs1t_tGpxNw1PsZHQK4rs4If3VSEBu9MQ&s"
    
  
    const menofficial = "https://png.pngtree.com/png-vector/20240616/ourmid/pngtree-success-matches-perfectly-with-a-stylish-suit-png-image_12727721.png"
    const womenofficial = "https://t4.ftcdn.net/jpg/00/29/59/47/360_F_29594789_gruUqSPmfKUchKUkWumMYE1bXdfxN6Kt.jpg"
  
  const items = [
    { id: 1, name: 'items1', img: img1, price: 2 },
    { id: 2, name: 'items2', img: img2, price: 12  },
    { id: 3, name: 'items3', img: img3 , price: 32 },
    { id: 4, name: 'items4', img: img4, price: 12  },
    { id: 5, name: 'items5', img: img4, price: 10  },
    { id: 6, name: 'items4', img: img4, price: 15  },
    { id: 7, name: 'items4', img: img4, price: 11  },
  ];

  const discounted = [
    { id: 1, name: 'items1', img: disc1, price: 2 },
    { id: 2, name: 'items2', img: disc2, price: 12  },
    { id: 3, name: 'items3', img: disc3 , price: 32 },
    { id: 4, name: 'items4', img: disc4, price: 12  },
    { id: 5, name: 'items5', img: disc3, price: 10  },
    { id: 6, name: 'items4', img: disc2, price: 15  },
    { id: 7, name: 'items4', img: disc1, price: 11  },
  ];
  const brands = [
    { id: 1, name: 'items1', img: vans, price: 2 },
    { id: 2, name: 'items2', img: adiddas, price: 12  },
    { id: 3, name: 'items3', img: jordan , price: 32 },
    { id: 4, name: 'items4', img: gucci, price: 12  },
    { id: 5, name: 'items5', img: nike, price: 10  },
    { id: 6, name: 'items4', img: disc2, price: 15  },
    { id: 7, name: 'items4', img: disc1, price: 11  },
  ];
  const newArrivals = [
    { id: 1, name: 'items1', img: arrival1, price: 2 },
    { id: 2, name: 'items2', img: arrival2, price: 12  },
    { id: 3, name: 'items3', img: arrival3 , price: 32 },
    { id: 4, name: 'items4', img: arrival4, price: 12  },
    { id: 5, name: 'items5', img: disc3, price: 10  },
    { id: 6, name: 'items4', img: disc2, price: 15  },
    { id: 7, name: 'items4', img: disc1, price: 11  },
  ];
   

   

  const belt="https://azbelt.com/cdn/shop/products/BlackClassicSS_938x.jpg?v=1614274106"
  const bra="https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/5/0/6/5063133fac49b6ec42365c453f1851ac.jpg"
  const boxer="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLG6KF7wD5o-v0Xw63IhPRV8okSIxpbSYZA&s"
  const pantie="https://media1.calvinklein.com/images/20230919/PLP/PLP_Boxer_Briefs_2x.jpg"
  const socks="https://riogiftshop.com/wp-content/uploads/2023/06/Formal-Cotton-Socks-in-Kenya-7.jpg"
  const cape = "https://files.sophie.co.ke/2023/04/1604336905_3586-1_2073.jpg"
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Set up interval to change the image every 3 seconds
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        // After the fade-out completes, change the image
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); // Start fade-in
      }, 300); // 500ms matches the fade-out duration
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="text-white mt-2 ">
      <div className='bg-slate-900 h-5'>

      </div>
    <div className="flex  justify-center w-full h-[250px]">
      {/* Display the current image with fade effect */}
      <div
        key={items[currentIndex].id}
        className={`transition-opacity w-full h-full duration-500 ease-in-out ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={items[currentIndex].img}
          alt={items[currentIndex].name}
          className="w-full h-full object-cover"
        />
        
      </div>
      </div>
      <div
         className='w-full p-1 mt-4 bg-slate-800 flex justify-between'
        > <h1 className='ml-2 text-yellow-500'>Recommended For You</h1>
        </div>
      

      <div className='flex w-full  mt-1  '>
  <div className='flex mx-auto gap-2 lg:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide'>
    {items.map((item) => (
      <div key={item.id} className='bg-slate-900 rounded-md p-[3px] h-full w-[150px] flex-shrink-0 gap-1'>
        <img src={item.img} alt={item.name} className="w-full rounded-md h-[180px] object-cover" />
        <p className='ml-2 mt-1 text-[13px] font-thin '>{item.name }</p>
        <p className='ml-2 text-sm font-thin'>Ksh <span className='font-semibold'>{item.price }</span> </p>
        <div className='flex justify-center'> {/* Wrap button in flex with justify-center */}
          <button className='p-[2px] my-1 mt-5 w-full mx-2 bg-orange-700 font-semibold rounded-md'>Add</button>
        </div>
      </div>
    ))}
  </div>
      </div>
        
      <div
         className='w-full p-1 mt-5 bg-slate-800 flex justify-between'
        > <h1 className='ml-2 text-yellow-500'>Shoes</h1>
        </div>
      <div className=' mt-2 w-full'>
        
      
      <div className='flex flex-col gap-1'>
        <div className='flex w-full h-[215px] gap-1 p-1  '>
          <div className='w-1/2 bg-slate-800 p-1 rounded-sm '>
            <img src={menshoe} alt="" className='object-cover rounded-sm h-[170px] w-full' />
            <p className='mb-1 ml-2'>Men</p>
          </div>
          <div className='w-1/2 bg-slate-800 p-1 rounded-sm'>
            <img src={Womenshoe} alt=""  className='object-cover rounded-sm h-[170px] w-full'/>
            <p className='ml-2 '>women</p>
          </div>
          
        </div>
        <div className='bg-slate-900  h-[250px]'>
          <div className=' m-1 '>
            <img src={kids} alt="" className='object-cover w-full max-h-[205px] ' />
          <p className='ml-2 mb-1 mt-1'>Kids</p>
          </div>
          </div>
        </div>
        

        <div
         className='w-full p-1 mt-5 bg-slate-800 flex justify-between'
        > <h1 className='ml-2 text-yellow-500'>Clothes</h1>
        </div>
        <div className='w-full flex flex-col gap-2 p-1'>
          
          <div className='flex  w-full gap-2'>
            <div className='w-1/2 bg-slate-900'>
              <img src={womenwear} alt="" className='h-[170px] w-full object-cover' />
              <p className='ml-2 mb-1'>Women</p>
            </div>
            <div className='w-1/2 bg-slate-900'>
              <img src={menwear} alt="" className='h-[170px] w-full object-cover' />
              <p className='ml-2 mb-1'>Men</p>
            </div>
          </div>
          
          <div className='flex  w-full gap-2'>
            <div className='w-1/2 bg-slate-900'>
              <img src={boyswear} alt="" className='h-[170px] w-full object-cover' />
              <p className='ml-2 mb-1'>Boys</p>
            </div>
            <div className='w-1/2 bg-slate-900'>
              <img src={girlswear} alt="" className='h-[170px] w-full object-cover' />
              <p className='ml-2 mb-1'>Girls</p>
            </div>
            </div>

        </div>
        
      </div>
       
      
      <div
         className='w-full p-1 mt-5 bg-slate-800 flex justify-between'
        > <h1 className='ml-2'>Discounts</h1>
        </div>
      
        
        <div className='flex mt-1'>
  <div className='flex mx-auto gap-2 lg:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide'>
    {discounted.map((item) => (
      <div key={item.id} className='bg-slate-900 rounded-md p-[3px] h-full w-[180px] flex-shrink-0 gap-1'>
        <img src={item.img} alt={item.name} className="w-full rounded-md h-[180px] object-cover" />
        <p className='ml-2 mt-1 text-[13px] font-thin'>{item.name}</p>
        <p className='ml-2 text-sm font-thin'>Ksh <span className='font-semibold'>{item.price}</span></p>
        
        <div className='flex justify-center'> {/* Wrap button in flex with justify-center */}
          <button className='p-[2px] my-1 mt-5 w-full mx-2 bg-orange-700 font-semibold rounded-md'>Add</button>
        </div>
      </div>
    ))}
  </div>
</div>

      
        
      
      <div
         className='w-full p-1 mt-5 bg-slate-800 flex justify-between'
        > <h1 className='ml-2 text-yellow-500'>Get your Brand</h1>
        </div>
      <div className='m-1'>
        
        <div className='flex w-full  mt-1  '>
  <div className='flex mx-auto gap-1 lg:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide'>
    {brands.map((item) => (
      <div key={item.id} className='bg-slate-900 rounded-md p-[1px] h-full w-[100px] flex-shrink-0 gap-1'>
        <img src={item.img} alt={item.name} className="w-full rounded-md h-[100px] object-cover" />
        
       
          
      </div>
    ))}
  </div>
      </div>
      </div>
         
      <div
         className='w-full p-1 mt-5 bg-orange-700 flex justify-between'
        > <h1 className='ml-2 '>New Arrivals</h1>
        </div>
      <div className='m-1'>
        
        <div className='flex w-full  mt-1  '>
  <div className='flex mx-auto gap-2 lg:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide'>
    {newArrivals.map((item) => (
      <div key={item.id} className='bg-slate-900 rounded-md p-[3px] h-full w-[180px] flex-shrink-0 gap-1'>
        <img src={item.img} alt={item.name} className="w-full rounded-md h-[180px] object-cover" />
        <p className='ml-2 text-[13px] font-thin '>{item.name }</p>
        <p className='ml-2 text-sm font-thin'>Ksh {item.price }</p>
          
      </div>
    ))}
  </div>
      </div>
      </div>

      
          
      <div
         className='w-full p-1 mt-5 bg-orange-700 flex justify-between'
        > <h1 className='ml-2 '>Quick Categories</h1>
        </div>
       
      <div className='w-full flex flex-col gap-2 p-1'>
         
          <div className='flex  w-full gap-2'>
            <div className='w-1/3 bg-slate-900'>
              <img src={tshirts} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>T-shirts</p>
            </div>
            <div className='w-1/3 bg-slate-900'>
              <img src={shirts} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>Shirts</p>
            </div>
            <div className='w-1/3 bg-slate-900'>
              <img src={tops} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>Tops</p>
            </div>
          </div>
          
          <div className='flex  w-full gap-2'>
            <div className='w-1/3 bg-slate-900'>
              <img src={pants} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>Pants</p>
            </div>
            <div className='w-1/3 bg-slate-900'>
              <img src={dresses} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>Dresses</p>
            </div>
            <div className='w-1/3 bg-slate-900'>
              <img src={sweaters} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>Sweaters</p>
            </div>
            </div>
          <div className='flex  w-full gap-2'>
            <div className='w-1/3 bg-slate-900'>
              <img src={skirts} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>Skirts</p>
            </div>
            <div className='w-1/3 bg-slate-900'>
              <img src={hoodies} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>Hoodies</p>
            </div>
            <div className='w-1/3 bg-slate-900'>
              <img src={pyjamas} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>Pyjamas</p>
            </div>
            </div>
          <div className='flex  w-full gap-2'>
            <div className='w-1/3 bg-slate-900'>
              <img src={nightdresses} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>Night Dresses</p>
            </div>
            <div className='w-1/3 bg-slate-900'>
              <img src={pullnecks} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>Pullnecks</p>
            </div>
            <div className='w-1/3 bg-slate-900'>
              <img src={jackets} alt="" className='h-[130px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-xs sm:text-md'>Jackets</p>
            </div>
           </div>
            
        </div>
           <div
         className='w-full p-1 mt-5 bg-orange-700 flex justify-between'
        > <h1 className='ml-2 '>Official</h1>
        </div>

           <div className='w-full flex flex-col gap-2 p-1'>
          
          <div className='w-full flex gap-2'>
            <div className='w-1/2 bg-slate-900'>
              <img src={menofficial} alt="" className='h-[150px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-sm sm:text-md'>Casual Men</p>
            </div>
            <div className='w-1/2 bg-slate-900'>
              <img src={womenofficial} alt="" className='h-[150px] w-full object-cover' />
              <p className='ml-2 mt-1 mb-1 text-sm sm:text-md'>Casual Women</p>
            </div>
            </div>
             </div>
             


        <div
         className='w-full p-1 mt-5 bg-orange-700 flex justify-between'
        > <h1 className='ml-2 '>Utilities</h1>
        </div>
      <div className='w-full flex flex-col gap-2 p-1'>
       
         
          <div className='flex  w-full gap-2'>
            <div className='w-1/2 bg-slate-900'>
              <img src={cape} alt="" className='h-[170px] w-full object-cover' />
              <p className='ml-2 mb-1'>Caps</p>
            </div>
            <div className='w-1/2 bg-slate-900'>
              <img src={pantie} alt="" className='h-[170px] w-full object-cover' />
              <p className='ml-2 mb-1'>Men</p>
            </div>
          </div>
          
          <div className='flex  w-full gap-2'>
            <div className='w-1/2 bg-slate-900'>
              <img src={belt} alt="" className='h-[170px] w-full object-cover' />
              <p className='ml-2 mb-1'>Belts</p>
            </div>
            <div className='w-1/2 bg-slate-900'>
              <img src={boxer} alt="" className='h-[170px] w-full object-cover' />
              <p className='ml-2 mb-1'>Panties</p>
            </div>
            </div>
          <div className='flex  w-full gap-2'>
            <div className='w-1/2 bg-slate-900'>
              <img src={bra} alt="" className='h-[170px] w-full object-cover' />
              <p className='ml-2 mb-1'>Bras</p>
            </div>
            <div className='w-1/2 bg-slate-900'>
              <img src={socks} alt="" className='h-[170px] w-full object-cover' />
              <p className='ml-2 mb-1'>Socks</p>
            </div>
            </div>

      </div>

      <div className=' flex flex-col text-center bg-slate-900 p-2 mt-5 justify-center'>
        <h1 className='text-yellow-500'>Dint find your suit</h1>
        <button className='bg-orange-800 mx-5 rounded-lg py-2 mt-2 mb-1 text-white font-semibold'>Search Our store</button>
        
      </div>
      
      <div className='p-1 m-2 bg-slate-900 mt-4'>
        <Testimonials/>
      </div>

  </div>
  );
};

export default App;