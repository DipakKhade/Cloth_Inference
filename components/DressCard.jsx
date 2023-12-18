import React from "react";
import Link from "next/link";
import Image from "next/image";
async function getDresses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC__HOST}/api/products`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

const DressCards = async () => {
  const products = await getDresses();
const dresses = products["products"].filter((obj)=> obj.category === 'dresses')
  return (
    <>
      {dresses.map((dress, index) => (
        <Link key={dress._id} href={`/dresses/${dress._id}`}>
        <div  className={`mt-12 hover:shadow-lg ${index===0 ? 'ml-6' : 'ml-0'}}`}>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
              src={dress.img}
                alt="Shoes"
                className="w-[300px] h-[400px] rounded-sm"
                width={full}
                ></Image>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{dress.name}</h2>
              <p>
             {dress.desc}
              </p>
              <h2 className="text-xl">₹{dress.price}</h2>
              <div className="card-actions justify-end">
                <Link href={'/checkout'}>
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

export default DressCards;
