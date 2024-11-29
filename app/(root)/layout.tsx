import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import AppProvider from './AppProvider'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className='lg:w-[80vw] w-[90vw] mx-auto'>

            <AppProvider>

                <Navbar />

                {children}
                
            </AppProvider>

            <Footer />

        </main>
    )
}
