export default function Hero() {
  return (
    <div className="" >
      <div className="grocery w-full h-175 hidden lg:block ">
        <div className="flex flex-col items-center justify-center gap-5 pt-30">
        <div className=" text-5xl text-red-700  ">
          Groceries Delivered in 90 Minute
        </div>
        <p className="text-xl text-red-700">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
          <form className="flex pt-10" action="">
            <input type="text" className="border-2 rounded-l-2xl border-green-700 h-10 w-full "/>
            <button className="bg-green-700 text-white w-35 rounded-r-2xl">Search</button>
          </form>
        </p>
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
