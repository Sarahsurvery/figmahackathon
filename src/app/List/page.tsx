import React from "react";
import Image from "next/image";

import Navbar from "@/app/components/Navbar";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { CiTwitter, CiFacebook } from "react-icons/ci";
import { CiZoomIn } from "react-icons/ci";

export default function Shoplist() {
  return (
    <section className="border-4">
        <div className="font-sans">
        <Navbar />
      </div>

        <div className="flex flex-row rounded-lg">
        <div className="text-2xs py-20 ml-48">
          <h1 className="text-blue-500">Shop List</h1>
          <p className="text-xs text-grey-800 -ml-4">Home</p>
          <p className="text-xs text-grey-800 -mt-4 ml-8">Pages</p>
          <p className="text-xs text-pink-500 -mt-4 ml-20">Shop List</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-2">
        <h1 className="text-3xl text-blue-600 mb-6">
          Ecommerce Accessories & Fashion Items
        </h1>
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
          <h2 className="text-xs text-slate-400 ml-[80%] underline -mt-5 mb-2">
            View:
          </h2>
        </div>
        <div className="flex justify-start p-10 m-8 -ml-24 border-2">
          <img
            //  <Image
            src="/Shop1.png"
            alt="Drawingroom"
            // Layout="fill"
            // ObjectFit="contain"
            className="w-1/2 h-60 object-contain rounded-t-lg"
          />
          <div className="text-2xl">
            <h1 className="text-blue-500 flex">Accumsan tincidunt</h1>
            <p className="text-xs ml-6">$26.00</p>
            <p className="text-xs ml-20 -mt-4 text-red-500 line-through">
              $52.00
            </p>
            <p className="text-xs text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <IoCartOutline className="flex flex-row text-xl mt-2 ml-4" />
            <CiHeart className="flex flex-row text-xl -mt-5 ml-12" />
            <CiZoomIn className="flex flex-row text-xl -mt-5 ml-20" />
          </div>
        </div>
        <div className="flex justify-start p-10 m-8 -ml-24 border-2">
          <img
            //  <Image
            src="/shop2.png"
            alt="Drawingroom"
            // Layout="fill"
            // ObjectFit="contain"
            className="w-1/2 h-60 object-contain rounded-t-lg"
          />
          <div className="text-2xl">
            <h1 className="text-blue-500 flex">Accumsan tincidunt</h1>
            <p className="text-xs ml-6">$26.00</p>
            <p className="text-xs ml-20 -mt-4 text-red-500 line-through">
              $52.00
            </p>
            <p className="text-xs text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <IoCartOutline className="flex flex-row text-xl mt-2 ml-4" />
            <CiHeart className="flex flex-row text-xl -mt-5 ml-12" />
            <CiZoomIn className="flex flex-row text-xl -mt-5 ml-20" />
          </div>
        </div>
        <div className="flex justify-start p-10 m-8 -ml-24 border-2">
          <img
            //  <Image
            src="/shop3.png"
            alt="Drawingroom"
            // Layout="fill"
            // ObjectFit="contain"
            className="w-1/2 h-60 object-contain rounded-t-lg"
          />
          <div className="text-2xl">
            <h1 className="text-blue-500 flex">Accumsan tincidunt</h1>
            <p className="text-xs ml-6">$26.00</p>
            <p className="text-xs ml-20 -mt-4 text-red-500 line-through">
              $52.00
            </p>
            <p className="text-xs text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <IoCartOutline className="flex flex-row text-xl mt-2 ml-4" />
            <CiHeart className="flex flex-row text-xl -mt-5 ml-12" />
            <CiZoomIn className="flex flex-row text-xl -mt-5 ml-20" />
          </div>
        </div>
        <div className="flex justify-start p-10 m-8 -ml-24 border-2">
          <img
            //  <Image
            src="/shop4.png"
            alt="Drawingroom"
            // Layout="fill"
            // ObjectFit="contain"
            className="w-1/2 h-60 object-contain rounded-t-lg"
          />
          <div className="text-2xl">
            <h1 className="text-blue-500 flex">Accumsan tincidunt</h1>
            <p className="text-xs ml-6">$26.00</p>
            <p className="text-xs ml-20 -mt-4 text-red-500 line-through">
              $52.00
            </p>
            <p className="text-xs text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <IoCartOutline className="flex flex-row text-xl mt-2 ml-4" />
            <CiHeart className="flex flex-row text-xl -mt-5 ml-12" />
            <CiZoomIn className="flex flex-row text-xl -mt-5 ml-20" />
          </div>
        </div>
        <div className="flex justify-start p-10 m-8 -ml-24 border-2">
          <img
            //  <Image
            src="/shop5.png"
            alt="Drawingroom"
            // Layout="fill"
            // ObjectFit="contain"
            className="w-1/2 h-60 object-contain rounded-t-lg"
          />
          <div className="text-2xl">
            <h1 className="text-blue-500 flex">Accumsan tincidunt</h1>
            <p className="text-xs ml-6">$26.00</p>
            <p className="text-xs ml-20 -mt-4 text-red-500 line-through">
              $52.00
            </p>
            <p className="text-xs text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <IoCartOutline className="flex flex-row text-xl mt-2 ml-4" />
            <CiHeart className="flex flex-row text-xl -mt-5 ml-12" />
            <CiZoomIn className="flex flex-row text-xl -mt-5 ml-20" />
          </div>
        </div>
        <div className="flex justify-start p-10 m-8 -ml-24 border-2">
          <img
            //  <Image
            src="/shop6.png"
            alt="Drawingroom"
            // Layout="fill"
            // ObjectFit="contain"
            className="w-1/2 h-60 object-contain rounded-t-lg"
          />
          <div className="text-2xl">
            <h1 className="text-blue-500 flex">Accumsan tincidunt</h1>
            <p className="text-xs ml-6">$26.00</p>
            <p className="text-xs ml-20 -mt-4 text-red-500 line-through">
              $52.00
            </p>
            <p className="text-xs text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <IoCartOutline className="flex flex-row text-xl mt-2 ml-4" />
            <CiHeart className="flex flex-row text-xl -mt-5 ml-12" />
            <CiZoomIn className="flex flex-row text-xl -mt-5 ml-20" />
          </div>
        </div>
        <div className="flex justify-start p-10 m-8 -ml-24 border-2">
          <img
            //  <Image
            src="/shop7.png"
            alt="Drawingroom"
            // Layout="fill"
            // ObjectFit="contain"
            className="w-1/2 h-60 object-contain rounded-t-lg"
          />
          <div className="text-2xl">
            <h1 className="text-blue-500 flex">Accumsan tincidunt</h1>
            <p className="text-xs ml-6">$26.00</p>
            <p className="text-xs ml-20 -mt-4 text-red-500 line-through">
              $52.00
            </p>
            <p className="text-xs text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <IoCartOutline className="flex flex-row text-xl mt-2 ml-4" />
            <CiHeart className="flex flex-row text-xl -mt-5 ml-12" />
            <CiZoomIn className="flex flex-row text-xl -mt-5 ml-20" />
          </div>
        </div>
        <div className="text-center border-4 bg-gray-300 px-4 ">
          <div className="w-full h-32 relative mx-auto">
            <img
              //  <Image
              src="/image 1174.png"
              alt="Mini LCW Chair"
              // layout="fill"
              // objectFit="contain"
            />
          </div>
        </div>

        {/* Footer Section */}

        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start border-4 bg-gray-300 m-2 w-full">
          <div className="w-full md:w-2/3 py-[12%] ml-[-8%] text-center md:text-left">
            <h1 className="text-2xl ml-64 -mt-32">Heckto</h1>
            <p className="text-xs ml-72 mt-4 hover:underline text-gray-500">
              Enter Email Address
            </p>
            <button className="bg-red-500 hover:bg-blue-800 ml-[55%] -mt-20 px-4 rounded">
              Shop Now
            </button>
            <p className="text-xs ml-72 mt-4 text-gray-500">Contact Info</p>
            <p className="text-xs ml-72 mt-4 text-gray-500">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/3 ml-[30%] -mt-80 text-center md:text-left">
          <h1 className="text-2xs ml-[24%] -mt-40 p-2">Categories</h1>
          <ul className="text-gray-600 ml-48 text-xs">
            <li className="mb-2">Laptops & Computers</li>
            <li className="mb-4">Cameras & Photography</li>
            <li className="mb-4">Smart Phones & Tablets</li>
            <li className="mb-4">Video Games & Consoles</li>
            <li className="mb-4">Waterproof Headphones</li>
          </ul>
        </div>

        <div className="w-full md:w-2/3 ml-[50%] -mt-[30%] text-center md:text-left">
          <h1 className="text-2xs ml-[20%] mt-[23%] p-2">Customer Care</h1>
          <ul className="text-gray-600 ml-48 text-xs">
            <li className="mb-2">My Account</li>
            <li className="mb-4">Discount</li>
            <li className="mb-4">Returns</li>
            <li className="mb-4">Orders History</li>
            <li className="mb-4">Order Tracking</li>
          </ul>
        </div>

        <div className="w-full md:w-2/3 ml-[65%] -mt-[30%] text-center md:text-left">
          <h1 className="text-2xs ml-[24%] mt-[23%] p-2">Pages</h1>
          <ul className="text-gray-600 ml-48 text-xs">
            <li className="mb-2"> Blog</li>
            <li className="mb-4">Browse the Shop</li>
            <li className="mb-4">Category</li>
            <li className="mb-4">Pre-Built Pages</li>
            <li className="mb-4">Visual Composer Elements</li>
            <li className="mb-4">WooCommerce Pages</li>
          </ul>

          <div className="w-full md:w-2/3 ml-[65%] -mt-[30%] text-center md:text-left">
            <p className="text-slate-500 mt-80 -ml-[195%]">
              ©Webecy - All Rights Reserved
            </p>

            <div className="flex space-x-4 -ml-72 -mt-5">
              <CiFacebook className="h-6 w-6 text-blue-500 hover:text-blue-700" />

              <FaInstagramSquare className="h-6 w-6 text-pink-500 hover:text-pink-700" />

              <CiTwitter className="h-6 w-6 text-pink-500 hover:text-pink-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
