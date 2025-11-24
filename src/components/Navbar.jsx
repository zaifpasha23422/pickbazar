"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname == "/join" || pathname == "/register") return;

  return (
    <div className="flex justify-center items-center sm:justify-between bg-white shadow py-4 md:py-6 z-50 sticky top-0 left-0 right-0">
      <div className="flex justify-center items-center gap-5"> 
        <div >
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75"
            alt="image"
          />
        </div>
        <button className=" bg-white text-green-700 border-2 border-black md:h-10 md:wrounded-xl hidden sm:block">
          Clothing
        </button>
      </div>
      <div className="hidden xl:block">
        <ul className="flex md:gap-10  md:pl-120">
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/offer">Offers</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="relative group">
            <span >Pages</span>
            <ul className="absolute p-4  bg-white flex-col gap-8 hidden group-hover:block">
              <li>Flash Sales</li>
              <li>Manufactures/Publishers</li>
              <li>Authors</li>
              <li>FAQ</li>
              <li>Terms and Conditons</li>
              <li>Customer Refund Policy</li>
              <li>Vendor Refund Policy</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="flex gap-10 ">
        <button className="bg-green-700 rounded-2xl text-white h-8 md:w-16 hidden xl:block">
          <a href="/join"> Join</a>
        </button>
        <button className="bg-green-700 rounded-2xl text-white h-8 md:w-40 hidden sm:block">
          Become a seller
        </button>
      </div>
    </div>
  );
}
