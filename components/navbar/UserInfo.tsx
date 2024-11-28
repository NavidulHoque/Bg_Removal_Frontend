import { Session } from "next-auth"
import LogOut from "./LogOut";

import credit from "@/public/images/credit.png"
import Image from "next/image";
import Credits from "./Credits";
import CredentialUsername from "./CredentialUsername";
import Link from "next/link";

export default function UserInfo({ session }: { session: Session | null }) {

    if (!session?.user) {
        return (
            <Link
                href="/login"
                className="flex-center gap-x-2 bg-[#313131] text-20-normal-white w-[209px] h-[57px] rounded-full hover-scale"
            >
                Sign in
            </Link>
        );
    }

    const image = (session?.user?.provider !== "credentials") && (

        <Image
            src={session?.user?.image as string}
            alt="profile"
            width={35}
            height={35}
            className="rounded-full cursor-pointer"
        />
    )

    const name = (session?.user?.provider !== "credentials" ? session?.user?.name : <CredentialUsername />)

    return (
        <div className="flex-center gap-x-5">

            <div 
                className="bg-[#D7EBFF] w-[200px] h-[50px] flex-center gap-x-3 rounded-full hover-scale cursor-pointer"
            >

                <Image src={credit} alt="credit" quality={100} className="size-6" />

                <p className="text-[18px]">credits left: <Credits session={session} /></p>

            </div>

            <p className="text-[20px]">Hi! {name}</p>

            {image}

            <LogOut />

        </div>
    );
}
