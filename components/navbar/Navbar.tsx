import NavbarLogo from "@/icons/NavbarLogo";
import Link from "next/link";
import { auth } from "@/auth";
import LogOut from "./LogOut";

export default async function Navbar() {

  const session = await auth()

  console.log(session)
  
  return (
    <nav className="w-full flex-between py-5">
      
      <Link 
        className="cursor-pointer"
        href="/"
      >
        <NavbarLogo />
      </Link>
      
      {session?.user ? (

        <div>
          <span>{session?.user?.name}</span>
          <LogOut />
        </div>

      ) : (

        <Link 
          href="/login"
          className="flex-center gap-x-2 bg-[#313131] text-20-normal-white w-[209px] h-[57px] rounded-full hover-scale"
        >
          Sign in
        </Link>
      )}
      
    </nav>
  )
}
