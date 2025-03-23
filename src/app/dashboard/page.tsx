"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


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
      
    </div>
  )
}

export default page