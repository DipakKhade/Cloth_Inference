
import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC__HOST}/api/products`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

const Cards = async () => {
  
  const products = await getProducts();

  const tshirts= products.products.filter(obj => obj.category === 'tshirt');
console.log(tshirts)

  return (
    <>
      {tshirts.map((product) => (
        <Link key={product._id} href={`/tshirts/${product._id}`}>
        <div className="mt-12 ml-8 hover:shadow-lg">
          <div  className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
               src={product.img}
                alt="Shoes"
                className="w-[300px] h-[400px] rounded-sm"
                ></Image>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <h2 className="text-xl text-blue-600">₹{product.price}</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                ab fuga excepturi.
              </p>
              <div className="card-actions justify-end">
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

export default Cards;
