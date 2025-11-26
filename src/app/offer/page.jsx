import { FaChevronRight } from "react-icons/fa6";
export default function Offers (){
    return(
        <>
        <div className=" bg-slate-200 py-25 ">
            <div className="flex justify-center font-bold text-[35px]">Offers</div>
            <div className="flex justify-center gap-8 ">
                <p className="flex items-center ">Home <FaChevronRight /></p>
                <p>Offers</p>
            </div>
        </div>
        <main className="flex flex-wrap bg-gray-100 gap-10 py-40 justify-center ">
            <div className="flex flex-col pt-10 w-50 ">
                <div><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F924%2Fconversions%2F4x2x-thumbnail.jpg&w=640&q=100" /></div>
                <div className="flex pl-7 pt-4 gap-14 ">
                    <p>4OFF</p>
                    <p>Copy</p>
                </div>
            </div>
              <div className="flex flex-col pt-10 w-50 ">
                <div><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F925%2Fconversions%2F5x2x-thumbnail.jpg&w=640&q=100" /></div>
                <div className="flex pl-7 pt-4 gap-14 ">
                    <p>4OFF</p>
                    <p>Copy</p>
                </div>
            </div>
              <div className="flex flex-col pt-10 w-50 ">
                <div><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F927%2Fconversions%2F10x2x-thumbnail.jpg&w=640&q=100" /></div>
                <div className="flex pl-7 pt-4 gap-14 ">
                    <p>4OFF</p>
                    <p>Copy</p>
                </div>
            </div>
              <div className="flex flex-col pt-10 w-50 ">
                <div><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F928%2Fconversions%2F20x2x-thumbnail.jpg&w=640&q=100" /></div>
                <div className="flex pl-7 pt-4 gap-14 ">
                    <p>4OFF</p>
                    <p>Copy</p>
                </div>
            </div>
              <div className="flex flex-col pt-10 w-50 ">
                <div><img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F933%2Fconversions%2F2x2x-thumbnail.jpg&w=640&q=100" /></div>
                <div className="flex pl-7 pt-4 gap-14 ">
                    <p>4OFF</p>
                    <p>Copy</p>
                </div>
            </div>
        </main>
        </>
    )
}