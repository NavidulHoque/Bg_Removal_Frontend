"use client"

import useApp from "@/hooks/useApp"

export default function CredentialUsername() {

    const { values: { user } } = useApp()

    return user.username
}
