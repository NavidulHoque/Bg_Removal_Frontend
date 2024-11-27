import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className='w-[80vw] mx-auto'>

            <Navbar />

            {children}

            <Footer />

        </main>
    )
}
