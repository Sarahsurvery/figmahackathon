import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { CiTwitter, CiFacebook } from "react-icons/ci";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Discount Section */}
      <section className="bg-white text-gray-800 py-12 md:flex md:items-center border-2">
        <div className="md:w-1/2">
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
            <img
            //  <Image
              src="/tortuga.png" // Add your image in public folder
              alt="Eams Sofa Compact"
              // layout="fill"
              // objectFit="contain"
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
              <img
              //  <Image
                src="/image 31.png" // Replace with actual image paths
                alt="Mini LCW Chair"
                // layout="fill"
                // objectFit="contain"
              />
            </div>
            {/* <h3 className="mt-4 font-semibold">Mini LCW Chair</h3> */}
            {/* <p className="text-gray-500">$60.00</p> */}
          </div>

          {/* Chair Card 2 */}
          <div className="text-center bg-slate-200 border -ml-48">
            <div className="w-32 h-32 relative mx-auto">
              <img
              //  <Image
                src="/image 20.png"
                alt="Mini LCW Chair"
                // layout="fill"
                // objectFit="contain"
              />
            </div>
            <h3 className="mt-4 font-semibold">Mini LCW Chair</h3>
            <p className="text-gray-500">$60.00</p>
          </div>

          {/* Chair Card 3 */}
          <div className="text-center border-2">
            <div className="w-32 h-32 relative mx-auto">
              <img
              //  <Image
                src="/chair1.png"
                alt="Mini LCW Chair"
                // layout="fill"
                // objectFit="contain"
              />
            </div>
            <h3 className="mt-4 font-semibold">Mini LCW Chair</h3>
            <p className="text-gray-500">$60.00</p>
          </div>

          {/* Chair Card 4 */}
          <div className="text-center border-2">
            <div className="w-32 h-32 relative mx-auto">
              <img
              //  <Image
                src="/chair.png"
                alt="Mini LCW Chair"
                // layout="fill"
                // objectFit="contain"
              />
            </div>
            <h3 className="mt-4 font-semibold">Mini LCW Chair</h3>
            <p className="text-gray-500">$60.00</p>
          </div>

          {/* Chair Card 5 */}
          <div className="text-center border-2">
            <div className="w-32 h-32 relative mx-auto">
              <img
              //  <Image
                src="/image 20.png"
                alt="Mini LCW Chair"
                // layout="fill"
                // objectFit="contain"
              />
            </div>
            <h3 className="mt-4 font-semibold">Mini LCW Chair</h3>
            <p className="text-gray-500">$60.00</p>
          </div>
        </div>
        <div className="text-center p-4">
          <div className="w-full h-96 relative mx-auto">
            <img
            //  <Image
              src="/Rectangle.png"
              alt="Mini LCW Chair"
              // layout="fill"
              // objectFit="contain"
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
        <div className="text-center border-4 bg-gray-300 -mt-14 px-4">
          <div className="w-full h-32 relative mx-auto">
            <img
            // <Image
              src="/image 1174.png"
              alt="Mini LCW Chair"
              // layout="fill"
              // objectFit="contain"
            />
          </div>
        </div>
        {/* Leatest Blog */}
        <div className="md:w-1/2 p-2 m-10">
          <h1 className="text-3xl text-center ml-[70%] hover:underline text-blue-900">
            Leatest Blog{" "}
          </h1>
        </div>
        <div className="flex justify-center -ml-[62%] border-2 p-20">
          <div className="relative w-52 h-96 -top-2">
            <img
            // <Image
              src="/JIUjvqe2ZHg.png" // Add your image in public folder
              alt="Long Sofa"
              // layout="fill"
              // objectFit="contain"
            />
          </div>
        </div>
        <div className="flex items-center -ml-48">
          <p className="ml-[22%] -mt-[44%] p-2">Saber Ali | 21 August 2020</p>
          <p className="text-xs text-blue-700 underline -mt-[42%] -ml-52">
            Top esssential Trends in 2021
          </p>
          <p className="text-xs text-slate-500 -mt-[38%] -ml-44 w-1/5">
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <button className="text-blue-700 text-xs underline bg-white -mt-[32%] -ml-72 border-2 border-black">
            Read More
          </button>
        </div>

        <div className="flex justify-center -ml-32 -mt-[24%]">
          <div className="relative w-52 h-60 -mt-24 -top-20">
            <img
            // <Image
              src="/2dcYhvbHV.png" // Add your image in public folder
              alt="Long Sofa"
              // layout="fill"
              // objectFit="contain"
            />
          </div>
        </div>
        <div className="flex items-center ml-48">
          <p className="ml-64 -mt-[32%]">Saber Ali | 21 August 2020</p>
          <p className="text-xs text-blue-700 underline -mt-[29%] -ml-52">
            Top esssential Trends in 2021
          </p>
          <p className="text-xs text-slate-500 -mt-[23%] -ml-44 w-1/5">
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <button className="text-blue-700 text-xs underline bg-white -mt-[14%] -ml-52 border-2 border-black">
            Read More
          </button>
        </div>

        <div className="flex justify-center ml-[40%]">
          <div className="relative w-52 h-96 -mt-[32%] -top-20">
            <img
            //  <Image
              src="/2dcYhvbHV-M.png" // Add your image in public folder
              alt="Long Sofa"
              // layout="fill"
              // objectFit="contain"
            />
          </div>
        </div>
        <div className="flex items-center -ml-48 p-14">
          <p className="ml-[66%] -mt-[55%]">Saber Ali | 21 August 2020</p>
          <p className="text-xs text-blue-700 underline -mt-[53%] -ml-52">
            Top esssential Trends in 2021
          </p>
          <p className="text-xs text-slate-500 -mt-[49%] -ml-44 w-1/5">
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
          </p>
          <button className="text-blue-700 text-xs underline bg-white -mt-[43%] -ml-72 border-2 border-black">
            Read More
          </button>
        </div>

        {/* Footer Section */}

             </section>
    </div>
  );
}
