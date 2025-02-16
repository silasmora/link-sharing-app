import AuthForm from "@/app/components/auth/AuthForm"
import AuthHeader from "@/app/components/auth/AuthHeader"

const page = () => {
  return (
    <div className="flex flex-col gap-[64px]">
     <AuthHeader />
     <AuthForm type="login" />
    </div>
  )
}

export default page