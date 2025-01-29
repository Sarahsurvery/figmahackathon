import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Trending Products Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Trending Products
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-purple-500 hover:scale-105 transition-transform">
            <Image
              src="/chair.png"
              alt="Cantilever Chair"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-gray-700 text-sm font-semibold mt-4 text-center">
              Cantilever Chair
            </h3>
            <p className="text-center text-gray-500 text-sm">
              <span className="text-red-500 font-semibold">$26.00</span>{" "}
              <span className="line-through">$42.00</span>
            </p>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform">
            <Image
              src="/chair5.png"
              alt="Cantilever Chair"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-gray-700 text-sm font-semibold mt-4 text-center">
              Cantilever Chair
            </h3>
            <p className="text-center text-gray-500 text-sm">
              <span className="text-red-500 font-semibold">$26.00</span>{" "}
              <span className="line-through">$42.00</span>
            </p>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform">
            <Image
              src="/comfort5.png"
              alt="Cantilever Chair"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-gray-700 text-sm font-semibold mt-4 text-center">
              Cantilever Chair
            </h3>
            <p className="text-center text-gray-500 text-sm">
              <span className="text-red-500 font-semibold">$26.00</span>{" "}
              <span className="line-through">$42.00</span>
            </p>
          </div>
        </div>

        {/* Discount Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-pink-100 p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              23% off in all products
            </h3>
            <a
              href="#"
              className="text-red-500 font-semibold text-sm underline"
            >
              Shop Now
            </a>
            <div className="mt-4">
              <Image
                src="/imgclock.png"
                alt="Product"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              23% off in all products
            </h3>
            <a
              href="#"
              className="text-red-500 font-semibold text-sm underline"
            >
              View Collection
            </a>
            <div className="mt-4">
              <Image
                src="/draw.png"
                alt="Product"
                width={200}
                height={80}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="mt-12 flex justify-center">
          <ul className="space-y-4 w-64 bg-slate-200 rounded-lg shadow-lg p-4">
            <li className="flex items-center justify-between text-gray-700 py-2">
              <Image
                src="/img1.png"
                alt="chair"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="text-xs">Executive Seat Chair</span>
              <span className="text-xs">$32.00</span>
            </li>
            <li className="flex items-center justify-between text-gray-700 py-2">
              <Image
                src="/img2.png"
                alt="chair"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="text-xs">Executive Seat Chair</span>
              <span className="text-xs">$32.00</span>
            </li>
            <li className="flex items-center justify-between text-gray-700 py-2">
              <Image
                src="/img3.png"
                alt="chair"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <span className="text-xs">Executive Seat Chair</span>
              <span className="text-xs">$32.00</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

