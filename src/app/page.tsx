
// import Image from "next/image";

import React from 'react';

import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import FeaturedProducts from "../app/components/FeaturedProducts";
import LeatestProducts from "../app/components/LeatestProducts";
import Shopex from "../app/components/shopex";
import TrendingProducts from "../app/components/TrendingProducts";
import Discount from "../app/components/Discount";


export default function Home() {
 return (
   <div >
          
          <Navbar />
          <Hero />
          <FeaturedProducts />
          <LeatestProducts />
          <Shopex />
          <TrendingProducts />
          <Discount />
         
   </div>
   );
 }
