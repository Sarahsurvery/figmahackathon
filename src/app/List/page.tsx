import React from "react";
import Image from "next/image";

import Navbar from "@/app/components/Navbar";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { CiTwitter, CiFacebook } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";
import Footer from "../components/Footer";

export default function Shoplist() {
  return (
    <section className="border-4">
      <div className="font-sans">
        <Navbar />
      </div>

      <div className="flex flex-row rounded-lg px-4 sm:px-8 md:px-16 lg:px-48">
        <div className="text-2xs py-20 sm:py-12 lg:py-20 ml-0 sm:ml-8 md:ml-20">
          <h1 className="text-blue-500 text-sm sm:text-xl">Shop List</h1>
          <p className="text-xs text-grey-800 -ml-4">Home</p>
          <p className="text-xs text-grey-800 -mt-4 ml-8">Pages</p>
          <p className="text-xs text-pink-500 -mt-4 ml-20">Shop List</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-2">
        <h1 className="text-3xl text-blue-600 mb-6">Ecommerce Accessories & Fashion Items</h1>
        <p className="text-xs -mt-10 p-4">
          About 9,620 results (0.62 seconds)
        </p>
        <div className="text-xs pl-10 text-black -mt-5 py-10">
          <h1 className="text-xs ml-[60%] -mt-20 mb-2">Per Page:</h1>
          <h2 className="text-xs ml-[68%] -mt-6 mb-2">Sort By:</h2>
        </div>

        <div className="flex items-center space-x-6 -m-10">
          <div className="hidden lg:flex items-center rounded w-1 ml-[75%] -mt-36">
            <input
              type="text"
              placeholder="Best Match"
              className="bg-slate-100 outline-none w-24 text-sm -ml-10"
            />
            <RiArrowDropDownLine className="flex flex-row text-black" />
          </div>
        </div>
        <div className="text-xs pl-10 text-black -mt-20">
          <h2 className="text-xs text-slate-400 ml-[80%] underline -mt-5 mb-2">View:</h2>
        </div>

        {/* Product Cards */}
        {[...Array(7)].map((_, index) => (
          <div key={index} className="flex justify-start p-10 m-8 -ml-24 border-2 flex-col sm:flex-row lg:flex-row">
            <img
              src={`/shop${index + 1}.png`}
              alt="Drawingroom"
              className="w-1/2 h-60 object-contain rounded-t-lg"
            />
            <div className="text-2xl sm:ml-4 lg:ml-6 mt-4 sm:mt-0">
              <h1 className="text-blue-500 flex">Accumsan tincidunt</h1>
              <p className="text-xs ml-6">$26.00</p>
              <p className="text-xs ml-20 -mt-4 text-red-500 line-through">
                $52.00
              </p>
              <p className="text-xs text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex mt-2 space-x-6">
                <IoCartOutline className="flex flex-row text-xl" />
                <CiHeart className="flex flex-row text-xl" />
                <CiZoomIn className="flex flex-row text-xl" />
              </div>
            </div>
          </div>
        ))}

        <div className="text-center border-4 bg-gray-300 px-4 py-8">
          <div className="w-full h-32 relative mx-auto">
            <img src="/image 1174.png" alt="Mini LCW Chair" />
          </div>
        </div>
         <Footer />
      </div>
    </section>
  );
}
