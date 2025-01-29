import Image from "next/image";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { CiTwitter, CiFacebook } from "react-icons/ci";
import Footer from "../components/Footer";

export default function Acessories() {
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
        <Navbar />
        <div className="w-full md:w-2/3 text-center md:text-left rounded-lg">
          <h1 className="text-pink-500 font-normal ml-8 md:ml-52 mt-8 rounded-lg text-xl md:text-2xl">
            Shop Grid Default
          </h1>
          <p className="text-xs text-grey-800 ml-8 md:ml-44">Home</p>
          <p className="text-xs text-grey-800 -mt-4 ml-8 md:ml-60">Pages</p>
          <p className="text-xs text-pink-500 -mt-4 ml-8 md:ml-72">Shop Grid Default</p>

          <Link href="/List" className="text-slate-600 hover:text-pink-500 underline">
            <div className="-mt-6 ml-[96%] text-2xl font-bold">shoplist</div>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4">
        <h1 className="text-3xl text-blue-600 p-4">Ecommerce Accessories & Fashion Items</h1>
        <p className="text-xs -mt-10 p-4">About 9,620 results (0.62 seconds)</p>

        <div className="text-xs text-black mt-4 py-10 flex justify-between">
          <div className="text-xs ml-auto -mt-20 mb-2">Per Page:</div>
          <div className="text-xs -mt-20 mb-2">Sort By:</div>
        </div>

        <div className="flex items-center space-x-6 -m-10 justify-between">
          <div className="hidden lg:flex items-center rounded w-1 ml-[75%] -mt-36">
            <input type="text" placeholder="Best Match" className="bg-slate-100 outline-none w-24 text-sm -ml-10" />
            <RiArrowDropDownLine className="flex flex-row text-black" />
          </div>
        </div>

        <div className="text-xs pl-10 text-black -mt-20">
          <h2 className="text-xs text-slate-400 ml-[80%] underline -mt-5 mb-2">View:</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg shadow hover:shadow-lg transition">
              <img
                src={product.Image}
                alt={product.name}
                className="w-full h-60 object-contain rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-500">
                  <span className="text-red-500 font-semibold">{product.price}</span>
                  <span className="line-through ml-2 text-gray-400">{product.oldPrice}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center border-4 bg-gray-300 px-4 m-4">
          <div className="w-full h-34 relative mx-auto">
            <img src="/image 1174.png" alt="Mini LCW Chair" />
          </div>
        </div>
        <Footer/>
      </div>
    </section>
  );
}
