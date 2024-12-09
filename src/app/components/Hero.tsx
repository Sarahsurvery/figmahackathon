import React from "react";
// import Image from "next/image";

interface HeroProps {
  font: {
    className: string;
  };
}
export default function Hero({font}: HeroProps) {

// const Hero = () => {
  return (
    <section className="{`${font.className} links-parent`} bg-grey-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* left image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img src="/lamp.png" alt="Hanging" className="w-2/3 md:w-full" />
        </div>
        
        {/* Text Content */}
        
        <div className="w-full md:w-2/3 py-[12%] text-center md:text-left">
          <p className="text-pink-500 font-medium">
            Best Furniture For Your Castle
          </p>
            
          <h1 className="text-4xl font-bold text-grey-800">
            New Furniture Collection
          </h1>
          <h2 className="text-xl mt-2 text-grey-600">Trends in 2020</h2>
          <p className="text-grey-500 mt-4 text-sm flex flex-row w-[45%] py-2 {`${font.className} links-parent`} ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="mt-6 px-6 py-3 flex flex-row bg-pink-500 text-white rounded-lg shadow hover:bg-pink-400">
            Shop Now
           </button>
          <div className="w-full md:w-1/2 ml-[50%] pl-25 mt-[-20%] md:justify-end">
          <img src="/Sofaheader.png" alt="Sofa" className="w-2/3 md:w-full relative bottom-40" />
          </div>
        </div>
       </div>

       {/* Feature section */}
       <div className="w-full md:w-2/3 text-2xl flex flex-col ml-[30%] px-[5%] top-[90%] absolute justify-center">
          <h1 className="text-blue-950 hover:underline">Featured Products</h1>
          <div  className="w-full md:w-1/2 ml-[-50%] pl-20 mt-[-20%]">
            <img src="/chair1.png" alt="Chair" className="w-1/2 md:w-full relative mt-[50%] px-10" />
          <p className="text-pink-500 justify-between ml-14 text-sm hover:underline flex flex-row w-[45%]">Cantilever chair</p>
          <div className="flex flex-row px-20 gap-1">
          <img src="/GreenRec.png" alt="rectangle" className=" shadow-green-600"/>
          <img src="/RedRec.png" alt="rectangle" className=" shadow-red-600"/>
          <img src="/BlueRec.png" alt="rectangle" className=" shadow-blue-600"/>
          </div>
          
          <p className="text-blue-900 justify-between ml-14 underline text-sm flex flex-row">Code - Y523201</p>
          <p className="text-grey-500 justify-between ml-20 text-sm flex flex-row">$42.00</p>
          </div>
          <div  className="w-full md:w-1/2 ml-[-20%] pl-20 mt-[-36%] flex ">
            <img src="/chair2.png" alt="Chair" className="w-1/2 md:w-full relative px-16" />
          </div>
        </div>
    </section>
  );
};



