import ImageProvider from "@/context/ImageContext";
import UserCreditsProvider from "@/context/UserCreditsContext";

export default function AppProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <UserCreditsProvider>

            <ImageProvider>

                {children}

            </ImageProvider>
            
        </UserCreditsProvider>
    )
}
