import AuthForm from "@/app/components/auth/AuthForm"
import AuthHeader from "@/app/components/auth/AuthHeader"

const page = () => {
  return (
    <div className="flex flex-col gap-[64px] md:items-center">
      <AuthHeader />
      <AuthForm type="register" />
    </div>
  )
}

export default page