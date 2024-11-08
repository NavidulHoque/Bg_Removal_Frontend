import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className='w-[80vw] mx-auto'>

            <Navbar />
            {children}
            <Footer />

        </main>
    )
}
