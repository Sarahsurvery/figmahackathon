import Image from "next/image";
import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/chair1.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/chair2.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/chair3.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      image: "/chair4.png",
    },
  ];

  return (
    <div className="my-8 px-4 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-blue-900 hover:underline mb-8">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white group"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            
            {/* Product Info */}
            <h3 className="text-base font-semibold text-center text-pink-500 mb-2 group-hover:underline">
              {product.name}
            </h3>
            
            {/* Color Indicators */}
            <div className="flex justify-center mt-2 space-x-2">
              <span className="w-8 h-1 bg-teal-500"></span>
              <span className="w-8 h-1 bg-pink-500"></span>
              <span className="w-8 h-1 bg-blue-800"></span>
            </div>
            
            <p className="text-center text-gray-500 mt-2">Code - {product.code}</p>
            <p className="text-center text-blue-800 font-bold">{product.price}</p>

            {/* View Details Button */}
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Bars */}
      <div className="flex justify-center mt-8 space-x-2">
        <span className="w-8 h-1 bg-teal-500"></span>
        <span className="w-8 h-1 bg-pink-500"></span>
        <span className="w-8 h-1 bg-blue-800"></span>
      </div>
    </div>
  );
};

export default FeaturedProducts;

