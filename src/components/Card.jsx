"use client"
import { data } from "@/data/product";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbAppleFilled } from "react-icons/tb";
import { TbMeat } from "react-icons/tb";
import { BsFillCupFill } from "react-icons/bs";
import { PiBowlFoodBold } from "react-icons/pi";
import { GiVacuumCleaner } from "react-icons/gi";
import { LuMilk } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { GiSlicedBread } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { useState } from "react";

export default function ProductCard() {
  const [fruit, setFruit] = useState(false);
  return (
    <div className="flex gap-10 relative bg-[#F3F4F6]">
      <div className="w-1/4 sticky bg-white h-screen top-20 mt-0.5 hidden xl:block ">
        <ul className=" w-full p-10 space-y-5 pr-10 ">
          <li
            onClick={() => setFruit(!fruit)}
            className="flex flex-col items-center justify-between gap-2"
          >
            <div className="flex items-center">
            <p className="flex items-center gap-3">
              <TbAppleFilled />
              Fruits & Vegetables
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
          </div>
            <ul className={`flex flex-col gap-2 pt-2 ${fruit ? "block" : "hidden"}`}>
              <li>Fruits</li>
              <li>Vegetables</li>
            </ul>
          </li>
          <li className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-3">
              <TbMeat />
              Meat and Fish
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-3">
              <BsFillCupFill />
              Snacks
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-3">
              <PiBowlFoodBold />
              Pet Care
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-3">
              <GiVacuumCleaner />
              Home & Cleaning
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-3">
              <LuMilk />
              Dairy
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-3">
              <PiCookingPot />
              Cooking
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-3">
              <GiSlicedBread />
              Breakfast
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-3">
              <RiDrinks2Line />
              Beverage
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-3">
              <MdOutlineHealthAndSafety />
              Health & Beauty
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8 mb-10 bg-gray-100">
        {data.map((item) => {
          return (
            <div key={item.id} className=" shadow rounded-lg bg-white ">
              <div className="border-b-2 border-gray-50">
                <img src={item.img} />
              </div>
              <div className="flex flex-col px-3 py-5">
                <h2 className="text-xl text-slate-400">{item.title}</h2>
                <div className="flex justify-between items-center text-green-700">
                  {item.description}{" "}
                  <button className="border-2 border-slate-200 text-green-700 px-4 py-1 rounded-2xl">
                    Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="flex items-center justify-center z-10 absolute bottom-0  w-full mx-auto my-5">
        <button className="bg-green-700 text-white items-center h-10 w-30 ">Load More</button>
      </div> */}
    </div>
  );
}
