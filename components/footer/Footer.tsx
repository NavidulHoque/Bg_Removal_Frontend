import NavbarLogo from "@/icons/NavbarLogo";

export default function Footer() {
  return (
    <footer className="flex-center sm:flex-row flex-col gap-5">

      <NavbarLogo />

      <div className="w-[2px] h-[35px] bg-[#9D9D9D] sm:block hidden" />

      <p className="text-[18px] text-[#797484] text-center">All right reserved. Copyright @bg removal</p>
      
    </footer>
  )
}
