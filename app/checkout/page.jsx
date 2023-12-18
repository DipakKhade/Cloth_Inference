'use client';
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const page = () => {
 
  const f=()=>{
    toast.success(<div>CheckOut and get instent delivery</div>, {
      position: "top-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
      })
  }
    

  return (
    <div className="mt-28">
 

<ToastContainer
  position="top-left"
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
  {f()}
      <h2 className=" text-3xl m-auto ml-[36vw] text-blue-500"> CheckOut</h2>

      <div className="space-y-6 ml-8 mt-7">

      <h2 className="text-blue-600 text-xl">Delivery Details</h2>
      <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs lg:mr-6" />

      <input type="text" placeholder="mobile number" className="input input-bordered input-info w-full max-w-xs lg:mr-6" />

      <input type="text" placeholder="Pincode" className="input input-bordered input-info w-full max-w-xs" />

      <input type="text" placeholder="Locality" className="input input-bordered input-info w-full max-w-xs" />


      <textarea className="textarea textarea-info h-[20vh] lg:m-24 mb-0" placeholder="Address (Area and Street)"></textarea>


      </div>
      <button className="btn btn-info ml-40 mt-8">SAVE AND DELIVER HERE</button>


    </div>
  );
};

export default page;
