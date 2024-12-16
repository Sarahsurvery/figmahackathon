// nextjs_tailwind_ui.js

import React from 'react';

const LeatestProducts = () => {
  const products = [
    { name: 'Comfort Handy Craft', price: '$42.00 , $65.00', image: '/comfort1.png' },
    { name: 'Comfort Handy Craft', price: '$42.00 $65.00', image: '/comfort2.png' },
    { name: 'Comfort Handy Craft',  price: '$42.00 $65.00', image: '/chair1.png' },
    { name: 'Comfort Handy Craft', price: '$42.00 , $65.00', image: '/comfort4.png' },
    { name: 'Comfort Handy Craft', price: '$42.00 $65.00', image: '/comfort5.png' },
    { name: 'Comfort Handy Craft',  price: '$42.00 $65.00', image: '/chair4.png' },
  ];

  return (
    <div className="my-8 p-8">
      <h2 className="text-3xl font-normal text-center text-blue-900 hover:underline mb-8">Leatest Products</h2>
      <div className="flex flex-row my-8">
        <h1 className='text-sm font-normal px-[36%] mt-[-1%] text-center text-pink-500 hover:underline'>
          New Arrival</h1>
          <div className="flex flex-row mt-[-1%] ml-[-32%]">
          <h3 className='text-sm font-normal text-center text-blue-900'>
            Best Seller 
            </h3>
            </div>
            <div className="flex flex-row mt-[-1%] ml-6">
          <h3 className='text-sm font-normal text-center text-blue-900'>
            Featured 
            </h3>
            </div>
            <div className="flex flex-row mt-[-1%] ml-6 ">
          <h3 className='text-sm font-normal text-center text-blue-900'>
            Special Offer
            </h3>
            </div>
        </div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative border rounded- px-32 hover:shadow-lg transition-shadow group bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-md mb-2 w-full h-40 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <button className="bg-green-500 text-white px-4 py-2 rounded-md">View Details</button> */}
            </div>
            <h3 className="text-sm font-normal text-center text-blue-900 mb-2">
              {product.name} {product.price}
            </h3>
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeatestProducts;
