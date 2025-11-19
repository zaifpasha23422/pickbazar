export default function Hero() {
  return (
    <div className="" >
      <div className="flex flex-col justify-center items-center grocery w-380 h-180">
        <div className=" text-5xl text-red-700  ">
          Groceries Delivered in 90 Minute
        </div>
        <p className="text-xl text-red-700">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>
      </div>
      <div className="flex gap-4 m-8">
        <div>
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=1200&q=75" />
        </div>
        <div>
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F903%2Foffer-4.png&w=1200&q=75" />
        </div>
        <div>
          <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=1200&q=75" />
        </div>
      </div>
    </div>
  );
}
