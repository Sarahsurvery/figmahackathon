import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { CiTwitter,CiFacebook } from "react-icons/ci"; 

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Discount Section */}
      <section className="bg-white text-gray-800 py-12 md:flex md:items-center">
        <div className="md:w-1/1">
          <h1 className="text-3xl text-center ml-[68%] hover:underline">
            Discount Items{" "}
          </h1>
          <div className="p-4">
            <h1 className="text-sm font-normal ml-60 text-center text-pink-500 hover:underline">
              Wood Chair
            </h1>
            <div className="ml-[65%] mt-[-3%]">
              <h3 className="text-sm font-normal text-center">Plastic Chair</h3>
            </div>
            <div className="ml-[92%] mt-[-3%] ">
              <h4 className="flex flex-row text-sm font-normal text-center">
                SofaCollection
              </h4>
            </div>
          </div>
          <div className="text-2xs">
            <h2 className="text-3xl font-bold mb-4 ml-36">
              20% Discount Of All Products
            </h2>
            <h3 className="text-sm text-pink-600 font-semibold mb-4 ml-36">
              Eams Sofa Compact
            </h3>
            <p className="text-gray-500 mb-6 ml-36">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec.
            </p>
            <ul className="text-gray-500 space-y-4 mb-6 ml-36">
              <li>✔ Material expose like metals</li>
              <li>✔ Simple neutral colours</li>
              <li>✔ Clear lines and geometric figures</li>
            </ul>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 ml-36 rounded">
              Shop Now
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-32">
          <div className="relative w-96 h-96">
            <Image
              src="/tortuga.png" // Add your image in public folder
              alt="Eams Sofa Compact"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-12">
        <h2 className="text-3xl text-blue-950 hover:underline font-bold text-center mb-8">
          Top Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-8 p-20">
          {/* Chair Card 1 */}
          <div className="text-center">
            <div className="w-32 h-32 relative rounded border bg-slate-200 mx-auto -mt-40 ml-[350%]">
              <Image
                src="/image 31.png" // Replace with actual image paths
                alt="Mini LCW Chair"
                layout="fill"
                objectFit="contain"
              />
            </div>
            {/* <h3 className="mt-4 font-semibold">Mini LCW Chair</h3> */}
            {/* <p className="text-gray-500">$60.00</p> */}
          </div>

          {/* Chair Card 2 */}
          <div className="text-center bg-slate-200 border -ml-48">
            <div className="w-32 h-32 relative mx-auto">
              <Image
                src="/image 20.png"
                alt="Mini LCW Chair"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="mt-4 font-semibold">Mini LCW Chair</h3>
            <p className="text-gray-500">$60.00</p>
          </div>

          {/* Chair Card 3 */}
          <div className="text-center border-2">
            <div className="w-32 h-32 relative mx-auto">
              <Image
                src="/chair1.png"
                alt="Mini LCW Chair"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="mt-4 font-semibold">Mini LCW Chair</h3>
            <p className="text-gray-500">$60.00</p>
          </div>

          {/* Chair Card 4 */}
          <div className="text-center border-2">
            <div className="w-32 h-32 relative mx-auto">
              <Image
                src="/chair.png"
                alt="Mini LCW Chair"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="mt-4 font-semibold">Mini LCW Chair</h3>
            <p className="text-gray-500">$60.00</p>
          </div>

          {/* Chair Card 5 */}
          <div className="text-center border-2">
            <div className="w-32 h-32 relative mx-auto">
              <Image
                src="/image 20.png"
                alt="Mini LCW Chair"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="mt-4 font-semibold">Mini LCW Chair</h3>
            <p className="text-gray-500">$60.00</p>
          </div>
        </div>
        <div className="text-center p-4">
          <div className="w-full h-96 relative mx-auto">
            <Image
              src="/Rectangle.png"
              alt="Mini LCW Chair"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative bottom-52 left-1/2 transform -translate-x-1/2 -translate-y-1 text-center text-white">
            <h1 className="text-2xl font-normal text-blue-800 mb-8">
              Get Leatest Update By Subscribe 0ur Newslater
            </h1>
            <button className="text-xl px-4 rounded bg-pink-500 hover:bg-blue-600">
              Shop Now
            </button>
          </div>
        </div>
        <div className="text-center border-4 bg-gray-300 px-4 ">
          <div className="w-full h-32 relative mx-auto">
            <Image
              src="/image 1174.png"
              alt="Mini LCW Chair"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* Leatest Blog */}
        <div className="md:w-1/2 py-16">
          <h1 className="text-3xl text-center ml-[70%] hover:underline text-blue-900">
            Leatest Blog{" "}
          </h1>
        </div>
        <div className="flex justify-center -ml-[64%] p-4 border-2">
          <div className="relative w-52 h-96 -mt-10 -top-20">
            <Image
              src="/JIUjvqe2ZHg.png" // Add your image in public folder
              alt="Long Sofa"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex items-center -ml-48">
          <p className="ml-80 -mt-96">Saber Ali | 21 August 2020</p>
          <p className="text-xs text-blue-700 underline -mt-[24%] -ml-52">
            Top esssential Trends in 2021
          </p>
          <p className="text-xs text-slate-500 -mt-[20%] -ml-44 w-1/5">
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <button className="text-blue-700 text-xs underline bg-white -mt-52 -ml-72 border-2 border-black">
            Read More
          </button>
        </div>

        <div className="flex justify-center -ml-32 -mt-56">
          <div className="relative w-52 h-60 -mt-24 -top-20">
            <Image
              src="/2dcYhvbHV.png" // Add your image in public folder
              alt="Long Sofa"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex items-center ml-48">
          <p className="ml-64 -mt-60">Saber Ali | 21 August 2020</p>
          <p className="text-xs text-blue-700 underline -mt-52 -ml-52">
            Top esssential Trends in 2021
          </p>
          <p className="text-xs text-slate-500 -mt-32 -ml-44 w-1/5">
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <button className="text-blue-700 text-xs underline bg-white -mt-14 -ml-52 border-2 border-black">
            Read More
          </button>
        </div>

        <div className="flex justify-center ml-[40%] p-2">
          <div className="relative w-52 h-96 -mt-80 -top-20">
            <Image
              src="/2dcYhvbHV-M.png" // Add your image in public folder
              alt="Long Sofa"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex items-center -ml-48">
          <p className="ml-[66%] -mt-96">Saber Ali | 21 August 2020</p>
          <p className="text-xs text-blue-700 underline -mt-[24%] -ml-52">
            Top esssential Trends in 2021
          </p>
          <p className="text-xs text-slate-500 -mt-[20%] -ml-44 w-1/5">
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <button className="text-blue-700 text-xs underline bg-white -mt-52 -ml-72 border-2 border-black">
            Read More
          </button>
        </div>

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

        <div className="w-full md:w-2/3 ml-[50%] -mt-[30%] text-center md:text-left">
          <h1 className="text-2xs ml-[20%] mt-[23%] p-2">Customer Care</h1>
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
          <p className="text-slate-500 mt-80 -ml-[195%]">©Webecy - All Rights Reserved</p>
         
          <div className="flex space-x-4 -ml-72 -mt-5">
      
        <CiFacebook className="h-6 w-6 text-blue-500 hover:text-blue-700" />
     
        <FaInstagramSquare className="h-6 w-6 text-pink-500 hover:text-pink-700" />
     
      <CiTwitter  className="h-6 w-6 text-pink-500 hover:text-pink-700" />
      
    </div>
          
          </div>
        </div>

      </section>
    </div>
  );
}
