import React from "react";
import Link from "next/link";
import Image from "next/image";


const Mini = ({ slide, setSlide }) => {
  return (
    <>
      <div
        onClick={() => setSlide(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-500
        ${slide ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      <div
        onClick={() => setSlide(false)}
        className={`fixed top-0 left-0 h-screen w-full sm:w-1/2 bg-white z-50 p-6 shadow-lg
        transition-transform duration-700 ease-in-out
        ${slide ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="text-xl font-bold flex flex-col gap-4 ">
          <li>
            <Image
                          src="/image/Logo-new.webp"
                          alt="image"
                          height={160}
                          width={140}
                        />
          </li>
           <li className="hover:text-[#009F7F] mt-8"> 
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-[#009F7F]">
              <Link href="/offer">Offers</Link>
            </li>
            <li className="hover:text-[#009F7F]">
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              Authors
            </li>
            <li>
              Terms and Conditions
            </li>
            <li>Customer Refund Policy</li>
            <li>Vendor Refund Policy</li>
        </ul>
      </div>
    </>
  );
};

export default Mini;
