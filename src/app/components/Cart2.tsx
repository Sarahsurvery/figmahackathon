import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "./CartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const {
    onRemove,
    toggleCartItemQty,
    totalPrice,
    totalQuantity,
    cartItems,
    showCart,
    setShowCart,
  }: any = useContext(CartContext);
  const handleClose = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button className="cart-heading" onClick={handleClose}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">{totalQuantity}</span>
        </button>
        <div className="mt-[15px] overflow-hidden">
          {cartItems.map((product: any) => (
            <div className="product" key={product._id}>
              <Image
                loader={() => urlFor(product.images[0]).url()}
                src={urlFor(product.images[0]).url()}
                alt={product.images[0]}
                // alt={product?.images?.[0] || "Pandentset"}
                width={200}
                height={200}
                className="object-cover mx-auto"
              />
              <div className="flex justify-content space-between w-[300px] text-slate-400">
                <div className="flex top">
                  <h5>{product.name}</h5>
                  <h4>{product.price}</h4>
                </div>
                <div className="flex bottom">
                  <div className="p-[6px] flex border-[1px] ">
                    <span
                      className="font-[16px] p-[6px] [12px] cursor-pointer"
                      onClick={() => toggleCartItemQty(product._id, "minus")}
                    >
                      <AiOutlineMinus />
                    </span>
                    <span className="font-[16px] p-[6px] [12px] cursor-pointer">
                      {product.quantity}
                    </span>
                    <span
                      className="font-[16px] p-[6px] [12px] cursor-pointer"
                      onClick={() => toggleCartItemQty(product._id, "plus")}
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(product)}
                    className="remove-item"
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[12px] right-[5px] width[100%] p-[30px]">
          <div className="flex w-10">
            <h1 className="font-normal">Subtotal</h1>
            <h1 className="font-[22px]">${totalPrice}</h1>
          </div>
        </div>

        {cartItems.length > 0 && (
          // <div className="absolute right-[5px] bottom-[12px] w-[100%] p-[30px] ">

          <div className="m-auto">
            <button type="button" className="text-black">
              Pay with stripe
            </button>
          </div>
          // </div>
        )}
      </div>
    </div>
  );
};

export default Cart;