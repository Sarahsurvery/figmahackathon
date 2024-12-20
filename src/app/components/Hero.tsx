import React from "react";
import Image from "next/image";



const Hero = () => {
  return (
    <section className="{`${font.className} links-parent`} bg-grey-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start border-4 bg-gray-300">
        {/* left image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          {/* <img src="/lamp.png" alt="Hanging" className="w-2/3 md:w-full" /> */}
          <Image src="/lamp.png" alt="Hanging" className="w-2/3 md:w-full" />
        </div>

        {/* Text Content */}

        <div className="w-full md:w-2/3 py-28 ml-[-8%] text-center md:text-left">
          <p className="text-pink-500 font-medium">
            Best Furniture For Your Castle
          </p>

          <h1 className="text-4xl font-bold text-grey-800">
            New Furniture Collection
          </h1>
          <h2 className="text-3xl mt-2 text-grey-600">Trends in 2020</h2>
          <p className="text-grey-500 text-xs flex flex-row w-[50%] {`${font.className} links-parent`} ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="mt-6 px-6 py-5 flex flex-row bg-pink-500 text-white rounded-lg shadow hover:bg-pink-400">
            Shop Now
          </button>
          <div className="w-full md:w-1/2 ml-[60%] mt-[-20%] md:justify-end">
            {/* <img */}
             <Image  
              src="/Sofaheader.png"
              alt="Sofa"
              className="w-2/3 md:w-full relative bottom-40"
            />
          </div>
        </div>
      </div>
        </section> 
  );
};
export default Hero;
