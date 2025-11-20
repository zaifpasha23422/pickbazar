export default function Join(){
    return(
        <>
        <div className="mt-25">
            <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75"/>
            <p>Login with your email & password</p>
        </div>
        <div>
            <form action="">
                <div>
                <label htmlFor="email">Email</label>
                <br/>
                <input type="text" className="border-2"/>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <br />
                <input type="text" className="border-2" />
                </div>
                <div className="w-100 h-12 bg-green-700 "><button className="  text-white">Login</button></div>
                <div>Or</div>
                <div className="w-100 h-12 bg-blue-700"><button className=" text-white">Login with Google</button></div>
                <div className="w-100 h-12 bg-gray-600"><button className=" text-white">Login with Mobile number</button></div>
            </form>
        </div>
            </>
    )
}