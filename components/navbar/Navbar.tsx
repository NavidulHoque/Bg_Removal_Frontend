import NavbarLogo from "@/icons/NavbarLogo";
import Button from "./Button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function Navbar() {
  const user = await currentUser()
  
  return (
    <nav className="w-full flex-between py-5">
      
      <Link 
        className="cursor-pointer"
        href="/"
      >
        <NavbarLogo />
      </Link>
      
      {user ? <UserButton /> : <Button />}
      
    </nav>
  )
}
