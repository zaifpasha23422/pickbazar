import { data } from "@/data/product";
import { MdKeyboardArrowDown } from "react-icons/md"

export default function ProductCard() {
  return (
    <div className="absolute flex gap-10  bg-[#F3F4F6] ">
      <div className="pr-30 px-10 sticky h-screen bg-white p-0 left-0 top-0">
        <ul className="space-y-4 py-10 ">
          <li className="flex">Fruits & Vegetables <MdKeyboardArrowDown /></li>
          <li className="flex">Meat and Fish <MdKeyboardArrowDown /></li>
          <li className="flex">Snacks <MdKeyboardArrowDown /></li>
          <li className="flex">Pet Care <MdKeyboardArrowDown /></li>
          <li className="flex">Home & Cleaning <MdKeyboardArrowDown /></li>
          <li className="flex">Dairy <MdKeyboardArrowDown /></li>
          <li className="flex">Cooking <MdKeyboardArrowDown /></li>
          <li className="flex">Breakfast <MdKeyboardArrowDown /></li>
          <li className="flex">Beverage <MdKeyboardArrowDown /></li>
          <li className="flex">Health & Beauty <MdKeyboardArrowDown /></li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8 bg-gray-100">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className=" shadow rounded-lg bg-white "
            >
              <div className="border-b-2 border-gray-50">
                <img src={item.img} className=""/>
              </div>
             <div className="flex flex-col px-3 py-2">
              <h2 className="text-xl">{item.title}</h2>
              <div className="flex justify-between items-center">{item.description} <button className="border-2 border-black px-4 py-1 rounded-2xl">Cart</button></div>
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
