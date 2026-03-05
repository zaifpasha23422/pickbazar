import React , {useState} from "react";
import { IoBagCheckSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import CartQuantity from "@/app/cart/page";
const Slidebutton = ({ bag ,setBag  } ) =>{
  

    if(!bag) return null;

    return(
        <div className="bag w-1/3 flex flex-col  mb-5 h-screen z-51 top-0 right-0 bg-white  fixed">
        <div className="flex justify-between items-center p-8 py-7 border-b border-slate-300 ">
        <div className="flex text-[#009F7F] text-xl items-center gap-5">
            <h1><IoBagCheckSharp /> </h1>
            {/* <h1>{Qty+1} </h1> */}
        </div>
        <span onClick={() =>setBag(!bag)} 
         className=" text-white bg-[#009F7F] rounded-3xl text-2xl cursor-pointer"><RxCross2 /></span>
        </div>
        <div className="flex flex-col items-center gap-5 mt-35">
            <h1 className="text-[170px] text-[#009F7F]"><IoBagCheckSharp /> </h1>
            <h1 className="text-[20px]">No products found </h1>
        </div>
        <div className="flex items-center justify-between bg-[#009F7F] mx-8 mt-50 py-2  px-8 rounded-3xl">
            <span className="text-white">Checkout</span>
            <span className="bg-white text-[#009F7F] py-2 px-4 rounded-2xl">$0.00</span>
        </div>
        </div>

    )
};
export default Slidebutton;