import ClientHeading from '@/components/authentication/ShowHeading';
import ProvidersForm from '@/components/authentication/ProvidersForm';
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {

  const session = await auth();

  if (session?.user) redirect("/");

  return (
    <section className='flex-center min-h-screen'>

      <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-8 flex-column gap-y-6'>

        <ClientHeading />

        <ProvidersForm />

        <p className='text-slate-500 text-[18px] text-center'>or</p>

        {/* Credentials Form */}
        {children}

      </div>

    </section>
  )
}
