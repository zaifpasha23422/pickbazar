import { data } from "@/data/product";
import { MdKeyboardArrowDown } from "react-icons/md"

export default function ProductCard() {
  return (
    <div className="flex p-10 ">
      <div className="pr-30">
        <ul>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  h-full">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full h-full shadow rounded-sm "
            >
              <div className="w-full h-50 overflow-hidden">
                <img src={item.img} className="rounded bg-cover" />
              </div>
             <div className="px-6 my-4 flex flex-col">
              <h2>{item.title}</h2>
              <h2 className="flex justify-between">{item.description} <button className="border-2 border-black w-15">Cart</button></h2>
             </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
