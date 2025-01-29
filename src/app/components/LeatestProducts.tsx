import Image from 'next/image';
import React from 'react';

const LeatestProducts = () => {
  const products = [
    { name: 'Comfort Handy Craft', price: '$42.00 , $65.00', image: '/comfort1.png' },
    { name: 'Comfort Handy Craft', price: '$42.00 $65.00', image: '/comfort2.png' },
    { name: 'Comfort Handy Craft', price: '$42.00 $65.00', image: '/chair1.png' },
    { name: 'Comfort Handy Craft', price: '$42.00 , $65.00', image: '/comfort4.png' },
    { name: 'Comfort Handy Craft', price: '$42.00 $65.00', image: '/comfort5.png' },
    { name: 'Comfort Handy Craft', price: '$42.00 $65.00', image: '/chair4.png' },
  ];

  return (
    <div className="my-8 p-8">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-center text-blue-900 hover:underline mb-8">
        Latest Products
      </h2>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 mb-8">
        <h3 className="text-sm font-medium text-pink-500 hover:underline">
          New Arrival
        </h3>
        <h3 className="text-sm font-medium text-blue-900 hover:underline">
          Best Seller
        </h3>
        <h3 className="text-sm font-medium text-blue-900 hover:underline">
          Featured
        </h3>
        <h3 className="text-sm font-medium text-blue-900 hover:underline">
          Special Offer
        </h3>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative border rounded-md p-4 bg-white hover:shadow-xl transition-shadow group"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={160}
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-base font-semibold text-center text-gray-700 mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-center text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeatestProducts;
