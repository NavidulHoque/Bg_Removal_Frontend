import UploadImage from "./UploadImage";
import { Session } from "next-auth";

export default function TryNow({session}: {session: Session | null}) {
  return (
    <div className="flex-column gap-y-10 pt-20 pb-40">

      <h1 className="title">See the magic. Try now</h1>

      <div className="self-center">

        <UploadImage session={session} />

      </div>

    </div>
  )
}
