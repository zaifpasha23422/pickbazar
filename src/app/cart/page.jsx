// "use client";

// import { IoBagSharp } from "react-icons/io5";
// import { useCounter } from "@/context/CounterContext";

// export default function CartQuantity({ product }) {

//   const { count, increment, decrement } = useCounter();


//   const qty = count[product.id] || 0;

//   return (
//     <>
//       {qty === 0 ? (
//         <button
//           onClick={() => increment(product.id)}
//           className="flex items-center gap-1 cursor-pointer text-md px-3 h-9 border-2 border-slate-200 rounded-2xl hover:text-white hover:bg-[#009F7F]"
//         >
//           <IoBagSharp /> Cart
//         </button>
//       ) : (
//         <div className="button flex items-center">
          
//           <button
//             onClick={() => decrement(product.id)}
//             className="px-2 h-9 bg-[#009F7F] text-white cursor-pointer rounded-l-2xl"
//           >
//             -
//           </button>

//           <span className="px-3 h-9 bg-[#009F7F] text-center text-white pt-1.5">
//             {qty}
//           </span>

//           <button
//             onClick={() => increment(product.id)}
//             className="px-2 h-9 bg-[#009F7F] text-white cursor-pointer rounded-r-2xl"
//           >
//             +
//           </button>

//         </div>
//       )}
//     </>
//   );
// }


"use client";

import { IoBagSharp } from "react-icons/io5";
import { useCounter } from "@/context/CounterContext";

export default function CartQuantity({ product }) {

  const { cartItems, increment, decrement } = useCounter();

  const qty = cartItems[product.id]?.quantity || 0;

  return (
    <>
      {qty === 0 ? (

        <button
          onClick={() => increment(product)}
          className="flex items-center gap-1 cursor-pointer text-md px-3 h-9 border-2 border-slate-200 rounded-2xl hover:text-white hover:bg-[#009F7F]"
        >
          <IoBagSharp /> Cart
        </button>

      ) : (

        <div className="button flex items-center">

          <button
            onClick={() => decrement(product.id)}
            className="px-2 h-9 bg-[#009F7F] text-white cursor-pointer rounded-l-2xl"
          >
            -
          </button>

          <span className="px-3 h-9 bg-[#009F7F] text-center text-white pt-1.5">
            {qty}
          </span>

          <button
            onClick={() => increment(product)}
            className="px-2 h-9 bg-[#009F7F] text-white cursor-pointer rounded-r-2xl"
          >
            +
          </button>

        </div>
      )}
    </>
  );
}