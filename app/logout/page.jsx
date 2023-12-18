import React from 'react'

import { signOut } from 'next-auth/react'
const page = () => {
  return (
  <div className='mt-[30vh]'>
    <button onClick={signOut} className="btn btn-active btn-primary">Log Out</button>
  </div>
  )
}

export default page
