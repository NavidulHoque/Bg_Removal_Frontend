import { Session } from "next-auth"
import LogOut from "./LogOut";


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

            <Credits session={session} />

            <p className="text-[20px]">Hi! {name}</p>

            {image}

            <LogOut />

        </div>
    );
}
