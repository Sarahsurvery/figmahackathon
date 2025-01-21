import Image from 'next/image';
import Navbar from "@/app/components/Navbar";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import Footer from '../components/Footer';

const ProductDetail = () => {
  return (
    <div className="font-sans">
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
            <img
              //  <Image 
              src="/handbag.png"
              alt="Playwood Arm Chair"
              // className="w-60"
            />
          </div>
          <img
            // <Image 
            src="/bag1.png"
            alt="Playwood Arm Chair"
            className="w-24 ml-[-96%] mt-[-32%]"
          />

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div> */}
          <img
            //  <Image 
            src="/sidelamp.png"
            alt="Playwood Arm Chair"
            className="w-24 ml-12 mt-[-45%]"
          />
          <img
            //  <Image 
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
          <img
            //  <Image
            src="/boy.png"
            alt="boy"
            className="w-40 mt-10"
          />
          <h1 className="text-sm text-blue-600 p-2">Mens Fashion Wear</h1>
          <p className="text-sm text-blue-600 -mt-5 ml-8 p-2">$43.00</p>
          <img
            //  <Image 
            src="/girlshadow.png"
            alt="boy"
            className="w-40 -mt-[23%] ml-48"
          />
          <h1 className="text-sm text-blue-600 py-2 ml-[20%]">
            Womens Fashion
          </h1>
          <p className="text-sm text-blue-600 -mt-2 ml-[24%]">$67.00</p>
          <img
            // <Image 
            src="/women.png"
            alt="boy"
            className="w-40 -mt-64 ml-[35%]"
          />
          <h1 className="text-sm text-blue-600 py-2 ml-[36%]">
            Wolx Dummy Fashion
          </h1>
          <p className="text-sm text-blue-600 -mt-1 ml-[40%]">$67.00</p>
          <img
            // <Image 
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
          <img
            // <Image
            src="/image 1174.png"
            alt="Mini LCW Chair"
            // layout="fill"
            // objectFit="contain"
          />
        </div>
      </div>
     <Footer/>
     </div>
  );
};

export default ProductDetail;
