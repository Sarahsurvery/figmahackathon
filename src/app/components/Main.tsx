import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Home() {
  return (
   <div className="font-sans">
    <header className="flex justify-between items-center bg-purple-300 shadow-md">
      <div className="text-2x font-bold text-white flex flex-row ml-80">
        <FaRegEnvelope className="flex flex-row ml-30"/>
      mhhasanul@gmail.com
      
      </div>
      <div className="text-2x flex flex-row py-4 font-bold text-white mr-[100%] justify-center">
        <FaPhoneVolume className="flex flex-row ml-20" />
      (12345)67890
      
      </div>
    </header>
    

   </div>
  );
}
