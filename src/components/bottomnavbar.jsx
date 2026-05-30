"use client";

import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { useContext, useState } from "react";
import Mini from "./Mini";
import Modal from "./Modal";
import { ModalContext } from "@/context/Modalcontext";
import Slidebutton from "./Slidebutton";
import Link from "next/link";

export default function Bottomnavbar() {
  const [slide, setSlide] = useState(false);
  const {open, setOpen} = useContext(ModalContext)
  const {carts, setCartsOpen} = useContext(ModalContext)
  console.log(carts)
  return (
    <>
      <Mini slide={slide} setSlide={setSlide} />
      <Modal open={open} setOpen={setOpen}/>
      <Slidebutton carts={carts} setCartsOpen = {setCartsOpen}/>
      <div className="fixed bottom-0 w-full xl:hidden py-4 px-4 z-40 bg-white">
        <ul className="flex justify-between items-center">
          <li
            onClick={() => setSlide(true)}
            className="sm:text-[30px] text-[24px] cursor-pointer"
          >
            <RiMenu2Fill />
          </li>

          <li className="sm:text-[30px] text-[24px]">
            <CiSearch />
          </li>

          <li className="sm:text-[30px] text-[24px]">
            <Link href="/"><GoHome /></Link>
          </li>

          <li onClick={()=> setCartsOpen(!carts)}
          className="sm:text-[30px] text-[24px]">
            <LuShoppingBag />
          </li>

          <li onClick={() => setOpen(!open)}
            className="sm:text-[30px] text-[24px]"
          >
            <CgProfile />
          </li>
        </ul>
      </div>
    </>
  );
}
