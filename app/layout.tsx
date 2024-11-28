import { Outfit } from 'next/font/google';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import AppProvider from './AppProvider'; 

const outfit = Outfit({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "BgRemoval",
  description: "This website removes background of an image"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">

      <body
        className={`${outfit.className} bg-[#F7FBFF] text-[#353535] pb-7`}
      >
        <Toaster />
        <AppProvider>
          {children}
        </AppProvider>
      </body>

    </html>
  );
}
