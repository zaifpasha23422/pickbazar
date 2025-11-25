import {shops} from "@/data/shop"
import Detail from "@/components/footer"
import Image from "next/image"
import Navbar from "@/components/Navbar"
export default function Shop() {
    return(
        <div>
        <div className="mt-40 ml-50 text-3xl font-bold">All Shops</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 mx-40 pb-70">
            {shops.map((item) => {
                return ( 
                    <div 
                    key={item.id}
                    className=" p-2 border-2 border-slate-200 rounded-md ">
                        <div className="flex gap-4">
                            <img className="h-16 w-18 mt-2 rounded-4xl" src={item.image} alt=""/>
                        <div>  
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <h2 className="text-slate-500">{item.address}</h2>
                        </div>  
                        </div>  
                    </div>
                )
            } 
            )}
        </div>
        </div>

    )
}