"use client";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();
  if (pathname == "/join" || pathname == "/register") return;

  return (
    <div className="flex  items-center sm:justify-between bg-white shadow py-4 md:py-6 px-4 sm:px-10  z-50 sticky top-0 left-0 right-0">
      <div className="flex justify-start  items-center gap-5"> 
        <div >
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75"
            alt="image"
          />
        </div>
        <button className=" hidden lg:flex items-center  gap-2 justify-center bg-white text-[#009F7F] border-2 border-slate-200 md:w-30 md:h-10 md:rounded-lg ">
          <FaApple />Clothing <IoMdArrowDropdown />
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
            <span className="flex items-center justify-center gap-1 hover:text-[#009F7F]" >Pages <IoIosArrowDropdownCircle /></span>
            <ul className="absolute p-6 space-y-6 bg-white  hidden group-hover:block">
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
        <button className="bg-[#009F7F] rounded-md text-white px-6 py-2  hidden xl:block">
          <a href="/join"> Join</a>
        </button>
        <button className="bg-[#009F7F] rounded-md text-white  px-6 py-2 hidden sm:block">
          Become a seller
        </button>
      </div>
    </div>
  );
}
