import { signIn } from "@/auth"
import RightArrow from "@/icons/RightArrow"
import Form from 'next/form'

export default function FormComp() {

    async function logIn() {
        "use server"

        await signIn("google")
    }

    return (
        <Form action={logIn}>
            <button
                className="flex-center gap-x-2 bg-[#313131] text-20-normal-white w-[209px] h-[57px] rounded-full hover-scale"
                type="submit"
            >
                Sign In <RightArrow />
            </button>
        </Form>

    )
}
