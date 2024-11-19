import { logout } from "@/app/(authentication)/actions";
import Form from "next/form";
import { Button } from "../ui/button";

export default function LogOut() {
  return (
    <Form action={logout}>
        <Button className="bg-blue-400 my-2 text-white p-1 rounded" type="submit">Logout</Button>
    </Form>
  )
}
