import {shops} from "@/data/shop"
import Detail from "@/components/footer"
import Image from "next/image"
import Navbar from "@/components/Navbar"
export default function Shop() {
    return(
        <div>
        <div className="mt-40 ml-50 text-3xl font-bold">All Shops</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 mx-20 pb-70">
            {shops.map((item) => {
                return ( 
                    <div 
                    key={item.id}
                    className=" p-2 border-2 border-black ">
                        <div>
                            <img src={item.image} alt="" height={35} width={60}/>
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <h2>{item.address}</h2>
                        </div>  
                    </div>
                )
            } 
            )}
        </div>
        </div>

    )
}