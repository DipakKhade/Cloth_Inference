import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getTrendingProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC__HOST}/trending`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

const TrendingCard = async () => {
  const products = await getTrendingProducts();

  return (
    <>
      {products.map((product, index) => (
        <Link key={product.id} href={`/trending/${product.id}`}>
        <div   className="mt-12 ml-10 hover:shadow-lg">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
             <Image
              src={product.trendingLinks}
                alt="Shoes"
                className="w-[300px] h-[400px] rounded-sm"
                
                ></Image>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.trendingTag}</h2>
              <h2 className="text-xl">₹{product.trendingPrices}</h2>
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

export default TrendingCard;
