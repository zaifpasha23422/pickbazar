export default function Register(){
    return(
        <div className="mt-25">
        <div className="flex flex-col items-center gap-5">
            <img className="h-8 w-40" src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75"  />
            <p>By signing up, you agree to our terms & policy</p>
        </div>
        <form className="flex flex-col items-center gap-5 pt-8" action="">
            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" className="border-2 h-10 w-100"/>
            </div>
             <div>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" className="border-2 h-10 w-100"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <br />
                <input type="text" className="border-2 h-10 w-100" />
            </div>
             <div className="flex w-100 h-12 bg-green-700  justify-center text-white rounded-xl">
            <button>Register</button>
        </div>
        </form>
        <div className="flex justify-center pt-8">
            <p>Or</p>
        </div>
        <div className="flex justify-center pt-10">
            <p>Already have an account? <button className="text-green-700">Login</button></p>
        </div>
        </div>
    )
}