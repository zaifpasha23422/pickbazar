import Image from 'next/image';
import React from 'react'
import { ImCross } from "react-icons/im";

const Register = ({register,setRegister}) => {
   
  return (
     <div onClick={(e) => e.stopPropagation()} className="fixed h-full w-full sm:w-130 sm:h-150   px-8 py-8 z-50  sm:rounded-2xl  bg-white shadow  " >
        {/* <button onClick={()=>setRegister(!register)}
            className="cursor-pointer  absolute right-10 top-5 text-xl">
            <ImCross />
        </button> */}
        <div className="flex flex-col items-center gap-5 mx-2  sm:mx-14">
            <Image  src="/image/Logo-new (3).webp" alt="" height={150} width={150} />
            <p className="text-slate-500">By signing up, you agree to our <span className="text-[#009F7F] underline">terms</span> & <span className="text-[#009F7F] underline"> policy </span></p>
        </div>
        <form className="flex flex-col   items-center gap-5 pt-8" action="">
            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" className="border-2 border-slate-200 h-10 w-72 sm:w-100 rounded-lg p-2 focus:outline-[#009F7F] "/>
            </div>
             <div>
                <label htmlFor="name">Email</label>
                <br />
                <input type="text" className="border-2 border-slate-200 h-10 w-72 sm:w-100 rounded-lg p-2 focus:outline-[#009F7F]"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <br />
                <input type="text" className="border-2 border-slate-200 h-10 w-72 sm:w-100 rounded-lg p-2 focus:outline-[#009F7F]" />
            </div>
             <div className="flex w-72 sm:w-100 h-12 bg-[#009F7F]  justify-center text-white rounded-xl">
            <button>Register</button>
        </div>
        </form>
        <div className="flex justify-center pt-8">
            <p>Or</p>
        </div>
        <div className="flex justify-center pt-10">
            <p className="text-slate-500">Already have an account? <button type="button" className="text-[#009F7F] underline" onClick={() => setRegister(false)} >Login</button></p>
        </div>
        </div>
)}

export default Register