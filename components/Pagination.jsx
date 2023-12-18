import React from 'react'
import Link from 'next/link'
const Pagination = () => {
  return (
    <div>
      <div className="join">
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />

  <Link href={'/tshirts'}><input className="join-item btn btn-square" type="radio" name="options" aria-label="2" alt='img'/></Link>

  <Link href={'/shirts'}><input className="join-item btn btn-square" type="radio" name="options" aria-label="3" alt='img'/></Link>

 <Link href={'/dresses'}> <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" alt='img'/></Link>
</div>
    </div>
  )
}

export default Pagination
