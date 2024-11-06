import { SignUp } from "@clerk/nextjs";

export default function Registration() {
    return (
        <div className="flex-center min-h-[80vh]">

            <SignUp />

        </div>
    )
}
