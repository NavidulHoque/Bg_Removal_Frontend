import UserCreditsProvider from "@/context/UserCreditsContext";

export default function AppProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <UserCreditsProvider>
        { children }
    </UserCreditsProvider>
  )
}
