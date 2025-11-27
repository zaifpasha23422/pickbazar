import { shops } from "@/data/shop";
import Image from "next/image";
export default function Shop() {
  return (
    <div className="px-54 py-15">
      <div className="text-3xl font-bold">All Shops</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {shops.map((item) => {
          return (
            <div
              key={item.id}
              className="flex gap-5 justify-center items-center px-5 py-2 border-2 border-slate-200 rounded-md "
            >
              <div className="h-14 w-20">
                <Image
                  src={item.image}
                  height={500}
                  width={500}
                  alt="image"
                  className="w-full h-full rounded-full bg-cover"
                />
              </div>
              <div className="flex flex-col p-2">
                <h className="text-sm">{item.name}</h>
                <h className="text-xs">{item.address}</h>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
