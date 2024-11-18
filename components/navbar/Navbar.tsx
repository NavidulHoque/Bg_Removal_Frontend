import NavbarLogo from "@/icons/NavbarLogo";
import FormComp from "./FormComp";
import Link from "next/link";
import { auth } from "@/auth";

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
      
      {session?.user ? session?.user?.name : <FormComp />}
      
    </nav>
  )
}
