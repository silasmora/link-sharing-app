
export default function AuthForm({ type }: { type: 'login' | 'register' }) {

  const isLogin = type === 'login';

  return (
    <div>
      <form action="" className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] font-bold leading-9">{isLogin? "Login" : "Create account"}</h1>
          <p className="text-darkGrey leading-6 ">{isLogin? "Add your details below to get back into the app" : "Let’s get you started sharing your links!"}</p>
        </div>
        <div>
          <label htmlFor="email" className="block text-[#333333] text-[12px] leading-[18px]">Email address</label>
          <div className="relative">
            <input type="email" name="email" id="email" placeholder="e.g. alex@email.com" className="placeholder:text-darkGrey/50 w-full border border-grey rounded-lg pl-11 py-3 mt-1 leading-6 text-[16px]" />
            <svg className="absolute left-4 top-[55%] transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 3H2C1.86739 3 1.74021 3.05268 1.64645 3.14645C1.55268 3.24021 1.5 3.36739 1.5 3.5V12C1.5 12.2652 1.60536 12.5196 1.79289 12.7071C1.98043 12.8946 2.23478 13 2.5 13H13.5C13.7652 13 14.0196 12.8946 14.2071 12.7071C14.3946 12.5196 14.5 12.2652 14.5 12V3.5C14.5 3.36739 14.4473 3.24021 14.3536 3.14645C14.2598 3.05268 14.1326 3 14 3ZM13.5 12H2.5V4.63688L7.66187 9.36875C7.75412 9.45343 7.87478 9.50041 8 9.50041C8.12522 9.50041 8.24588 9.45343 8.33813 9.36875L13.5 4.63688V12Z" fill="#737373"/>
            </svg>
  
          </div>
           
        </div>
      </form>
    </div>
  )

}