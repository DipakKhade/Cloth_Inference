'use client'
import React from 'react'
import ProductSection from '../../../components/ProductSection'
import VarifingPin from "../../../components/VarifingPin";
import Image from 'next/image';
async function getProducts(){
  const res=await fetch(`${process.env.NEXT_PUBLIC__HOST}/api/products`,{
      next:{
          revalidate:60
      }    
  })
  return res.json()
  }
  

const page = async({ params }) => {
  const d=await getProducts();
  const dress=await d["products"].filter((obj)=> obj._id == params.id)[0]
   

  return (
    <div className='mt-8  mr-9'>
      <div className='mt-20 mb-9'><ProductSection/></div>
     <div className="mt-0">
    
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-2 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image
      alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center rounded"  src={dress.img}
      width={full}
      height={full}
      ></Image>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Cloth Inference</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{dress.name}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
        
        </div>
        <p className="leading-relaxed">{dress.desc}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
          <span className="mr-3" > Available Colors  : {dress.color}</span>
            <button className={`border-2 border-gray-300 ml-1 bg-${(dress.color).toLowerCase()}-700 rounded-full w-6 h-6 focus:outline-none`}></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-blue-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-blue-900">₹{dress.price}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Add to Cart  
          </button>
          
        </div>

      

       {/* varifying pin  */}
       <VarifingPin/>
      </div>
    </div>
  </div>
</section>

    </div>



   
    </div>
  )
}

export default page
