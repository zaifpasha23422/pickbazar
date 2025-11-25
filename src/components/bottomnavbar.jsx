import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
export function Bottomnav() {
  return (
    <div className="fixed bottom-0 w-full xl:hidden py-4 bg-white">
      <ul className="flex justify-between items-center  ">
        <li className="text-[30px]">
          <RiMenu2Fill />
        </li>
        <li className="text-[30px]">
          <CiSearch />
        </li>
        <li className="text-[30px]">
          <GoHome />
        </li>
        <li className="text-[30px]">
          <LuShoppingBag />
        </li>
        <li className="text-[30px]">
          <CgProfile />
        </li>
      </ul>
    </div>
  );
}
