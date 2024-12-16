import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Navbar(){
    return(
        <div className="font-sans">
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-2 bg-white shadow-md">
            <div className="text-2xl pl-10 font-bold text-black">Hekto</div>
            <nav className="flex space-x-8 pr-[87%] pl-48 bg-grey-300 text-blue-500">
            
            <a href="#" className="text-slate-600 hover:text-black underline">
             Home
            </a>
            <a href="#" className="text-slate-600 hover:text-black underline">
              Pages
            </a>
            <a href="#" className="text-slate-600 hover:text-black underline">
             Products
            </a>
            <a href="#" className="text-slate-600 hover:text-black underline">
             Shop
             </a>
            <a href="#" className="text-slate-600 hover:text-black underline">
             Contact
            </a>
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
    )
}