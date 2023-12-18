"use client";
import { useState, useEffect } from 'react'
import mainlogo from "../../data/mainlogo.jpg";
import Image from "next/image";
import Link from "next/link";
// import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import connecttoMongoDB from "../../lib/mongodb";
import User from "../../models/users"
import bcrypt from "bcryptjs";
// import { error } from 'console'

const page = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

const router = useRouter()
  const getInputs = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };



  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

//   const handleSubmit=async(e)=>{
//     e.preventDefault();

//     try {
//      const res = await signIn("credentials",{
//       email,
//       password,
//       redirect : false,
//       });


//       if(res.error){
// setError('invalid credentials');
// return;
//       }
//       router.replace('/')
      
//     } catch (error) {
//       console.log(error)
//     }

//   }


const handleSubmit=async(e)=>{
e.preventDefault();

try {
  await connecttoMongoDB();
  const {password} = await req.json();
  const user = await User.findOne({ email });
        
        const passwordMatch = await bcrypt.compare(password, user.password);
        return NextResponse.json({user})

        console.log(user)

} catch (error) {
  console.log(error)
}
}

  return (
    <div>
      <section className="bg-blue-50 mt-8 lg:mt-8 lg:ml-8 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  mr-3">
          <Link
            href={"/"}
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-blue-500"
          >
            <Image
              src={mainlogo}
              width={50}
              height={50}
              alt="logo"
              className="rounded-full mr-2"
            ></Image>
            Cloths Inference
          </Link>
          <div className="w-full bg-bltext-blue-500 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-blue-500">
                Log in to your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-500"
                  >
                    Your email
                  </label>
                  <input
                    onChange={getInputs}
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-500"
                  >
                    Password
                  </label>
                  <input
                    onChange={getInputs}
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 mt-6 bg-primary-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log in
                </button>
                {/* {
    error && 
<div className='bg-red-700 py-1 px-3 text-white'>{error}</div>
} */}

                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link href={"/signin"}  className="font-medium text-black hover:underline dark:text-primary-500">
                   
                     
                      Sign up
                    
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
