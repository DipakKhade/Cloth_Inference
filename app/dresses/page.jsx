import React from 'react'
import ProductSection from '../../components/ProductSection'
import DressCards from '../../components/DressCard'

const page = () => {
  return (
    <>
      <div className='mt-24'>
    <ProductSection/>
    <div className="lg:flex lg:flex-wrap lg:space-x-11 content-center lg:ml-24">
  <DressCards/>


</div>

    </div>
    </>
  )
}

export default page
