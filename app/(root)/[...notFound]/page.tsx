import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='h-[82vh] flex-center flex-col gap-y-3 text-[20px]'>

      <h1 className="text-3xl">404: Not Found</h1>

      <p>Could not find requested resource</p>

      <Link href="/" className='bg-black hover:bg-[rgba(50,50,50)] text-white px-4 py-2 rounded-md'>Return Home</Link>

    </div>
  )
}
