import React from 'react'
import { CiMobile1 } from 'react-icons/ci'
import { FaGoogle } from 'react-icons/fa'

const Modal = ({isOpen,setOpen}) => {
  return (
    <div className='fixed mt-8 p-10 z-50  rounded-2xl right-[500px] bg-teal-100'>
        <button onClick={()=>setOpen(!isOpen)} className='cursor-pointer bg-amber-200 absolute right-10 top-10'>close</button>

      <div className={`mt-10`}>
              <div className="flex flex-col justify-center items-center gap-5 ">
                <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75" />
                <p className="text-xl text-slate-500">
                  Login with your email & password
                </p>
              </div>
              <div>
                <form
                  className="flex flex-col items-center gap-5 pt-10"
                  action=""
                >
                  <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="text"
                      className="border-2 border-slate-200 w-100 h-10 rounded-lg "
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                      type="text"
                      className="border-2 border-slate-200  w-100 h-10 rounded-lg"
                    />
                  </div>
                  <div className="flex w-100 h-12 bg-[#009F7F]  justify-center text-white rounded-xl">
                    <button>Login</button>
                  </div>
                  <div>Or</div>
                  <div className="flex w-100 h-12 bg-blue-700  justify-center items-center text-white rounded-xl">
                    <button className="flex items-center gap-3">
                      <FaGoogle />
                      Login with Google
                    </button>
                  </div>
                  <div className="flex w-100 h-12 bg-slate-600  justify-center text-white rounded-xl">
                    <button className="flex items-center gap-3">
                      {" "}
                      <CiMobile1 />
                      Login with Mobile number
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex justify-center pt-10">
                <p className="text-slate-500">
                  Don't have any account?{" "}
                  <button className="text-[#009F7F] underline">
                    <a href="register">Register </a>
                  </button>
                </p>
              </div>
            </div>
            </div>
  )
}

export default Modal