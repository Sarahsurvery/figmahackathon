import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Shopex Offer Section */}
      <section className="py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 hover:underline mb-12">
          What Shopex Offer!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {/* Card 1 */}
          <div className="bg-white p-6 border shadow-md rounded-lg hover:scale-105 transition-transform">
            <Image
              src="/free-delivery.png"
              alt="Delivery"
              width={80}
              height={50}
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">Free Delivery</h3>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 border shadow-md rounded-lg hover:scale-105 transition-transform">
            <Image
              src="/cashback.png"
              alt="Cashback"
              width={80}
              height={50}
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">Cashback Offers</h3>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 border shadow-md rounded-lg hover:scale-105 transition-transform">
            <Image
              src="/sheild.png"
              alt="Warranty"
              width={80}
              height={50}
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">Secure Payment</h3>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 border shadow-md rounded-lg hover:scale-105 transition-transform">
            <Image
              src="/clock.png"
              alt="Support"
              width={80}
              height={50}
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="bg-purple-50 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 gap-8">
          {/* Sofa Image */}
          <div>
            <Image
              src="/clubsofa.png"
              alt="Sofa"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-medium text-blue-950 mb-6">
              Unique Features Of Latest & Trending Products
            </h2>
            <ul className="mb-6 space-y-4 text-gray-600">
              <li>🔴 All frames constructed with hardwood solids and laminates</li>
              <li>🔴 Reinforced with double wood dowels, glue, and screws</li>
              <li>🟢 Arms, backs, and seats are structurally reinforced</li>
            </ul>
            <div className="flex items-center gap-8">
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
                Add To Cart
              </button>
              <div>
                <span className="text-blue-800 block">B&B Italian Sofa</span>
                <strong className="text-blue-800 text-sm">$32.00</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
