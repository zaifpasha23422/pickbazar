import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
export default function Offers (){
    return(
        <div className="mt-20">
        <div className=" bg-slate-200 py-25 ">
            <div className="flex justify-center font-bold text-[35px]">Offers</div>
            <div className="flex justify-center gap-8 ">
                <p className="flex items-center ">Home <FaChevronRight /></p>
                <p>Offers</p>
            </div>
        </div>
        <main className="flex flex-wrap bg-gray-100 gap-10 py-40 justify-center ">
            <div className="flex flex-col pt-10 w-50 ">
                <div><Image 
                src="/image/2x2x-thumbnail.webp"
                height={500}
                width={500}
                alt="" /></div>
                <div className="flex pl-7 pt-4 gap-14 ">
                    <p>4OFF</p>
                    <p>Copy</p>
                </div>
            </div>
              <div className="flex flex-col pt-10 w-50 ">
                <div><Image
                 src="/image/10x2x-thumbnail.webp" 
                 height={500}
                 width={500}
                alt=""/></div>
                <div className="flex pl-7 pt-4 gap-14 ">
                    <p>4OFF</p>
                    <p>Copy</p>
                </div>
            </div>
              <div className="flex flex-col pt-10 w-50 ">
                <div><Image 
                src="/image/20x2x-thumbnail.webp"
                height={500}
                width={500}
                alt=""
                 /></div>
                <div className="flex pl-7 pt-4 gap-14 ">
                    <p>4OFF</p>
                    <p>Copy</p>
                </div>
            </div>
              <div className="flex flex-col pt-10 w-50 ">
                <div><Image src="/image/2x2x-thumbnail.webp"
                alt=""
                height={500}
                width={500} /></div>
                <div className="flex pl-7 pt-4 gap-14 ">
                    <p>4OFF</p>
                    <p>Copy</p>
                </div>
            </div>
              <div className="flex flex-col pt-10 w-50 ">
                <div><Image 
                src="/image/20x2x-thumbnail.webp" 
                alt=""
                height={500}
                width={500}
                /></div>
                <div className="flex pl-7 pt-4 gap-14 ">
                    <p>4OFF</p>
                    <p>Copy</p>
                </div>
            </div>
        </main>
        </div>
    )
}