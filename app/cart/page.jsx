import React from 'react'

const page = () => {
  return (
    <div className='mt-40 mb-48'>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-blue-500 dark:text-blue-400">
        <thead class="text-xs text-blue-700 uppercase bg-blue-50 dark:bg-blue-700 dark:text-blue-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           
           
        </tbody>
    </table>

</div>
    <button className="btn btn-info bg-blue-400 text-blue-800 hover:bg-blue-600 hover:text-white mt-8 px-10">Pay</button>

    <p className='mt-6 text-blue-500'>add products to your cart ..</p>
    </div>
  )
}

export default page
