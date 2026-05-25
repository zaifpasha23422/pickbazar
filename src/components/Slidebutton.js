// // import React , {useState} from "react";
// // import { IoBagCheckSharp } from "react-icons/io5";
// // import { RxCross2 } from "react-icons/rx";
// // import CartQuantity from "@/app/cart/page";
// // import { useCounter } from "@/context/CounterContext";
// // const Slidebutton = ({ bag ,setBag  } ) =>{
// //     const{count} = useCounter()

// //     if(!bag) return null;

// //     return(
// //         <div className="bag w-1/3 flex flex-col  mb-5 h-screen z-51 top-0 right-0 bg-white  fixed">
// //         <div className="flex justify-between items-center p-8 py-7 border-b border-slate-300 ">
// //         <div className="flex text-[#009F7F] text-xl items-center gap-5">
// //             <h1><IoBagCheckSharp /> </h1>
// //             {/* <h1>{Qty+1} </h1> */}
// //         </div>
// //         <span onClick={() =>setBag(!bag)}
// //          className=" text-white bg-[#009F7F] rounded-3xl text-2xl cursor-pointer"><RxCross2 /></span>
// //         </div>
// //         <div className="flex flex-col items-center gap-5 mt-35">
// //             <h1 className="text-[170px] text-[#009F7F]"><IoBagCheckSharp /> </h1>
// //             <h1 className="text-[20px]">No products found </h1>
// //         <h1>{count[1]}</h1>
// //         </div>
// //         <div className="flex items-center justify-between bg-[#009F7F] mx-8 mt-50 py-2  px-8 rounded-3xl">
// //             <span className="text-white">Checkout</span>
// //             <span className="bg-white text-[#009F7F] py-2 px-4 rounded-2xl">$0.00</span>
// //         </div>
// //         </div>

// //     )
// // };
// // export default Slidebutton;

// import { useCounter } from "@/context/CounterContext";
// import Image from "next/image";

// const Slidebutton = ({ bag, setBag }) => {
//   const { cartItems } = useCounter();
//   console.log(cartItems)

//   const items = Object.values(cartItems);
//   console.log(items)

//   if (!bag) return null;

//   return (
//     <div className="p-10" onClick={()=> setBag(!bag)}>
//       <h1 className="text-3xl font-bold mb-5">Cart Page</h1>

//       <div className="space-y-5">
//         {items.map((item) => (
//           <div
//             key={item.product.id}
//             className="flex items-center gap-5 border p-5 rounded"
//           >
//             <Image
//               src={item.product.Image}
//               alt={item.product.title}
//               width={100}
//               height={100}
//             />

//             <div className="space-y-2">
//               <h1 className="text-xl font-semibold">{item.product.title}</h1>

//               <p>Price: {item.product.price}</p>

//               <p>Quantity: {item.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Slidebutton;



"use client";

import { useCounter } from "@/context/CounterContext";
import Image from "next/image";
import { IoBagCheckSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Slidebutton = ({ bag, setBag }) => {

  const { cartItems } = useCounter();

  const items = Object.values(cartItems);

  // total price
  const total = items.reduce((acc, item) => {
    return (
      acc +
      parseInt(item.product.price.replace("$", "")) *
        item.quantity
    );
  }, 0);

  if (!bag) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setBag(false)}
        className="fixed inset-0 bg-black/40 z-40"
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-white z-50 flex flex-col shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">

          <div className="flex items-center gap-3 text-[#009F7F] text-xl font-semibold">
            <IoBagCheckSharp />
            <h1>
              {items.length} Items
            </h1>
          </div>

          <button
            onClick={() => setBag(false)}
            className="text-2xl cursor-pointer"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">

          {items.length === 0 ? (

            <div className="flex flex-col items-center justify-center h-full text-center">

              <IoBagCheckSharp className="text-[120px] text-[#009F7F]" />

              <h1 className="text-xl font-semibold mt-5">
                No products found
              </h1>

            </div>

          ) : (

            items.map((item) => (

              <div
                key={item.product.id}
                className="flex gap-4 border rounded-xl p-3"
              >

                <Image
                  src={item.product.Image}
                  alt={item.product.title}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />

                <div className="flex flex-col justify-between flex-1">
                    

                  <div>
                    <h1 className="font-semibold">
                      {item.product.title}
                    </h1>

                    <p className="text-sm text-gray-500">
                      {item.product.quantity}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">

                    <p className="text-[#009F7F] font-semibold">
                      {item.product.price}
                    </p>

                    <p className="text-sm">
                      Qty: {item.quantity}
                    </p>

                
                  </div>

                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-5">

          <button className="w-full bg-[#009F7F] text-white py-4 rounded-2xl flex items-center justify-between px-6 text-lg font-semibold">

            <span>Checkout</span>

            <span className="bg-white text-[#009F7F] px-4 py-1 rounded-xl">
              ${total}
            </span>

          </button>

        </div>
      </div>
    </>
  );
};

export default Slidebutton;