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

export default function Navbar() {
  return (
    <div className="font-sans">
      <header className="bg-purple-500 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-2">
          <div className="flex items-center space-x-2">
            <FaRegEnvelope className="text-white" />
            <span className="text-white text-sm">mhhasanul@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhoneVolume className="text-white" />
            <span className="text-white text-sm">(12345)67890</span>
            <div className="flex items-center space-x-1">
              <span className="text-white">English</span>
              <RiArrowDropDownLine className="text-white" />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-white">US</span>
              <RiArrowDropDownLine className="text-white" />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-white">Login</span>
              <CiUser className="text-white" />
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-white">Wishlist</span>
              <CiHeart className="text-white" />
            </div>
            <IoCartOutline className="text-white text-xl" />
          </div>
        </div>
      </header>

      <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="container mx-auto flex items-center justify-between">
          <span className="self-center text-xl font-bold text-black">Hekto</span>
          <nav className="hidden md:flex space-x-8 text-blue-500">
            <Link href="/" className="text-black hover:text-blue-600">Home</Link>
            <Link href="/EcommAcesso" className="text-black hover:text-blue-600">Pages</Link>
            <Link href="/Products" className="text-black hover:text-blue-600">Products</Link>
            <Link href="#" className="text-black hover:text-blue-600">Blog</Link>
            <Link href="/List" className="text-black hover:text-blue-600">Shop</Link>
            <Link href="/Contact" className="text-black hover:text-blue-600">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center justify-end mt-4 md:mt-0">
          <div className="hidden lg:flex items-center bg-slate-100 rounded-md py-2 px-4">
            <input
              type="text"
              placeholder="Search ..."
              className="bg-slate-100 outline-none text-sm w-full"
            />
            <CiSearch className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
