"use client";
import Image from "next/image";
import React from "react";
import { ImCross } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
const Dailogue = ({ list, setSelected }) => {
  if (!list) return null;
  return (
    <div className="fixed bg-black/30 top-0 left-0 right-0 bottom-0 z-40
" onClick={() => setSelected(false)}>
      <div
        className="bg-white flex items-center rounded-3xl w-[70%] h-[86%] mx-auto my-25 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-1/2">
          <Image
            src={list.Image}
            height={800}
            width={800}
            alt="image"
          />
        </div>
        <div className=" flex flex-col  gap-10 p-8">
          <p className="flex justify-between items-center text-[#009F7F] text-3xl">
            {list.title}
            <span className="border-2 border-slate-200 rounded-3xl p-2 border-slate">
              <FaHeart />
            </span>
          </p>
          <p className="text-slate-400">{list.quantity}</p>
          <p className="text-slate-400">{list.description}</p>
          <p className="text-[#009F7F] text-4xl">{list.price}</p>
          <div className="flex py-3 items-center gap-8">
            <button className="bg-[#009F7F] text-white cursor-pointer rounded-xl px-4 py-3 whitespace-nowrap">
              Add To Shopping Cart
            </button>
            <span className="">50 pieces Available</span>
          </div>
          <div className="flex gap-4 text-sm items-center">
            <h1 className="font-bold">Categories</h1>
            <h2 className="border border-gray-300 p-1">
              fruits and vegetables
            </h2>
            <h2 className="border border-gray-300 p-1">vegetables</h2>
          </div>
          <div className="flex gap-4 text-sm items-center">
            <h1 className="font-bold">Sellers</h1>
            <h1 className="border border-gray-300 p-1">Grocery Shop</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dailogue;
