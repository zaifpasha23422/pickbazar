"use client"
import Image from "next/image";
import React from "react";
import { ImCross } from "react-icons/im";
const Dailogue = ({list , selected , setSelected}) => {
  
  if (!list) return null;
  return (
    <>
    <div className=" w-[70%]  fixed top-16 left-50 ">
      <div className="bg-white flex flex-col gap-5 px-5 w-1/2 shadow-2xl mx-auto  ">
      <button
        onClick={() => setSelected(!selected)}
        className="cursor-pointer  absolute right-75 top-10 text-xl"
              >
                <ImCross />
              </button>
      <Image src={list.Image} height={300} width={300} alt="image"/>
        <p className="text-red-400 text-2xl">{list.title}</p>
        <p className="text-slate-400">{list.quantity}</p>
        <p className="text-slate-400">{list.description}</p>
        <p className="text-[#009F7F] text-2xl">{list.price}</p>
        <button className="mx-auto p-4 m-4 bg-[#009F7F] text-white cursor-pointer">Add To Shopping Cart</button>
      </div>
    </div>
    </>
  )
};
export default Dailogue;