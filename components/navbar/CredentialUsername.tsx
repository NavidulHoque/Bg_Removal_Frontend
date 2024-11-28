"use client"

import useUserCredits from "@/hooks/useUserCredits"

export default function CredentialUsername() {

    const { values: { user } } = useUserCredits()

    return user.username
}
