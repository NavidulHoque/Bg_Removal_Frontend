import NavbarLogo from "@/icons/NavbarLogo";
import Link from "next/link";
import { auth } from "@/auth";
import LogOut from "./LogOut";

import credit from "@/public/images/credit.png"
import Image from "next/image";
import Credits from "./Credits";

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

      {session?.user ? (

        <div className="flex-center gap-x-5">

          <div className="bg-[#D7EBFF] w-[200px] h-[50px] flex-center gap-x-3 rounded-full hover-scale cursor-pointer">

            <Image src={credit} alt="credit" quality={100} className="size-6" />

            <p>credits left: <Credits session={session} /></p>

          </div>

          <span>Hi! {session?.user?.name}</span>

          {(session?.user?.provider !== "credentials") && (

            <Image
              src={session?.user?.image as string}
              alt="profile"
              width={35}
              height={35}
              className="rounded-full cursor-pointer"
            />
          )}

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
