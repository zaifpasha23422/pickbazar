"use client"
import { usePathname } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiPlayButton } from "react-icons/gi";
export default function Footer() {
    const pathname = usePathname();
    if(pathname == "/" || pathname == "/join" || pathname =="/register") return ;
    return(
        <>
        <div className="flex flex-wrap gap-5 sm:gap-30 mx-4 pt-20 sm:mx-20 ">
        <div className="w-36">
            <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75" />
            <p className="py-6">NY stateThruway, New York, USA</p>
            <p>demo@demo.com</p>
            <p>129290122122</p>
            <ul className="flex py-4 gap-3">
                <li><FaFacebook /></li>
                <li><FaTwitter /></li>
                <li><FaInstagram /></li>
            </ul>
        </div>
        <div className="w-36">
            <h1 className="font-light text-xl">Explore</h1>
            <ul className="flex flex-col gap-3 mt-8">
                <li>Shops</li>
                <li>Authors</li>
                <li>Flash Deals</li>
                <li>Coupon</li>
            </ul>
        </div>
        <div className="w-36">
            <h1 className="font-light text-xl">Customer Service</h1>
            <ul className="flex flex-col gap-3 mt-8">
                <li>FAQS & helps</li>
                <li>Vendor Refund Policies</li>
                <li>Customer Refund Policies</li>
            </ul>
        </div>
        <div className="w-36">
            <h1 className="font-light text-xl">Our information</h1>
            <ul className="flex flex-col gap-3 mt-8">
                <li>Manufactures</li>
                <li>Privacy Policies</li>
                <li>Terms and conditons</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="flex flex-col gap-5 w-36">
            <h1 className="text-2xl font-light">Subscribe Now</h1>
            <p>Subscribe your email  for newsletter and featured news  based on your interest</p>
            <form className="flex items-center " action="">
                <input type="text" placeholder="write your email here" className="border-2 w-full h-8 p-4" />
                <span className="text-3xl"><GiPlayButton /></span>
            </form>
        </div>
        </div>
        <div className="mt-20 ml-15">©2025 Pickbazar. Copyright © REDQ. All rights reserved worldwide. REDQ</div>
       </>
    )
}