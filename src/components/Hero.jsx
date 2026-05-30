"use client";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFilterLeft } from "react-icons/bs";
import Slider from "@/components/slider"
import Slidebutton from "./Slidebutton";
import {useContext, useState} from "react";
import { useCounter } from "@/context/CounterContext";
import { ModalContext } from "@/context/Modalcontext";

export default function Hero() {
  // const[bag, setBag]= useState(false);
  const {cartItems} = useCounter()
  const {carts, setCartsOpen} = useContext(ModalContext)

  const items = Object.values(cartItems);

  // total price
  const total = items.reduce((acc, item) => {
    return (
      acc +
      parseInt(item.product.price.replace("$", "")) *
        item.quantity
    );
  }, 0);

  
  return (
    <div className="relative">
      <div className="grocery w-full h-screen top-0 hidden lg:block ">
        <div className="flex flex-col items-center justify-center gap-5 py-50 ">
          <div className=" text-5xl font-bold  ">
            Groceries Delivered in 90 Minute
          </div>
          <p className="text-xl ">
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday{" "}
          </p>
          <form className="flex w-full justify-center pt-7" action="">
            <input
              type="text"
              placeholder="Search your products from here"
              className="shadow-lg pl-5 rounded-l-xl h-14 w-1/2 border border-[#009F7F] hover:outline-none active:outline-none active:border-none hover:border-none"
            />
            <button className="flex items-center justify-center gap-2 bg-[#009F7F] text-white w-35 rounded-r-2xl">
              <FaSearch />
              Search
            </button>
          </form>
          <div onClick={()=> setCartsOpen(!carts)}
          className="flex flex-col gap-2 items-center justify-center rounded-md bg-[#009F7F] h-25 w-25 ml-[95%] fixed z-40">
            <span className="flex gap-2 text-white">
              <FaShoppingBag />{items.length} item
            </span>
            <button className="bg-white text-[#009F7F] w-16 h-8 rounded-md">
              ${total}
            </button>
          </div>
        </div>
      </div>
      <div>
      <Slider/>
      </div>  
     
    <div className="block lg:hidden">
    <div className="flex justify-between mx-4  mb-2">
      <button className="flex items-center text-xl gap-1 bg-gray-100 py-1 px-2 rounded"><BsFilterLeft />Filter</button>
      <button className="flex items-center text-xl gap-1"> <FaApple /> Grocery <IoMdArrowDropdown /></button>
    </div>
    </div>
    <Slidebutton  carts={carts} setCartOpen={setCartsOpen} />
    </div>
  
  );
}
