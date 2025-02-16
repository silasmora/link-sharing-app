import AuthForm from "@/app/components/auth/AuthForm"
import AuthHeader from "@/app/components/auth/AuthHeader"


type Props = {}

const page = (props: Props) => {
  return (
    <div className="p-8 flex flex-col gap-[64px]">
     <AuthHeader />
     <AuthForm type="login" />
    </div>
  )
}

export default page