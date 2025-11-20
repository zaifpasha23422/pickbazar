import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="flex">
      <div className="mt-25 ml-15">
        <img
          src="https://pickbazar-react-rest.vercel.app/_next/static/media/contact-illustration.2f6adc05.svg"
          alt=""
        />
        <main className="flex flex-col gap-4 mt-4">
          <h1 className="font-semibold">Address</h1>
          <p>NY State Thruway, New York, USA</p>
          <h1 className="font-semibold">Phone</h1>
          <p>+129290122122</p>
          <h1 className="font-semibold">Email Address</h1>
          <p>demo@demo.com</p>
          <h1 className="font-semibold">website</h1>
          <p>https://redq.io</p>
          <h1 className="font-semibold">Follow us</h1>
          <ul className="flex gap-5">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </main>
      </div>
      <div className="mt-30 ml-50 flex flex-col gap-10 ">
        <div className="text-3xl font-semibold">
          How can we imporved your experience ?
        </div>
        <form action="" className="flex flex-col gap-2">
          <div className="flex gap-50">
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input className="border-2" type="text" id="text" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <br />
              <input className="border-2" type="text" id="text" />
            </div>
          </div>
          <label htmlFor="subject">Subject</label>
          <input type="text" className="border-2" />

          <label htmlFor="descrition">Description</label>
          <input type="text" className="border-2 h-30" />
        </form>
        <div className="">
          <button className="bg-green-700 rounded-2xl text-white w-25 h-10">Submit</button>
        </div>
      </div>
    </div>
  );
}
