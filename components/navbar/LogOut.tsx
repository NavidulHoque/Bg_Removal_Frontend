"use client"

import { logout } from "@/app/(authentication)/actions";
import { Button } from "../ui/button";
import { useState } from "react";

export default function LogOut() {

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {

    event.preventDefault();

    setLoading(true);

    await logout();

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>

      <Button 
        className="bg-blue-400 disabled:bg-blue-300 text-[20px] my-2 text-white py-1 px-2 rounded" 
        type="submit"
        disabled={loading}
      >
        {loading ? "Logging out..." : "Logout"}

      </Button>

    </form>
  )
}
