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
  const [meat, setMeat] = useState(false);
  const [snack, setSnack] = useState(false);
  const [petcare, setPetcare] = useState(false);
  const [clean, setClean] = useState(false);
  const [dairy, setDairy] = useState(false);
  const [cook, setCook] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [beverage, setBeverage] = useState(false);
  const [beauty, setBeauty] = useState(false);
  return (
    <div className="flex gap-10 relative bg-[#F3F4F6]">
      <div className="w-1/4 sticky bg-white h-screen top-20 mt-0.5 hidden xl:block ">
        <ul className=" w-full p-10 space-y-5 pr-10 ">
          <li
            onClick={() => setFruit(!fruit)}
            className="flex flex-col gap-2"
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
            <ul className={`flex flex-col pl-7 gap-2 pt-2 ${fruit ? "block" : "hidden"}`}>
              <li>Fruits</li>
              <li>Vegetables</li>
            </ul>
          </li>
          <li 
           onClick={() =>setMeat(!meat)}
           className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
            <p className="flex items-center gap-3">
              <TbMeat />
              Meat and Fish
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
            </div>
            <ul className={`flex flex-col pl-7 gap-2 pt-2 ${meat ? "block" : "hidden"}`}>
              <li>Fresh Fish</li>
              <li>Meat</li>
            </ul>
          </li>
          <li 
           onClick={() =>setSnack(!snack)}
           className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
            <p className="flex items-center gap-3">
              <BsFillCupFill />
              Snacks
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
            </div>
            <ul className={`flex flex-col pl-7 gap-2 pt-2  ${snack ? "block" : "hidden"}`}>
              <li>chocolates</li>
              <li>Noodles</li>
              <li>Maggie</li>
              <li>Risole</li>
              <li>Soups</li>
              <li>Biscuits</li>
            </ul>
          </li>
          <li 
           onClick={() => setPetcare(!petcare)}
           className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
            <p className="flex items-center gap-3">
              <PiBowlFoodBold />
              Pet Care
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
            </div>
            <ul className={`flex flex-col pl-7 gap-2 pt-2 ${petcare ? "block" : "hidden"}`}>
              <li>Cat food</li>
              <li>Dog food</li>
              <li>Accessories</li>
            </ul>
          </li>
          <li 
           onClick={() => setClean(!clean)}
           className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
            <p className="flex items-center gap-3">
              <GiVacuumCleaner />
              Home & Cleaning
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
            </div>
            <ul className={`flex flex-col pl-7 gap-2 pt-2 ${clean ? "block" :"hidden"}`}>
              <li>Air Freshners</li>
              <li>cleaning products</li>
              <li>Kitchen Accessries</li>
            </ul>  
          </li>
          <li 
           onClick={() => setDairy(!dairy)}
           className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
            <p className="flex items-center gap-3">
              <LuMilk />
              Dairy
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
            </div>
            <ul className={`flex flex-col gap-2 pl-7 pt-2 ${dairy ? "block" : "hidden"}`}>
              <li>Milk</li>
              <li>Butter</li>
              <li>Egg</li>
              <li>Yogurt</li>
            </ul>
          </li>
          <li 
           onClick={() => setCook(!cook)}
           className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
            <p className="flex items-center gap-3">
              <PiCookingPot />
              Cooking
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
            </div>
            <ul className={`flex flex-col gap-2 pl-7 pt-2 ${cook ? "block" : "hidden"}`}>
              <li>Rice</li>
              <li>Flour</li>
              <li>Oil</li>
              <li>Sugar</li>
            </ul>
          </li>
          <li 
           onClick = {() => setBreakfast(!breakfast)}
           className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
            <p className="flex items-center gap-3">
              <GiSlicedBread />
              Breakfast
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
            </div>
            <ul className={`flex flex-col gap-2 pt-2 pl-7 ${breakfast ? "block" :"hidden"}`}>
              <li>Bread</li>
              <li>Milk</li>
              <li>Jam</li>
              <li>Butter</li>
            </ul>
          </li>
          <li
           onClick={() => setBeverage(!beverage)} 
           className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
            <p className="flex items-center gap-3">
              <RiDrinks2Line />
              Beverage
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
            </div>
            <ul className={`flex flex-col gap-2 pl-7 pt-2 ${beverage ? "block" :"hidden"}`}>
              <li>Coffee</li>
              <li>Energy Drinks</li>
              <li>Juice</li>
              <li>Fizzy Drinks</li>
              <li>Tea</li>
            </ul>
          </li>
          <li
            onClick={()=> setBeauty(!beauty)} 
            className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
            <p className="flex items-center gap-3">
              <MdOutlineHealthAndSafety />
              Health & Beauty
            </p>
            <p>
              <MdKeyboardArrowDown />
            </p>
            </div>
            <ul className={`flex flex-col gap-2 pl-7 pt-2 ${beauty ? "block" : "hidden"}`}>
              <li>Cream</li>
              <li>Deodorant</li>
              <li>Face cream</li>
              <li>Shaving needs</li>
              <li>Hair Oil</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-8 p-4 mb-10 bg-gray-100">
        {data.map((item) => {
          return (
            <div key={item.id} className=" shadow rounded-lg bg-white ">
              <div className="border-b-2 border-gray-50">
                <img src={item.img} />
              </div>
              <div className="flex flex-col px-3 py-5">
                <h2 className="text-xl text-slate-400">{item.title}</h2>
                <div className="flex justify-between items-center text-[#009F7F]">
                  {item.description}{" "}
                  <button className="border-2 border-slate-200 text-[#009F7F] px-4 py-1 rounded-2xl">
                    Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="flex items-center justify-center z-10 absolute bottom-0  w-full mx-auto my-5">
        <button className="bg-[#009F7F] text-white items-center h-10 w-30 ">Load More</button>
      </div> */}
    </div>
  );
}
