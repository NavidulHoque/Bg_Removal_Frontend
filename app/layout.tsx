import { Outfit } from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
//import 'react-toastify/dist/ReactToastify.css';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: "BgRemoval",
  description: "This website removes background of an image"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">

      <ClerkProvider>

        <body
          className={`${outfit.className} bg-[#F7FBFF] text-[#353535] pb-7`}
        >
          {children}
        </body>
        
      </ClerkProvider>

    </html>
  );
}
