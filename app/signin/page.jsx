"use client";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import bcrypt from "bcryptjs"
import { useRouter } from 'next/navigation'
const Page = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState()
const [Sucess, setSucess] = useState()

const router = useRouter()
  const getInputs = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } 
    else if (e.target.name == "email") {
      setEmail(e.target.value);
    }
     else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  
  // if(!name || !email || !password){
  //   setError("all fields required")
  //   return;
  // }


  // console.log(name, email, password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    const hashedpassword=await  bcrypt.hash(password,10)      //10 times the passwoed is hashed
// console.log(hashedpassword)


      const resUserExists = await fetch(`${process.env.NEXT_PUBLIC__HOST}/api/userExists`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email}),
      })


    const {user} = await resUserExists.json();

    if(user){
      setError('User already exists, please Log In')
      // alert('user already exists')
     setTimeout(() => {
      router.push('/newlogin')
     }, 2000);
      return;
    }
    else{
     setSucess('Your ClothInference Account is sucessfully created')
     setTimeout(() => {
      router.push('/')
     }, 2000);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC__HOST}/api/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({name ,email, hashedpassword}),
    });
    let respone = await res.json();
    // console.log(respone,name,password,hashedpassword)
    setName("");
    setEmail("");
    setPassword("");



     
     
  


  
  };

  return (
    <div className="mt-24 -z-50">
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{toast.error(error, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
})}
{
  toast.success(Sucess, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
}

      <section className="bg-white dark:bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        
            we strive to provide a seamless shopping experience
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Our platform is designed with you in mind, offering a user-friendly
            interface that ensures a delightful journey from browsing to
            checkout.
          </p>
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <label
              for="default-email"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Email sign-up
            </label>
            <div className="relative space-y-4">
              <input
                onChange={getInputs}
                value={name}
                type="name"
                id="name"
                name="name"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
              />

              <input
                onChange={getInputs}
                value={email}
                type="email"
                id="email"
                name="email"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              />

              <input
                onChange={getInputs}
                value={password}
                type="password"
                id="password"
                name="password"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
              />

              <div>
                <button  type="submit" className="btn btn-active btn-primary">
                  Sign Up
                </button>
              </div>
            </div>

            
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-6">
                       have an Account  <Link href={'/login'}> <a href="#" className="font-medium text-black hover:underline dark:text-primary-500">Log In</a> </Link>
                  </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Page;
