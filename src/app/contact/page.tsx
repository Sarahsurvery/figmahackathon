import React from "react";
import Navbar from "../components/Navbar";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
        <Navbar />
    
        <main className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-left text-gray-800 mb-8">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Information About Us */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Information About us
            </h3>
            <p className="text-gray-600 mb-4">
              We are available 24/7 to assist you. Feel free to reach out
              anytime.
            </p>
            <div className="flex space-x-4">
              <span className="w-8 h-8 bg-purple-600 rounded-full"></span>
              <span className="w-8 h-8 bg-pink-500 rounded-full"></span>
              <span className="w-8 h-8 bg-blue-400 rounded-full"></span>
            </div>
          </div>

          {/* Contact Way */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Contact Way
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="text-purple-600">📞</span>
                <span className="text-gray-600">+123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-purple-600">📧</span>
                <span className="text-gray-600">contact@hekto.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-purple-600">📍</span>
                <span className="text-gray-600">
                  123 Main Street, City, Country
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Get In Touch
          </h3>
          <form className="bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 p-2 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Type Your Message"
              className="w-full border border-gray-300 p-2 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-4 mt-8 rounded-lg hover:bg-purple-700"
            >
              Send Mail
            </button>
          </form>
        </div>
      </main>

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
      
              <div className="w-full md:w-2/3 ml-[50%] -mt-[28%] text-center md:text-left">
                <h1 className="text-2xs ml-[20%] mt-[23%] p-2">Customer Care</h1>
                <ul className="text-gray-600 ml-48 text-xs">
                  <li className="mb-2">My Account</li>
                  <li className="mb-4">Discount</li>
                  <li className="mb-4">Returns</li>
                  <li className="mb-4">Orders History</li>
                  <li className="mb-4">Order Tracking</li>
                </ul>
              </div>
      
              <div className="w-full md:w-2/3 ml-[65%] -mt-[32%] text-center md:text-left">
                <h1 className="text-2xs ml-[24%] mt-[28%] p-2">Pages</h1>
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
  );
};

export default Contact;
