import { Outfit } from 'next/font/google';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const outfit = Outfit({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "BgRemoval",
  description: "This web application removes background of an image"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">

      <body
        className={`${outfit.className} bg-[#F7FBFF] text-[#353535] pb-7`}
      >
        <Toaster />
        {children}
      </body>

    </html>
  );
}
