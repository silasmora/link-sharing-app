"use client"

import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Button from "../components/Button"


const page = () => {
  const { data: session, status} = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
    }
  }, [status, router])


  
  return (
    <div className='flex justify-center items-center'>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  )
}

export default page