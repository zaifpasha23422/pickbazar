"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiPlayButton } from "react-icons/gi";
export default function Footer() {
  const pathname = usePathname();
  if (pathname == "/" || pathname == "/join" || pathname == "/register") return;
  return (
    <>
      <div className="flex flex-wrap gap-5 sm:gap-15 mx-4 pt-20 sm:mx-20 ">
        <div className="w-56 ">
          <Image src="/image/Logo-new.webp" alt="" width={140} height={200} />
          <p className="pt-7 text-slate-500 hover:text-[#009F7F] text-sm">NY stateThruway, New York, USA</p>
          <p className="pt-5 text-slate-500 hover:text-[#009F7F] text-sm">demo@demo.com</p>
          <p className="text-slate-500 hover:text-[#009F7F] text-sm">129290122122</p>
          <ul className="flex py-4 gap-5 text-2xl text-[#009F7F]   ">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
        <div className="w-56">
          <h1 className="font-extralight text-lg">Explore</h1>
          <ul className="flex flex-col gap-3 mt-8 text-sm text-slate-500">
            <li className="hover:text-[#009F7F]">Shops</li>
            <li className="hover:text-[#009F7F]">Authors</li>
            <li className="hover:text-[#009F7F]">Flash Deals</li>
            <li className="hover:text-[#009F7F]">Coupon</li>
          </ul>
        </div>
        <div className="w-56">
          <h1 className="font-extralight text-lg">Customer Service</h1>
          <ul className="flex flex-col gap-3 mt-8 text-sm text-slate-500">
            <li className="hover:text-[#009F7F]">FAQS & helps</li>
            <li className="hover:text-[#009F7F]">Vendor Refund Policies</li>
            <li className="hover:text-[#009F7F]">Customer Refund Policies</li>
          </ul>
        </div>
        <div className="w-56">
          <h1 className="font-extralight text-lg">Our information</h1>
          <ul className="flex flex-col gap-3 mt-8 text-slate-500 text-sm">
            <li className="hover:text-[#009F7F]">Manufactures</li>
            <li className="hover:text-[#009F7F]">Privacy Policies</li>
            <li className="hover:text-[#009F7F]">Terms and conditons</li>
            <li className="hover:text-[#009F7F]">Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 w-56">
          <h1 className="text-lg  font-extralight">Subscribe Now</h1>
          <p className="pt-2 text-slate-500 hover:text-[#009F7F] text-sm">
            Subscribe your email for newsletter and featured news based on your
            interest
          </p>
          <form
            className="flex items-center relative text-slate-500  group "
            action=""
          >
            <input
              type="text"
              placeholder="write your email here"
              className="border w-full h-8 p-4 py-5 rounded-lg focus:outline-[#009F7F] "
            />
            <span className="text-3xl absolute right-2 top-1 group-focus-within:text-[#009F7F] ">
              <GiPlayButton />
            </span>
          </form>
        </div>
      </div>
      <div className="mt-20 mb-4 ml-4 sm:ml-20 text-slate-500 text-sm">
        ©2025<span className="text-black"> Pickbazar.</span> Copyright © REDQ.
        All rights reserved worldwide.<span  className="text-black">REDQ</span>
      </div>
    </>
  );
}
