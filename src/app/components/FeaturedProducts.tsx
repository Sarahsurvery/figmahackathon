// nextjs_tailwind_ui.js

import Image from "next/image";
import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      Image: "/chair1.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      Image: "/chair2.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      Image: "/chair3.png",
    },
    {
      name: "Cantilever chair",
      code: "Y523201",
      price: "$42.00",
      Image: "/chair4.png",
    },
  ];

  return (
    <div className="my-2">
      <h2 className="text-3xl font-bold text-center text-blue-900 hover:underline p-4">
        Featured Products
      </h2>
      <div className="lg:max-w-[1440px] sm:max-w-[800px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative border rounded-lg p-24 hover:underline md:block transition-shadow group bg-white"
          >
            <img
              // <Image 
              src={product.Image}
              alt={product.name}
              className="rounded-md mb-4 w-full h-40 object-cover"
            />
            <div className="absolute inset-0 pt-16 flex items-center justify-center">
              <button className="bg-green-500 text-white px-1 py-1 rounded-md">
                View Details
              </button>
            </div>
            <h3 className="text-sm font-semibold text-center text-pink-500 hover:underline mb-2">
              {product.name}
            </h3>
            <div className="flex justify-center mt-2 space-x-2">
              <span className="w-8 h-1 bg-teal-500"></span>
              <span className="w-8 h-1 bg-pink-500"></span>
              <span className="w-8 h-1 bg-blue-800"></span>
            </div>
            <p className="text-center text-gray-500 mb-1">
              Code - {product.code}
            </p>
            <p className="text-center text-blue-800 font-bold">
              {product.price}
            </p>
          </div>
          
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
              <span className="w-8 h-1 bg-teal-500"></span>
              <span className="w-8 h-1 bg-pink-500"></span>
              <span className="w-8 h-1 bg-blue-800"></span>
            </div>
    </div>
  );
};

export default FeaturedProducts;
