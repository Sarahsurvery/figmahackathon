"use client";
import Image from "next/image";
import React from "react";
// import Link from "next/link";
// import { Main } from "next/document";
import Navbar from "@/app/components/Navbar";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { CiTwitter, CiFacebook } from "react-icons/ci";

export default function Acessories() {
  //  return (
  const products = [
    {
      name: "Vel elit euismod",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/comfortgrey.png",
    },
    {
      name: "Ultrices condimentum imperdiet",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/comfortsofa.png",
    },
    {
      name: "Vitae suspendisse sed",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/greychair.png",
    },
    {
      name: "Sed at fermentum",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/bag.png",
    },
    {
      name: "Fusce pellentesque at",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/digiwatch.png",
    },
    {
      name: "Vestibulum magna laoreet",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/gentswatch.png",
    },
    {
      name: "Sollicitudin amet orci",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/headphone.png",
    },
    {
      name: "Ultrices mauris sit",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/mourissif.png",
    },
    {
      name: "Pellentesque condimentum ac",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/wrist.png",
    },
    {
      name: "Cras scelerisque velit",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/purplehead.png",
    },
    {
      name: "Lectus vulputate faucibus",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/cam 2.png",
    },
    {
      name: "Purus risus, ut",
      price: "$26.00",
      oldPrice: "$46.00",
      Image: "/bag.png",
    },
  ];

  return (
    <section>
      <div className="font-sans">
        <header className="flex justify-between items-center bg-purple-500 shadow-md">
          <div className="text-2x font-bold text-white flex flex-row ml-80">
            <FaRegEnvelope className="flex flex-row ml-[-80%] my-[1.5%]" />
            mhhasanul@gmail.com
          </div>
          <div className="text-2x flex flex-row py-2 font-bold text-white mr-[100%] justify-center">
            <FaPhoneVolume className="flex flex-row ml-[-50%] my-1" />
            (12345)67890
            <div className="flex flex-row px-40">
              English
              <RiArrowDropDownLine className="flex flex-row my-1" />
            </div>
            <div className="flex flex-rowitems-baseline ml-[-16%]">
              US
              <RiArrowDropDownLine className="flex flex-row my-1" />
            </div>
            <div className="flex flex-row px-10 ml-[-3%]">
              Login
              <CiUser className="flex flex-row my-1" />
            </div>
            <div className="flex flex-row px-10 ml-[-8%]">
              Wishlist
              <CiHeart className="flex flex-row text-xl my-1" />
            </div>
            <IoCartOutline className="flex flex-row text-xl mt-1 ml-[-4%]" />
          </div>
        </header>
        <Navbar />
        <div className="w-full md:w-2/3 text-center md:text-left rounded-lg">
          <h1 className="text-pink-500 font-normal ml-52 mt-28 rounded-lg">
            Shop Grid Default
          </h1>

          <p className="text-xs text-grey-800 ml-44">Home</p>
          <p className="text-xs text-grey-800 -mt-4 ml-60">Pages</p>
          <p className="text-xs text-pink-500 -mt-4 ml-72">Shop Grid Default</p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl text-blue-600 mb-6">
          Ecommerce Accessories & Fashion Items
        </h1>
        <p className="text-xs mb-2 -mt-4 ">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg shadow hover:shadow-lg transition"
            >
              {/* <img */}
              <Image
                src={product.Image}
                alt={product.name}
                className="w-full h-60 object-contain rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-500">
                  <span className="text-red-500 font-semibold">
                    {product.price}
                  </span>{" "}
                  <span className="line-through ml-2 text-gray-400">
                    {product.oldPrice}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center border-4 bg-gray-300 px-4 ">
          <div className="w-full h-32 relative mx-auto">
            <img
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
