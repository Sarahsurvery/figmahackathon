import React from "react";
import Navbar from "../components/Navbar";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8 sm:py-16 lg:py-20">
        <h2 className="text-3xl font-bold text-left text-gray-800 mb-8">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Information About Us */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Information About Us
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <Footer />
    </div>
  );
};

export default Contact;
