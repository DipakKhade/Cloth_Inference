'use client';
// import {SessionProvider} from "next-auth/react"
import { SessionProvider } from "next-auth/react"
// import { getServerSession } from "next-auth/next"

// export const AuthPovider=({childern})=>{
//    return <SessionProvider>{childern}</SessionProvider>
// }


export default function AuthPovider({
  childern
}) {
  return (
    <SessionProvider>
   {childern}
    </SessionProvider>
  )
}