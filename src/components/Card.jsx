import { data } from "@/data/product";
import { MdKeyboardArrowDown } from "react-icons/md"

export default function ProductCard() {
  return (
    <div className="flex gap-10 relative bg-[#F3F4F6] mb-14 pb-30">
      <div className="w-80 sticky bg-white h-screen  top-0 mt-8 hidden xl:block ">
        <ul className=" w-full p-5 space-y-5 mx-auto">
          <li className="flex items-center justify-between">Fruits & Vegetables <MdKeyboardArrowDown /></li>
          <li className="flex items-center justify-between">Meat and Fish <MdKeyboardArrowDown /></li>
          <li className="flex items-center justify-between">Snacks <MdKeyboardArrowDown /></li>
          <li className="flex items-center justify-between">Pet Care <MdKeyboardArrowDown /></li>
          <li className="flex items-center justify-between">Home & Cleaning <MdKeyboardArrowDown /></li>
          <li className="flex items-center justify-between">Dairy <MdKeyboardArrowDown /></li>
          <li className="flex items-center justify-between">Cooking <MdKeyboardArrowDown /></li>
          <li className="flex items-center justify-between">Breakfast <MdKeyboardArrowDown /></li>
          <li className="flex items-center justify-between">Beverage <MdKeyboardArrowDown /></li>
          <li className="flex items-center justify-between">Health & Beauty <MdKeyboardArrowDown /></li>
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
         <div className="flex items-center justify-center absolute bottom-0  w-full mx-auto my-5">
        <button className="bg-green-700 text-white items-center h-10 w-30 ">Load More</button>
      </div>
    </div>
  );
}
