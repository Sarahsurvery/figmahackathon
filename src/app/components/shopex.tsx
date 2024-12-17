import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Shopex Offer Section */}
      <section className="py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 hover:underline mb-8">
          What Shopex Offer!
        </h1>
        <div className="flex justify-center px-10 gap-6">
          {/* Card 1 */}
          <div className="w-56 bg-white p-6 border-2 shadow rounded-lg">
            {/* <img src="/free-delivery.png" alt="Delivery" width={80} height={50} className="ml-14"/> */}
            <Image src="/free-delivery.png" alt="Delivery" width={80} height={50} className="ml-14"/>
            <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          {/* Card 2 - Active */}
          <div className="w-56 bg-white p-6 shadow-lg border-2 rounded-lg transform scale-105">
            {/* <img src="/cashback.png" alt="Support" width={80} height={50} className="ml-14"/> */}
            <Image src="/cashback.png" alt="Support" width={80} height={50} className="ml-14"/>
            <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-56 bg-white p-6 shadow border-2 rounded-lg">
            {/* <img src="/sheild.png" alt="Support" width={80} height={50} className="ml-14"/> */}
            <Image src="/sheild.png" alt="Support" width={80} height={50} className="ml-14"/>
            <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-56 bg-white p-6 shadow border-2 rounded-lg">
            <img src="/clock.png" alt="Support" width={80} height={50} className="ml-14"/>
            <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="bg-purple-50 py-12">
        <div className="container mx-auto flex flex-wrap items-center px-6">
          {/* Sofa Image */}
          <div className="w-full md:w-1/2">
            {/* <img */}
            <Image
              src="/clubsofa.png"
              alt="Sofa"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
            <h2 className="text-3xl font-normal text-blue-950 mb-4">
              Unique Features Of leatest & Trending Products
            </h2>
            <ul className="mb-6 text-gray-600">
              <li className="mb-4">
                🔴 All frames constructed with hardwood solids and laminates
              </li>
              <li className="mb-4">
                🔴 Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </li>
              <li>🟢 Arms, backs and seats are structurally reinforced</li>
            </ul>
            <div className="flex items-center gap-6">
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                Add To Cart
              </button>
              <div>
                <span className="text-blue-800 block">
                  B&B Italian Sofa
                </span>
                <strong className="text-blue-800 text-sm text-normal">$32.00</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
