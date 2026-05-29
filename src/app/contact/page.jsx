import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="flex flex-col-reverse md:flex-row px-10 xl:px-40 gap-12 bg-gray-100 mt-20">
      <div className="mb-6 md:my-10  p-4 w-full  md:w-1/3 rounded-xl bg-white border-2 border-white hover:border-[#009F7F]">
        <Image
          src="/image/contact-illustration.2f6adc05.svg"
          width={700}
          height={200}
          alt=""
        />
        <main className="flex flex-col  gap-4 mt-4">
          <h1 className="font-semibold">Address</h1>
          <p className="text-slate-600 hover:text-[#009F7F] ">
            NY State Thruway, New York, USA
          </p>
          <h1 className="font-semibold">Phone</h1>
          <p className="text-slate-600 hover:text-[#009F7F]">+129290122122</p>
          <h1 className="font-semibold">Email Address</h1>
          <p className="text-slate-600 hover:text-[#009F7F]">demo@demo.com</p>
          <h1 className="font-semibold">website</h1>
          <p className="text-slate-600 hover:text-[#009F7F]">https://redq.io</p>
          <h1 className="font-semibold">Follow us</h1>
          <ul className="flex gap-6 text-xl text-slate-600 ">
            <li className="hover:text-[#009F7F]">
              <FaFacebook />
            </li>
            <li className="hover:text-[#009F7F]">
              <FaTwitter />
            </li>
            <li className="hover:text-[#009F7F]">
              <FaInstagram />
            </li>
          </ul>
        </main>
      </div>
      <div className="mt-6 md:my-10 rounded-xl flex flex-col gap-10  bg-white p-15 border-2 border-white hover:border-[#009F7F]  ">
        <div className="text-3xl font-semibold">
          How can we improved your experience ?
        </div>
        <form action="" className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-full sm:w-1/2 ">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                className="border-2  border-slate-200 h-10 w-full  rounded-lg p-2 focus:outline-[#009F7F]"
                type="text"
                id="text"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                className="border-2 border-slate-200 h-10 w-full rounded-lg p-2 focus:outline-[#009F7F]"
                type="text"
                id="text"
              />
            </div>
          </div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="border-2 border-slate-200 h-10 rounded-lg p-2 focus:outline-[#009F7F]"
          />
          <label htmlFor="description">Description</label>
          <textarea
            rows="4"
            cols="30"
            placeholder="Enter message"
            required
            className="border-2 border-slate-200 rounded-lg p-2 focus:outline-[#009F7F] "
          ></textarea>
        </form>
        <div className="">
          <button className="bg-[#009F7F] rounded-xl text-white w-25 h-10 ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
