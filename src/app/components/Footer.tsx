import React from "react";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-10 mt-4">
      <div className="container mx-auto grid gap-8 md:grid-cols-4 text-sm px-4">
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-semibold">Heckto</h1>
          <p className="text-gray-600 mt-4">Enter Email Address</p>
          <button className="bg-red-500 hover:bg-blue-800 text-white px-4 py-2 rounded mt-4">
            Shop Now
          </button>
          <p className="text-gray-600 mt-6">Contact Info</p>
          <p className="text-gray-500 mt-2">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        {/* Categories Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Care</h2>
          <ul className="space-y-2 text-gray-600">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Pages</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t mt-10 pt-4 text-gray-500">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p>© Webecy - All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <CiFacebook className="h-6 w-6 text-blue-500 hover:text-blue-700" />
            <FaInstagramSquare className="h-6 w-6 text-pink-500 hover:text-pink-700" />
            <CiTwitter className="h-6 w-6 text-blue-400 hover:text-blue-600" />
          </div>
        </div>
      </div>
    </footer>
  );
}
