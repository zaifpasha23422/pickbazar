"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if(pathname == "/join" || pathname == "/register") return ;

  return (
    <div className="flex justify-between items-center bg-gray-400 top-0 px-4 py-4 sticky top-0 w-full">
      <div className="flex gap-5">
        <div>
          <image
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75"
            alt="image"
          />
        </div>
        <button className=" bg-white text-green-700 border-2 border-black h-10 w-30 rounded-xl ">
          Clothing
        </button>
      </div>
      <div>
        <ul className="flex gap-10 pl-120">
          <Link href="/shop">Shop</Link>
          <Link href="/offer">Offers</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/pages">Pages</Link>
        </ul>
      </div>
      <div className="flex gap-10">
        <button  
        className="bg-green-700 rounded-2xl text-white h-8 w-16">
         <a href="/join"> Join</a>
        </button>
        <button className="bg-green-700 rounded-2xl text-white h-8 w-40">
         Become a seller
        </button>
      </div>
    </div>
  );
}
