import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
export function Bottomnav() {
  return (
    <div className="fixed bottom-0 w-full xl:hidden py-4 bg-white px-4">
      <ul className="flex justify-between items-center  ">
        <li className="sm:text-[30px] text-[24px] ">
          <RiMenu2Fill />
        </li>
        <li className="sm:text-[30px] text-[24px]">
          <CiSearch />
        </li>
        <li className="sm:text-[30px] text-[24px]">
          <GoHome />
        </li>
        <li className="sm:text-[30px] text-[24px]">
          <LuShoppingBag />
        </li>
        <li className="sm:text-[30px] text-[24px]">
          <CgProfile />
        </li>
      </ul>
    </div>
  );
}
