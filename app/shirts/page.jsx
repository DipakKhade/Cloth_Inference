import React from 'react'
import ProductSection from '../../components/ProductSection'
import ShirtsCard from '../../components/ShirtsCard'
import Pagination from '../../components/ShirtsCard'
import Link from 'next/link'
const page = () => {
  return (
    <>
      {/* <div className='mt-24'>
    <ProductSection/>
    <div className="lg:flex lg:flex-wrap lg:space-x-11 content-center lg:ml-24">
  <ShirtsCard/>


</div>

    </div> */}



    <div className='min-h-screen'>
    <h1 className='text-4xl text-blue-700 mt-60'>Products are currently Unavaible</h1>
    <Link href={'/'}><button className="btn btn-active mt-6 text-blue-500">Home Page</button></Link>
    </div>

    </>
  )
}

export default page
