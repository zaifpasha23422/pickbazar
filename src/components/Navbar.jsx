export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-gray-400 top-0 px-4 py-4 fixed w-full">
      <div className="flex gap-5">
        <div>
          <img
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75"
            alt="image"
          ></img>
        </div>
        <button className=" bg-white text-green-700 border-2 border-black h-10 w-30 rounded-xl ">
          Clothing
        </button>
      </div>
      <div>
        <ul className="flex gap-10 pl-120">
          <li>Shops</li>
          <li>Offers</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
      </div>
      <div className="flex gap-10">
        <button className="bg-green-700 rounded-2xl text-white h-8 w-16">
          Join
        </button>
        <button className="bg-green-700 rounded-2xl text-white h-8 w-40">
          Become a seller
        </button>
      </div>
    </div>
  );
}
