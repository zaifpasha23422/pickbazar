import React from 'react'
import { ImCross } from "react-icons/im";

const Register = ({register,setRegister}) => {
    if(!register) return null
  return (
     <div className="fixed  mt-20 px-8 py-8 z-50  rounded-2xl right-[500px] bg-white shadow ">
        <button onClick={()=>setRegister(!register)}
            className="cursor-pointer  absolute right-10 top-5 text-xl">
            <ImCross />
        </button>
        <div className="flex flex-col items-center gap-5">
            <img className="h-8 w-40" src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75"  />
            <p className="text-slate-500">By signing up, you agree to our <span className="text-[#009F7F] underline">terms</span> & <span className="text-[#009F7F] underline"> policy </span></p>
        </div>
        <form className="flex flex-col items-center gap-5 pt-8" action="">
            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" className="border-2 border-slate-200 h-10 w-100 rounded-lg"/>
            </div>
             <div>
                <label htmlFor="name">Email</label>
                <br />
                <input type="text" className="border-2 border-slate-200 h-10 w-100 rounded-lg"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <br />
                <input type="text" className="border-2 border-slate-200 h-10 w-100 rounded-lg" />
            </div>
             <div className="flex w-100 h-12 bg-[#009F7F]  justify-center text-white rounded-xl">
            <button>Register</button>
        </div>
        </form>
        <div className="flex justify-center pt-8">
            <p>Or</p>
        </div>
        <div className="flex justify-center pt-10">
            <p className="text-slate-500">Already have an account? <button className="text-[#009F7F] underline">Login</button></p>
        </div>
        </div>

)}

export default Register