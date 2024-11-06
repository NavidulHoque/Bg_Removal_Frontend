import { SignIn } from "@clerk/nextjs";

export default function LogIn() {
  return (
    <div className="flex-center min-h-[80vh]">

        <SignIn />
      
    </div>
  )
}
