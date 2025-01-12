import Image from 'next/image';
import Navbar from "@/app/components/Navbar";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";

const ProductDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row rounded-lg">
        <div className="text-2xs py-20 ml-48">
          <h1 className="text-blue-500 text-2xl">Product Details</h1>
          <p className="text-xs text-grey-800 -ml-4">Home</p>
          <p className="text-xs text-grey-800 -mt-4 ml-8">Pages</p>
          <p className="text-xs text-pink-500 -mt-4 ml-20">Product Detail</p>
        </div>
      </div>
      <div className="container mx-auto p-20">
        <h2 className="text-2xl font-bold mb-16 ml-[64%]">
          Playwood Arm Chair
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="items-center ml-[60%] mt-[-26%] w-60">
            {/* <img */}
               <Image 
              src="/handbag.png"
              alt="Playwood Arm Chair"
              // className="w-60"
            />
          </div>
          {/* <img */}
            <Image 
            src="/bag1.png"
            alt="Playwood Arm Chair"
            className="w-24 ml-[-96%] mt-[-32%]"
          />

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div> */}
          {/* <img */}
             <Image 
            src="/sidelamp.png"
            alt="Playwood Arm Chair"
            className="w-24 ml-12 mt-[-45%]"
          />
          {/* <img */}
             <Image 
            src="/wallet.png"
            alt="Playwood Arm Chair"
            className="w-24 -ml-[96%] -mt-28"
          />
          {/* </div> */}
          <div>
            <p className="text-xs text-gray-700 ml-[145%] -mt-[55%]">Price:$500</p>
            <p className="text-gray-600 ml-[145%] mt-[1%]">Color:Black</p>
            <button className="bg-blue-600 text-white px-8 rounded ml-[145%] w-40">
              Add to Cart
            </button>
          </div>
          <p className="text-gray-600 -mt-52 ml-[35%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-xs hover:underline">Description</h3>
          <h3 className="text-xs -mt-4 ml-24 hover:underline">
            Additional Info
          </h3>
          <h3 className="text-xs -mt-4 ml-52 hover:underline">Reviews</h3>
          <h3 className="text-xs -mt-4 ml-72 hover:underline">Video</h3>

          <h4 className="text-xs mt-8">Various tempor.</h4>
          <p className="text-xs p-4 text-slate-500">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>

          <h4 className="text-xs mt-8">More details</h4>
          <p className="text-xs p-2 text-slate-500">
            → Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
          <p className="text-xs p-2 text-slate-500">
            → Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
          <p className="text-xs p-2 text-slate-500">
            →Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
          <p className="text-xs p-2 text-slate-500">
            →Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>

          <h2 className="text-xl mt-8 text-blue-600 hover:underline">
            Related Products
          </h2>
          {/* <img */}
             <Image
            src="/boy.png"
            alt="boy"
            className="w-40 mt-10"
          />
          <h1 className="text-sm text-blue-600 p-2">Mens Fashion Wear</h1>
          <p className="text-sm text-blue-600 -mt-5 ml-8 p-2">$43.00</p>
          {/* <img */}
             <Image 
            src="/girlshadow.png"
            alt="boy"
            className="w-40 -mt-[23%] ml-48"
          />
          <h1 className="text-sm text-blue-600 py-2 ml-[20%]">
            Womens Fashion
          </h1>
          <p className="text-sm text-blue-600 -mt-2 ml-[24%]">$67.00</p>
          {/* <img */}
            <Image 
            src="/women.png"
            alt="boy"
            className="w-40 -mt-64 ml-[35%]"
          />
          <h1 className="text-sm text-blue-600 py-2 ml-[36%]">
            Wolx Dummy Fashion
          </h1>
          <p className="text-sm text-blue-600 -mt-1 ml-[40%]">$67.00</p>
          {/* <img */}
            <Image 
            src="/smartgirl.png"
            alt="boy"
            className="w-40 -mt-64 ml-[53%]"
          />
          <h1 className="text-xs text-blue-600 py-2 ml-[55%]">
            Top Wall Digital Clock
          </h1>
          <p className="text-sm text-blue-600 ml-[58%]">$51.00</p>
        </div>
      </div>

      <div className="text-center border-4 bg-gray-300 px-4 m-4 mt-20">
        <div className="w-full h-34 relative mx-auto ">
          {/* <img */}
            <Image
            src="/image 1174.png"
            alt="Mini LCW Chair"
            // layout="fill"
            // objectFit="contain"
          />
        </div>
      </div>

      {/* Footer section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start border-4 bg-gray-300 mt-20 w-full">
        <div className="w-full md:w-2/3 py-[14%] ml-[-8%] text-center md:text-left">
          <h1 className="text-2xl ml-52 -mt-32">Heckto</h1>
          <p className="text-xs ml-48 mt-4 hover:underline text-gray-500">
            Enter Email Address
          </p>
          <button className="bg-red-500 hover:bg-blue-800 ml-[50%] -mt-20 px-4 rounded">
            Shop Now
          </button>
          <p className="text-xs ml-48 mt-4 text-gray-500">Contact Info</p>
          <p className="text-xs ml-48 mt-4 text-gray-500">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/3 ml-[30%] -mt-80 text-center md:text-left">
        <h1 className="text-2xs ml-[22%] -mt-40 p-6">Categories</h1>
        <ul className="text-gray-600 ml-40 text-xs">
          <li className="mb-2">Laptops & Computers</li>
          <li className="mb-4">Cameras & Photography</li>
          <li className="mb-4">Smart Phones & Tablets</li>
          <li className="mb-4">Video Games & Consoles</li>
          <li className="mb-4">Waterproof Headphones</li>
        </ul>
      </div>

      <div className="w-full md:w-2/3 ml-[50%] -mt-[30%] text-center md:text-left">
        <h1 className="text-2xs ml-[20%] mt-[20%] p-2">Customer Care</h1>
        <ul className="text-gray-600 ml-48 text-xs">
          <li className="mb-2">My Account</li>
          <li className="mb-4">Discount</li>
          <li className="mb-4">Returns</li>
          <li className="mb-4">Orders History</li>
          <li className="mb-4">Order Tracking</li>
        </ul>
      </div>

      <div className="w-full md:w-2/3 ml-[65%] -mt-[30%] text-center md:text-left">
        <h1 className="text-2xs ml-[24%] mt-[23%] p-2">Pages</h1>
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
    // </div>
  );
};

export default ProductDetail;
