import { FaShoppingBag } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="">
      <div className="grocery w-full h-screen top-0 hidden lg:block ">
        <div className="flex flex-col items-center justify-center gap-5 py-50 ">
          <div className=" text-5xl font-bold  ">
            Groceries Delivered in 90 Minute
          </div>
          <p className="text-xl ">
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday{" "}
          </p>
          <form className="flex w-full justify-center pt-7" action="">
            <input
              type="text"
              placeholder="Search your products from here"
              className="shadow-lg pl-5 rounded-l-xl border-white h-13 w-1/2"
            />
            <button className="bg-green-700 text-white w-35 rounded-r-2xl">
              Search
            </button>
          </form>

          <div className="flex flex-col gap-2 items-center justify-center rounded-md bg-green-700 h-25 w-25 ml-[95%] fixed z-50">
            <span className="flex gap-2 text-white">
              <FaShoppingBag />0 item
            </span>
            <button className="bg-white text-green-700 w-16 h-8 rounded-md">
              $0.00
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4 m-8">
        <div>
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=1200&q=75" />
        </div>
        <div className="hidden sm:block">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F903%2Foffer-4.png&w=1200&q=75" />
        </div>
        <div className="hidden lg:block">
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=1200&q=75" />
        </div>
      </div>
    </div>
  );
}
