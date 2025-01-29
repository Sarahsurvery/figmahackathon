import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function Card({ product }: { product: any }) {
  if (!product || !product.slug?.current) {
    return <div>Product details not available.</div>;
  }
  // const Card = ({ product }: any) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className="bg-white pt-5 drop-shadow-md rounded-lg overflow-hidden">
        {product.images?.[0] ? (
          <Image
            src={urlFor(product.images && product.images[0]).url()}
            alt={product.slug}
            width={220}
            height={100}
            className="object-cover h-40 ml-6 max-auto"
          />
        ):(
          <div className="text-center py-2">
            <h1 className="text-2xs font-bold">{product.name}</h1>
            <h1 className="text-xl text-gray-500 font-bold">
              ${product.price}
            </h1>
          </div>
        )}
        </div>
      </Link>
    </div>
  );
};
