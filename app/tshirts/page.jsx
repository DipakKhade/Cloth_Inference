import React from 'react'
import TshirtCard from '../../components/TshirtCards'
import ProductSection from '../../components/ProductSection'
import Pagination from '../../components/Pagination'

const page = () => {
  return (
    <div className='mt-24'>
    <ProductSection/>
    <div className="lg:flex lg:flex-wrap lg:space-x-11 content-center lg:ml-24 ml-8">
  <TshirtCard/>
</div>
  <div className='mt-8 ml-28 lg:ml-[32vw]'><Pagination/></div>
    </div>
  )
}

export default page
