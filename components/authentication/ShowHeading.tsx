"use client"

import { usePathname } from 'next/navigation';
import Heading from './Heading';

export default function ClientHeading() {
    const pathname = usePathname();
    return (

        pathname === "/registration" ? (
            <Heading title="Create your account" description="Please fill in the details to get started." />
        ) : (
            <Heading title="Sign in to Bg Removal" description="Welcome back! Please sign in to continue" />
        )

    )
}
