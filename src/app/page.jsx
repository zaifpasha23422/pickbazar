import ProductCard from "@/components/Card";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { data } from "@/data/product";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <ProductCard />
      <div className="flex items-center justify-center">
        <button className="bg-green-700 text-white items-center h-10 w-30 ">Load More</button>
      </div>
    </>
  );
}
