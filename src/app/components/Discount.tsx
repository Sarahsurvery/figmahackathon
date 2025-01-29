import Image from "next/image";
import { FaInstagramSquare } from "react-icons/fa";
import { CiTwitter, CiFacebook } from "react-icons/ci";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Discount Section */}
      <section className="bg-white text-gray-800 py-12 md:flex md:items-center border-2">
        <div className="md:w-1/2 px-6">
          <h1 className="text-3xl font-bold text-center md:text-left mb-4 hover:underline">
            Discount Items
          </h1>
          <div className="space-y-2">
            <p className="text-sm font-normal text-pink-500 hover:underline">Wood Chair</p>
            <p className="text-sm font-normal">Plastic Chair</p>
            <p className="text-sm font-normal">Sofa Collection</p>
          </div>

          <h2 className="text-3xl font-bold mt-6">20% Discount Of All Products</h2>
          <h3 className="text-sm text-pink-600 font-semibold mt-2">Eames Sofa Compact</h3>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec.
          </p>

          <ul className="text-gray-500 mt-4 space-y-2">
            <li>✔ Material expose like metals</li>
            <li>✔ Simple neutral colours</li>
            <li>✔ Clear lines and geometric figures</li>
          </ul>

          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 mt-6 rounded">
            Shop Now
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-80 h-80">
            <Image
              src="/tortuga.png"
              alt="Eames Sofa Compact"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-12">
        <h2 className="text-3xl text-blue-950 hover:underline font-bold text-center mb-8">
          Top Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["/image 31.png", "/image 20.png", "/chair1.png", "/chair.png"].map((imageSrc, idx) => (
            <div key={idx} className="bg-slate-200 p-4 rounded shadow text-center">
              <div className="w-32 h-32 relative mx-auto">
                <Image src={imageSrc} alt={`Chair ${idx + 1}`} layout="fill" objectFit="contain" className="rounded-md" />
              </div>
              <h3 className="mt-4 font-semibold">Mini LCW Chair</h3>
              <p className="text-gray-500">$60.00</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative bg-cover bg-center text-center py-16" style={{ backgroundImage: 'url(/Rectangle.png)' }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-md">
          <h1 className="text-2xl font-semibold text-white mb-4">
            Get Latest Updates By Subscribing To Our Newsletter
          </h1>
          <button className="text-lg bg-pink-500 hover:bg-blue-600 text-white px-8 py-2 rounded">
            Subscribe Now
          </button>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="py-12">
        <h1 className="text-3xl text-center text-blue-900 hover:underline mb-8">
          Latest Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["/JIUjvqe2ZHg.png", "/2dcYhvbHV.png", "/2dcYhvbHV-M.png"].map((src, idx) => (
            <div key={idx} className="bg-white p-4 border rounded shadow-md">
              <div className="relative w-full h-48">
                <Image src={src} alt={`Blog Post ${idx + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
              </div>
              <p className="mt-4 text-gray-500">Saber Ali | 21 August 2020</p>
              <h3 className="text-blue-700 text-lg underline mt-2">Top Essential Trends in 2021</h3>
              <p className="text-gray-500 mt-2">
                More off this less hello samlande lied much over tightly circa horse taped mightly.
              </p>
              <button className="text-blue-700 underline mt-4">Read More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
