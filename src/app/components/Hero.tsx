import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start border-4 bg-gray-300">
        {/* Left Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img src="/lamp.png" alt="Hanging" className="w-2/3 md:w-full" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 py-10 text-center md:text-left">
          <p className="text-pink-500 font-medium">Best Furniture For Your Castle</p>

          <h1 className="text-4xl font-bold text-gray-800">New Furniture Collection</h1>
          <h2 className="text-3xl mt-2 text-gray-600">Trends in 2020</h2>
          <p className="text-gray-500 text-sm mt-4 mx-auto md:mx-0 w-11/12 md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
            adipiscing in phasellus non in justo.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-400">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="/Sofaheader.png"
            alt="Sofa"
            className="w-2/3 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

