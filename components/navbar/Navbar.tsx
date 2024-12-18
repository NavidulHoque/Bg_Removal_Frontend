import NavbarLogo from "@/icons/NavbarLogo";
import Link from "next/link";
import { auth } from "@/auth";

import UserInfo from "./UserInfo";

export default async function Navbar() {

  const session = await auth().catch((error: Error) => {

    throw new Error(error.message)
  })

  return (
    <nav className={`w-full flex-between ${session?.user ? "min-[900px]:flex-row" : "sm:flex-row"} flex-col gap-y-5 py-5`}>

      <Link
        className="cursor-pointer"
        href="/"
      >
        <NavbarLogo />
      </Link>

      <UserInfo session={session} />

    </nav>
  )
}
