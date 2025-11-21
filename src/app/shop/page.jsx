import {shops} from "@/data/shop"
import Detail from "@/components/footer"
import Image from "next/image"

export default function Shop() {
    return(
        <>
        <div className="mt-40 ml-50 text-3xl font-bold">All Shops</div>
        <div className="grid grid-cols-3 mx-40 gap-5 mt-7">
            {shops.map((item) => {
                return ( 
                    <div 
                    key={item.id}
                    className="flex flex-col border-2 border-black ">
                        <div className="h-5">
                            <Image src={item.image} alt="" height={500} width={500}/>
                        </div>  
                        <div>
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <h2>{item.address}</h2>
                        </div>  
                    </div>
                )
            } 
            )}
        </div>
        {/* <Detail/> */}
        </>

    )
}