

"use client";
import { useEffect, useState } from "react";
import { IoBagSharp } from "react-icons/io5";
import Slidebutton from "@/components/Slidebutton";

export default function CartQuantity() {

  const [qty, setQty] = useState(0);
    const updateQty=(qty)=>{
    setQty(qty)
  }

  return (
    <>
    {/* <Some qty={qty} setQty={setQty} updateQty={updateQty}></Some> */}
      {qty === 0 ? (
        <button onClick={() => updateQty(qty + 1)}
        className="flex items-center gap-1 cursor-pointer text-md px-3 h-9 border-2 border-slate-200 rounded-2xl hover:text-white hover:bg-[#009F7F] "><IoBagSharp /> Cart</button>
      ):

        <div className="button flex items-center ">
          <button
            onClick={() => updateQty(qty - 1)}
            className="px-2 h-9 bg-[#009F7F] text-white cursor-pointer rounded-l-2xl "
          >
            -
          </button>

          <span className="px-3 h-9 bg-[#009F7F] text-center  text-white pt-1.5">
            {qty}
          </span>

          <button
            onClick={() => updateQty(qty + 1)}
            className="px-2 h-9 bg-[#009F7F] text-white cursor-pointer rounded-r-2xl  "
          >
            +
          </button>
        </div>   
}
    </>
  );
}
