
import AuthPovider from "./Providers"
import ProductSection from "../components/ProductSection";
import TshirtCard from "../components/TshirtCards";
import Pagination from "../components/Pagination";
import { ImFire } from "react-icons/im";


export default function Home() {

 


  return (
    <>
   
    {/* <AuthPovider> */}

      <div className="pt-24 text-2xl lg:text-4xl ml-6 lg:pt-28 pb-6">
        Your Closet, <span className="text-blue-500">Redefined</span>.
      </div>
      <h1 className="mb-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {" "}
        we strive to provide a seamless shopping experience
      </h1>
      <div>
        <ProductSection />
      </div>
      <div>
        <h2 className="text-2xl mt-6 text-blue-400 ml-6 flex">
          Trending
          <ImFire className="ml-3" />
        </h2>
        <div className="mt-4 lg:flex lg:ml-28 lg:flex-wrap">
          <TshirtCard />
        </div>
      </div>
      <div className="mt-8 ml-28 lg:ml-[32vw]">
        <Pagination />
      </div>
      {/* </AuthPovider> */}
    </>
  );
}
