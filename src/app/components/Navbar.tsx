"use client";

import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar(){
    return(
            
               <div className="font-sans">
                <header className="flex justify-between items-center bg-purple-500 shadow-md">
                  <div className="text-2x font-bold text-white flex flex-row ml-80">
                    <FaRegEnvelope className="flex flex-row ml-[-80%] my-[1.5%]"/>
                  mhhasanul@gmail.com
                  
                  </div>
                  <div className="text-2x flex flex-row py-2 font-bold text-white mr-[100%] justify-center">
                    <FaPhoneVolume className="flex flex-row ml-[-50%] my-1" />
                  (12345)67890
                  
                    <div className="flex flex-row px-40">English
                    <RiArrowDropDownLine className="flex flex-row my-1"/></div>
                    <div className="flex flex-rowitems-baseline ml-[-16%]">US
                    <RiArrowDropDownLine className="flex flex-row my-1"/></div>
                    <div className="flex flex-row px-10 ml-[-3%]">Login
                    <CiUser className="flex flex-row my-1"/></div>
                    <div className="flex flex-row px-10 ml-[-8%]">Wishlist
                    <CiHeart className="flex flex-row text-xl my-1"/></div>
                    <IoCartOutline className="flex flex-row text-xl mt-1 ml-[-4%]"/>
                  </div>
                  
                </header>
            
        <div className="font-sans">
            {/* Navbar */}
            <div className="flex justify-between items-center px-8 py-2 bg-white shadow-md">
            <div className="text-2xl pl-10 font-bold text-black">Hekto</div>
            <nav className="flex space-x-8 pr-[87%] pl-48 bg-grey-300 text-blue-500">
        
            <Link href="/" className="text-slate-600 hover:text-black underline">
             Home
            </Link>
            <Link href="/EcommAcesso" className="text-slate-600 hover:text-black underline">
              Pages
            </Link>
            <Link href="/Products" className="text-slate-600 hover:text-black underline">
             Products
            </Link>
            <Link href="/" className="text-slate-600 hover:text-black underline">
             Blog
            </Link>
            <Link href="/List" className="text-slate-600 hover:text-black underline">
             Shop
             <div>
             <RiArrowDropDownLine className="flex flex-row -mt-4 ml-8"/>
             </div>
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-black underline">
             Contact
            </Link>
            </nav>
        </div>
            <div className="flex items-center space-x-6 -m-10 px-[85%]">
            <div className="hidden lg:flex items-center bg-slate-100 rounded-md py-2">
                <input
                 type="text"
                 placeholder="Search ..."
                 className="bg-slate-100 outline-none text-sm"
            />

        <CiSearch />
          </div>
          </div>
                  
          </div>
          </div>
    )
}