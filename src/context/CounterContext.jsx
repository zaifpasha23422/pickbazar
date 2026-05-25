// "use client";
// import { createContext, useContext, useState } from "react";
// const CounterContext = createContext();

// export const CounterProvider = ({ children }) => {
//   const [count, setCount] = useState({});
  
//   const increment = (id) => {
//     setCount((prev) => ({
//       ...prev,
//       [id]: (prev[id] || 0) + 1,
//     }));
//   };

//   const decrement = (id) => {
//   setCount((prev) => ({
//     ...prev,
//     [id]: prev[id] > 0 ? prev[id] - 1 : 0,
//   }));
// };

//   return (
//     <CounterContext.Provider value={{ count, increment, decrement }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };

// export const useCounter = () => {
//   return useContext(CounterContext);
// };


"use client";

import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState({});

  // ADD PRODUCT
  const increment = (product) => {

    setCartItems((prev) => ({
      ...prev,

      [product.id]: {
        product: product,

        quantity:
          (prev[product.id]?.quantity || 0) + 1,
      },
    }));
  };

  // REMOVE PRODUCT
  const decrement = (id) => {

    setCartItems((prev) => {

      const currentQty = prev[id]?.quantity || 0;

      if (currentQty <= 1) {

        const updated = { ...prev };

        delete updated[id];

        return updated;
      }

      return {
        ...prev,

        [id]: {
          ...prev[id],
          quantity: currentQty - 1,
        },
      };
    });
  };

  return (
    <CounterContext.Provider
      value={{
        cartItems,
        increment,
        decrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(CounterContext);
};