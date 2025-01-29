import Image from 'next/image';
import Navbar from "@/app/components/Navbar";
import Footer from '@/app/components/Footer';

const ProductDetail = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="flex flex-row rounded-lg py-20 px-4 md:px-20">
        <div className="text-xs md:text-lg py-4 md:ml-48">
          <h1 className="text-blue-500 text-2xl">Product Details</h1>
          <p className="text-xs text-gray-800">Home</p>
          <p className="text-xs text-gray-800">Pages</p>
          <p className="text-xs text-pink-500">Product Detail</p>
        </div>
      </div>
      <div className="container mx-auto p-8 md:p-20">
        <h2 className="text-2xl font-bold mb-8 md:mb-16 text-center md:text-left">
          Playwood Arm Chair
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center md:justify-start md:ml-[60%] mt-4 md:mt-0">
            <img
              src="/handbag.png"
              alt="Playwood Arm Chair"
              className="w-60"
            />
          </div>
          <div className="flex flex-col items-center md:items-start md:ml-[60%]">
            <img
              src="/bag1.png"
              alt="Playwood Arm Chair"
              className="w-24 md:w-32 mt-4"
            />
            <img
              src="/sidelamp.png"
              alt="Playwood Arm Chair"
              className="w-24 md:w-32 mt-4"
            />
            <img
              src="/wallet.png"
              alt="Playwood Arm Chair"
              className="w-24 md:w-32 mt-4"
            />
          </div>
          <div className="md:ml-[145%] md:mt-[-55%]">
            <p className="text-xs text-gray-700">Price: $500</p>
            <p className="text-gray-600">Color: Black</p>
            <button className="bg-blue-600 text-white px-8 py-2 rounded mt-4 w-40">
              Add to Cart
            </button>
          </div>
          <p className="text-gray-600 mt-4 md:mt-0 md:ml-[35%] text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xs hover:underline">Description</h3>
          <h3 className="text-xs mt-4 ml-24 hover:underline">Additional Info</h3>
          <h3 className="text-xs mt-4 ml-52 hover:underline">Reviews</h3>
          <h3 className="text-xs mt-4 ml-72 hover:underline">Video</h3>

          <h4 className="text-xs mt-8">Various tempor.</h4>
          <p className="text-xs p-4 text-slate-500">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
          </p>

          <h4 className="text-xs mt-8">More details</h4>
          <p className="text-xs p-2 text-slate-500">→ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</p>
          <p className="text-xs p-2 text-slate-500">→ Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</p>
          <p className="text-xs p-2 text-slate-500">→Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</p>
          <p className="text-xs p-2 text-slate-500">→Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.</p>

          <h2 className="text-xl mt-8 text-blue-600 hover:underline">Related Products</h2>
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="w-full md:w-1/4 text-center">
              <img src="/boy.png" alt="Mens Fashion" className="w-40 mt-10" />
              <h1 className="text-sm text-blue-600 p-2">Mens Fashion Wear</h1>
              <p className="text-sm text-blue-600">$43.00</p>
            </div>
            <div className="w-full md:w-1/4 text-center">
              <img src="/girlshadow.png" alt="Womens Fashion" className="w-40 mt-10" />
              <h1 className="text-sm text-blue-600 p-2">Womens Fashion</h1>
              <p className="text-sm text-blue-600">$67.00</p>
            </div>
            <div className="w-full md:w-1/4 text-center">
              <img src="/women.png" alt="Wolx Dummy Fashion" className="w-40 mt-10" />
              <h1 className="text-sm text-blue-600 p-2">Wolx Dummy Fashion</h1>
              <p className="text-sm text-blue-600">$67.00</p>
            </div>
            <div className="w-full md:w-1/4 text-center">
              <img src="/smartgirl.png" alt="Top Wall Digital Clock" className="w-40 mt-10" />
              <h1 className="text-sm text-blue-600 p-2">Top Wall Digital Clock</h1>
              <p className="text-sm text-blue-600">$51.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center border-4 bg-gray-300 px-4 m-4 mt-20">
        <div className="w-full h-34 relative mx-auto">
          <img
            src="/image 1174.png"
            alt="Mini LCW Chair"
            className="object-contain"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
