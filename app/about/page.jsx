'use client'
import React from "react";
import nextlogo from "../../somedata/nextjslogo.png";
import tailwindlogo from "../../somedata/tailwindlogo.jpg";
import mongo from "../../somedata/mongodbatlas.jpg";
import nextauthimg from "../../somedata/next_auth.png";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const page = () => {
  
{/* Same as */}
const f=()=>{
  toast(<div className="text-blue-500 text-xl">Good to See You !</div>, {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
}

  return (

    <div className="w-[80vw] ml-3">
  <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
 {  f()
}
      <section className="text-blue-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              alt='/'
              className="inline-block w-8 h-8 text-blue-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg ">
              Welcome to our vibrant online marketplace, crafted with passion
              using Next.js{" "}
              <Image
                src={nextlogo}
                width={110}
                // height={100}
                alt="next js"
                className="lg:ml-56 ml-36"
              ></Image>
              and styled with the sleek aesthetics of Tailwind CSS
              <Image
                src={tailwindlogo}
                width={150}
                // height={100}
                alt="tailwind css"
                className="lg:ml-52 ml-32"
              ></Image>
              At Cloth-Inference, we strive to provide a seamless shopping
              experience, combining the power of Next.js for efficient and
              dynamic page rendering with the elegance of Tailwind CSS ,MongoDB DataBase 
              <Image
                src={mongo}
                width={150}
               
                alt='mongodb'
                className="lg:ml-52 ml-32"
              ></Image>

              and NextAuth for authentication for Cloth Inference application.
              <Image
                src={nextauthimg}
                width={250}
                // height={250}
                className="lg:ml-[11vw] ml-24"
                alt="next auth"
              ></Image>
               
              for a
              modern and responsive design. Our platform is designed with you in
              mind, offering a user-friendly interface that ensures a delightful
              journey from browsing to checkout. Explore our diverse collection
              of products, each showcased with precision and style. We are
              committed to delivering a top-notch e-commerce experience, and we
              invite you to discover the perfect blend of technology and design
              on our platform. Happy shopping!
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              Dipak Khade
            </h2>
            <p className="text-gray-500">Connect me at : dipakhade214@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
