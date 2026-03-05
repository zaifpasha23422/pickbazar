import React, { useEffect, useState } from "react";
import { CiMobile1 } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Register from "./register";
import Image from "next/image";

const Modal = ({ isOpen, setOpen }) => {
  const [register, setRegister] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => setOpen(false)}
    >
      {!register ? (
        <div
          className="bg-white p-8 rounded-2xl shadow-lg relative w-[380px]"
          onClick={(e) => e.stopPropagation()}
        >
       
          <div className="mt-6 text-center">
            <Image src="/image/Logo-new.webp" alt="logo" height={100} width={100} />
            <p className="text-lg text-slate-500 mt-4">
              Login with your email & password
            </p>
          </div>

          <form className="flex flex-col items-center gap-5 pt-8">
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                className="border-2 border-slate-200 w-full h-10 rounded-lg p-2"
              />
            </div>

            <div className="w-full">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                className="border-2 border-slate-200 w-full h-10 rounded-lg p-2"
              />
            </div>

            <button className="w-full h-12 bg-[#009F7F] text-white rounded-xl">
              Login
            </button>

            <div>Or</div>

            <button className="w-full h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center gap-3">
              <FaGoogle />
              Login with Google
            </button>

            <button className="w-full h-12 bg-slate-600 text-white rounded-xl flex items-center justify-center gap-3">
              <CiMobile1 />
              Login with Mobile number
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-slate-500">
              Don't have an account?{" "}
              <button
                className="text-[#009F7F] underline"
                onClick={() => setRegister(true)}
              >
                Register
              </button>
            </p>
          </div>
        </div>
      ) : (
        <Register register={register} setRegister={setRegister} />
      )}
    </div>
  );
};

export default Modal;
