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
   
    </>
  );
}
