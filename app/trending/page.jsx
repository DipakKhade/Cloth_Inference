import React from 'react'
import ProductSection from '../../components/ProductSection'
import TrendingCard from '../../components/TrendingCard'

const page = () => {
  return (
    <>
      <div className='mt-24'>
    <ProductSection/>
    <div className="lg:flex lg:flex-wrap lg:space-x-11 content-center lg:ml-24">
  <TrendingCard/>


</div>

    </div>
    </>
  )
}

export default page
