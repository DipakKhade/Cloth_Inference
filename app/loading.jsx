'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Loading = () => {
 
{/* Same as */}
<ToastContainer />
  return (
    <div className='align-middle text-blue-400 w-[70vw] h-[70vh] '>
 
 <button className="btn">
  <span className="loading loading-spinner"></span>
  loading
</button>
    </div>
  )
}

export default Loading
