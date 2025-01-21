
import React from 'react'
import { CiFacebook, CiTwitter } from "react-icons/ci"
import { FaInstagramSquare } from "react-icons/fa"






{/* Footer Section */}
export default function Footer(){
       
       return(
       <>
       <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start border-4 bg-gray-300 mt-2 w-full">
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
           </div><div className="w-full md:w-2/3 ml-[30%] -mt-80 text-center md:text-left">
                   <h1 className="text-2xs ml-[24%] -mt-40 p-2">Categories</h1>
                   <ul className="text-gray-600 ml-48 text-xs">
                       <li className="mb-2">Laptops & Computers</li>
                       <li className="mb-4">Cameras & Photography</li>
                       <li className="mb-4">Smart Phones & Tablets</li>
                       <li className="mb-4">Video Games & Consoles</li>
                       <li className="mb-4">Waterproof Headphones</li>
                   </ul>
               </div><div className="w-full md:w-2/3 ml-[50%] -mt-[30%] text-center md:text-left">
                   <h1 className="text-2xs ml-[20%] mt-[23%] p-2">Customer Care</h1>
                   <ul className="text-gray-600 ml-48 text-xs">
                       <li className="mb-2">My Account</li>
                       <li className="mb-4">Discount</li>
                       <li className="mb-4">Returns</li>
                       <li className="mb-4">Orders History</li>
                       <li className="mb-4">Order Tracking</li>
                   </ul>
               </div><div className="w-full md:w-2/3 ml-[65%] -mt-[30%] text-center md:text-left">
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
               </>
    
  )}   
  
 