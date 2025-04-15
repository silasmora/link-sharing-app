"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import TopBar from "../components/dashboard/TopBar"
import LinksSection from "../components/dashboard/LinksSection"
import ProfileDetailsSection from "../components/dashboard/ProfileDetailsSection"


const page = () => {
  const { data: session, status} = useSession()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('Links')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
    }
  }, [status, router])


  
  return (
    <div className=''>
      <TopBar activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === 'Links' && <LinksSection />}
      {activeTab === 'Profile' && <ProfileDetailsSection />}
    </div>
  )
}

export default page