import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

export default function Home() {
  return (
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
    

   </div>
  );
}
