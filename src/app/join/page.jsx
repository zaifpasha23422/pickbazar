export default function Join(){
    return(
        <div className=" mt-25 ">
        <div className="flex flex-col justify-center items-center gap-5 ">
            <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75"/>
            <p className="text-2xl">Login with your email & password</p>
        </div>
        <div>
            <form  className="flex flex-col items-center gap-5 pt-10" action="">
                <div>
                <label htmlFor="email">Email</label>
                <br/>
                <input type="text" className="border-2 w-100 h-10"/>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <br />
                <input type="text" className="border-2 w-100 h-10" />
                </div>
                <div className="flex w-100 h-12 bg-green-700  justify-center text-white rounded-xl" ><button>Login</button></div>
                <div>Or</div>
                <div className="flex w-100 h-12 bg-blue-700  justify-center text-white rounded-xl"><button>Login with Google</button></div>
                <div className="flex w-100 h-12 bg-gray-600  justify-center text-white rounded-xl"><button>Login with Mobile number</button></div>
            </form>
        </div>
        <div className="flex justify-center pt-10"> 
            <p>Don't have any account? <button className="text-green-700"><a href="register">"Register </a></button></p>
        </div>
            </div>
    )
}