"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import TopBar from "../components/dashboard/TopBar"
import LinksSection from "../components/dashboard/LinksSection"
import ProfileDetailsSection from "../components/dashboard/ProfileDetailsSection"
import Button from "../components/Button"


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
    <div className='flex flex-col'>
      <div>
        <TopBar activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
      <div className="p-4 flex flex-col">
        {activeTab === 'Links' && <LinksSection />}
        {activeTab === 'Profile' && <ProfileDetailsSection />}
        <div className="p-4 bg-white rounded-b-xl border-t border-t-grey">
          <Button type="button">Save</Button>
        </div>
      </div>
    </div>
  )
}

export default page