
import { Rubik } from 'next/font/google'
import './globals.css'
import Footer from "../components/Footer"
import MaxWidthWrapper from "../components/MaxwidthWrapper"
import Navbar from "../components/Navbar"
import AuthPovider from "./Providers"
import NextTopLoader from 'nextjs-toploader';
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'ClothInference.com',
  description: 'Your Closet, Redefined.',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
     <link rel="icon" href="/favicon.ico" />
      <body className={rubik.className} >
   
      <MaxWidthWrapper>
    <Navbar/>
    <NextTopLoader
  color="#1E90FF"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  showSpinner={false}
  easing="ease"
  speed={100}
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false}
/>
     <div>
     {children}
     </div>
    <Footer/>
    </MaxWidthWrapper>
 
    
     </body>
    </html>
  )
}
