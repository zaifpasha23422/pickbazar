import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Detail() {
    return(
        <>
        <div className="flex gap-30 mt-100 mx-15">
        <div className="">
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
        <div>
            <h1 className="font-light text-xl">Explore</h1>
            <ul className="flex flex-col gap-3 mt-8">
                <li>Shops</li>
                <li>Authors</li>
                <li>Flash Deals</li>
                <li>Coupon</li>
            </ul>
        </div>
        <div>
            <h1 className="font-light text-xl">Customer Service</h1>
            <ul className="flex flex-col gap-3 mt-8">
                <li>FAQS & helps</li>
                <li>Vendor Refund Policies</li>
                <li>Customer Refund Policies</li>
            </ul>
        </div>
        <div>
            <h1 className="font-light text-xl">Our information</h1>
            <ul className="flex flex-col gap-3 mt-8">
                <li>Manufactures</li>
                <li>Privacy Policies</li>
                <li>Terms and conditons</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <h1 className="text-2xl font-light">Subscribe Now</h1>
            <p>Subscribe your email  for newsletter and featured news  based on your interest</p>
        </div>
        </div>
        <div className="mt-20 ml-15">©2025 Pickbazar. Copyright © REDQ. All rights reserved worldwide. REDQ</div>
       </>
    )
}