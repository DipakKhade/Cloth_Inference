'use client'
import React from "react";
import { useState } from "react";


const VarifingPin = () => {
  // for varifying pin
  const [Pin, setPin] = useState();
  const [Service, setService] = useState();

  // const VarifyPin= async()=>{
  //   const res = await fetch('http://localhost:3000/api/products')
  //   const alldata= await res.json()
  //   allpins= await alldata["products"].filter((obj)=>obj._id == "657b2989963a4fb8c7bab2e2")

  //   if(allpins.includes(parseInt(Pin))){
  //     setService(true)
  //   }
  //   else{
  //     setService(false)
  //   }
  // }

  let allpins=[
    431704,
    431801,
    431710,
    411005,
    400001,
    411005,
    413104
    ]
    
    const VarifyPin=(Pin)=>{
      if(allpins.includes(parseInt(Pin))){
        setService(true)
      }
      else{
        setService(false)
      }
      
    }
//  console.log(Pin,Service)
  return (
   
  
      
    <div>
      {/* pincode checking */}

      <div className="flex mt-6">
        <input
          onChange={(e)=>(setPin(e.target.value))}
          value={Pin}
          type="text"
          placeholder=" Enter Your Pincode"
          className="border-indigo-400 rounded-md border"
        />
        <button
          onClick={VarifyPin}
          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Varify a Pincode
        </button>
      </div>

      {
        
        !Service && Service != null && (
        <div className=" text-green-400 mt-4">
        we can deliver , place your order
          
        </div>
      )}
      {Service && Service != null && (
        <div className=" mt-4 text-red-500">
        sorry! we can not deliver at this pincode yet
        </div>
      )}
    </div>
  );
};

export default VarifingPin;
