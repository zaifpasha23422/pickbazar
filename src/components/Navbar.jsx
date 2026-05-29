"use client";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { usePathname } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import List from "./List";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [category, setCategory]= useState(false);
  const pathname = usePathname();
  // if (pathname == "/join" || pathname == "/register") return;
  const [changeBg,setChangeBg]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  })
 function handleScroll(){
  if(window.scrollY>25){
    setChangeBg(true)
  }else{
    setChangeBg(false)
  }
 }
  return (
    <div className="relative">
      <div  className={`flex fixed items-center sm:justify-between py-4 lg:py-6 px-4 sm:px-10 z-50 top-0 left-0 right-0 
         ${changeBg ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="flex justify-start  items-center gap-10">
          <div>
            <Image
              src="/image/Logo-new.webp"
              alt="image"
              height={160}
              width={140}
            />
          </div>
          <button onClick={() =>setCategory(!category)}
          className=" hidden lg:flex items-center  gap-2 justify-center bg-white text-[#009F7F] border-2 border-slate-200 md:w-30 md:h-10 md:rounded-lg cursor-pointer hover:border-[#009F7F] ">
            <FaApple />
            Grocery <IoMdArrowDropdown />
          </button>
        </div>
        <div className="hidden xl:block">
          <ul className="flex md:gap-10  md:pl-120">
            <li className="hover:text-[#009F7F]"> 
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-[#009F7F]">
              <Link href="/offer">Offers</Link>
            </li>
            <li className="hover:text-[#009F7F]">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="relative group">
              <span className="flex items-center justify-center gap-1 hover:text-[#009F7F]">
                Pages <IoIosArrowDropdownCircle />
              </span>
              <ul className="absolute p-6  mt-2 space-y-6 bg-white rounded-xl hidden group-hover:block ">
                <li>Flash Sales</li>
                <li>Manufactures/Publishers</li>
                <li>Authors</li>
                <li>FAQ</li>
                <li>Terms and Conditons</li>
                <li>Customer Refund Policy</li>
                <li>Vendor Refund Policy</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex gap-10 ">
          <button
            onClick={()=> setOpen(!isOpen)}
            className="bg-[#009F7F] rounded-md text-white px-6 py-2  hidden xl:block cursor-pointer"
          >
            Join
          </button>
          <button className="bg-[#009F7F] rounded-md text-white  px-6 py-2 hidden sm:block">
            Become a seller
          </button>
        </div>
      </div>
    {/* </div> */}
    < Modal isOpen={isOpen} setOpen={setOpen}/>
    <List category={category} setCategory={setCategory}/>
    </div>
  );
}
