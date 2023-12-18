import React from "react";
import Link from "next/link";
import Image from "next/image";

 async function getShirts(){
  const res=await fetch(`${process.env.NEXT_PUBLIC__HOST}/api/products`,{
      next:{
          revalidate:60
      }
  })

  return res.json()
}
const ShirtsCard = async() => {
  const shirt_products=await getShirts();
  const shirts=shirt_products.products.filter((obj)=> obj.category === "shirts")

  return (
    <>
      {shirts.map((shirt,index) => (
        
        
            <Link key={shirt._id} href={`/shirts/${shirt._id}`}>
        <div  className='mt-12 ml-10 hover:shadow-lg' >
          <div className='card card-compact w-96 bg-base-100 shadow-xl'>
            <figure>
             <Image
             src={shirt.img}
              alt='Shoes' 
              className='w-[300px] rounded-sm'
              width={400}
             >

             </Image>
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{shirt.name}</h2>
              <p>{shirt.desc}</p>
              <h2 className='text-xl'>₹{shirt.price}</h2>
              <div className='card-actions justify-end'>
              <Link href={`/checkout`}>
              <button  className="btn bg-blue-400">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </>
  );
};

export default ShirtsCard;
