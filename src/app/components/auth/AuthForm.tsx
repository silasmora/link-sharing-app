"use client"

import Button from "../Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm({ type }: { type: 'login' | 'register' }) {

  const isLogin = type === 'login';
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  console.log(formData)
  const [error, setError] = useState<string | null>(null)
  console.log(error)           
  const [loading, setLoading] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })

    if (error) {
      setError("")
    }
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    if (!isLogin && formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }  
    // try {
    //   const res = await fetch("/api/auth/signup", {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json" },
    //     body: JSON.stringify(formData)
    //   })

    //   const data = await res.json()
      
    //   if (!res.ok) {
    //     throw new Error(data.error || "Something went wrong")
    //   }

    //   alert("Signup successful! Redirecting...")
    //   router.push("/login") // Redirect to login page

    // } catch (err: any) {
    //   setError(err.message)
    // } finally {
    //   setLoading(false)
    // }
    console.log("Form submitted:", formData)
    }
  
  return (
    <div className="md:flex md:justify-center md:items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 md:w-[476px] md:bg-white md:p-10 md:rounded-lg">
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] font-bold leading-9 md:text-[32px] md:leading-[48px]">{isLogin? "Login" : "Create account"}</h1>
          <p className="text-darkGrey leading-6 ">{isLogin? "Add your details below to get back into the app" : "Let’s get you started sharing your links!"}</p>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="block text-[#333333] text-[12px] leading-[18px]">Email address</label>
            <div className="relative">
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="e.g. alex@email.com"
                value={formData.email}
                onChange={handleChange}
                className={`placeholder:text-[#333333]/50 w-full border rounded-lg pl-11 py-3 mt-1 leading-6 focus:outline-none focus:border-purple focus:shadow-[0px_0px_32px_0px_rgba(99,60,255,0.25)]
                ${error ? 'border-red' : 'border-grey '}`} />
              <svg className="absolute left-4 top-[55%] transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 3H2C1.86739 3 1.74021 3.05268 1.64645 3.14645C1.55268 3.24021 1.5 3.36739 1.5 3.5V12C1.5 12.2652 1.60536 12.5196 1.79289 12.7071C1.98043 12.8946 2.23478 13 2.5 13H13.5C13.7652 13 14.0196 12.8946 14.2071 12.7071C14.3946 12.5196 14.5 12.2652 14.5 12V3.5C14.5 3.36739 14.4473 3.24021 14.3536 3.14645C14.2598 3.05268 14.1326 3 14 3ZM13.5 12H2.5V4.63688L7.66187 9.36875C7.75412 9.45343 7.87478 9.50041 8 9.50041C8.12522 9.50041 8.24588 9.45343 8.33813 9.36875L13.5 4.63688V12Z" fill="#737373"/>
              </svg>
              {error && <p className="text-red text-[12px] leading-[18px] absolute right-4 top-[55%] transform -translate-y-1/2">{error}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-[#333333] text-[12px] leading-[18px]">{isLogin? 'Password' : 'Create password'}</label>
            <div className="relative">
              <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder={isLogin? 'Enter your password' : 'At least .8 characters'}
                value={formData.password}
                onChange={handleChange} 
                className={`placeholder:text-[#333333]/50 w-full border rounded-lg pl-11 py-3 mt-1 leading-6 focus:outline-none focus:border-purple focus:shadow-[0px_0px_32px_0px_rgba(99,60,255,0.25)]
                ${error ? "border-red" : "border-grey"}`} />
              <svg className="absolute left-4 top-[55%] transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#737373" d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"/></svg>
              {error && <p className="text-red text-[12px] leading-[18px] absolute right-4 top-[55%] transform -translate-y-1/2">{error}</p>}
            </div>
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="email" className="block text-[#333333] text-[12px] leading-[18px]">{isLogin? 'password' : 'Create password'}</label>
              <div className="relative">
                <input 
                  type="password" 
                  name="confirmPassword" 
                  id="confirmPassword" 
                  placeholder='At least .8 characters'
                  value={formData.confirmPassword}
                  onChange={handleChange} 
                  className={`placeholder:text-[#333333]/50 w-full border rounded-lg pl-11 py-3 mt-1 leading-6 focus:outline-none focus:border-purple focus:shadow-[0px_0px_32px_0px_rgba(99,60,255,0.25)]
                    ${error ? "border-red" : "border-grey"}`} />
                <svg className="absolute left-4 top-[55%] transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#737373" d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0ZM10 5H6V3.5a2 2 0 1 1 4 0V5Z"/></svg>
                {error && <p className="text-red text-[12px] leading-[18px] absolute right-4 top-[55%] transform -translate-y-1/2">{error}</p>}
              </div>
            </div>
          )}
          {!isLogin && (
            <div>
              <p className="text-[12px] leading-[18px] text-darkGrey">Password must contain at least 8 characters</p>
            </div>
          )}
          <Button 
            type="submit"
            disabled={loading}
            >{isLogin? 'Login' : 'Create new account'}
            </Button>
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-1">
            <p className="leading-6 text-darkGrey">{isLogin? "Don’t have an account?" : "Already have an account?"}</p>
            <Link href={isLogin? "/auth/register" : "/auth/login"} className="text-purple">
              {isLogin? "Create account" : "Login"}
            </Link>
          </div>
        </div>
      </form>
    </div>
  )

}