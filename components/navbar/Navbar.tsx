import NavbarLogo from "@/icons/NavbarLogo";
import Link from "next/link";
import { auth } from "@/auth";

import UserInfo from "./UserInfo";

export default async function Navbar() {

  const session = await auth()

  return (
    <nav className="w-full flex-between py-5">

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
