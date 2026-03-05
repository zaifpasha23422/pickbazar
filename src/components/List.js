import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { BsCake2 } from "react-icons/bs";
import { GiLipstick } from "react-icons/gi";
import { IoBagHandleSharp } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { IoBed } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { FaTablets } from "react-icons/fa";

const List = ({ category, setCategory }) => {

  if (!category) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" onClick={() => setCategory(false)}>
      <ul className="fixed z-55 right-280 top-18 bg-white flex flex-col gap-3 px-8 p-5 rounded-md"  >
        <li className="flex items-center gap-5">
          <FaApple />
          Grocery
        </li>
        <li className="flex items-center gap-5">
          <BsCake2 /> Bakery
        </li>
        <li className="flex items-center gap-5">
          <GiLipstick /> Makeup
        </li>
        <li className="flex items-center gap-5">
          <IoBagHandleSharp /> Bags
        </li>
        <li className="flex items-center gap-5">
          <GiClothes /> Clothing
        </li>
        <li className="flex items-center gap-5">
          <IoBed /> Furniture
        </li>
        <li className="flex items-center gap-5">
          <FaApple /> Daily Needs
        </li>
        <li className="flex items-center gap-5">
          <FaBookOpen />
          Books
        </li>
        <li className="flex items-center gap-5">
          <FaHeadphones /> Gadgets
        </li>
        <li className="flex items-center gap-5">
          <FaTablets /> Medicine
        </li>
      </ul>
    </div>
  );
};

export default List;
