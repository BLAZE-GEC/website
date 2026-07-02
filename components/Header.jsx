import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-4 md:py-6 text-primary bg-[#f5f5f5]">
      <div className="container  mx-auto flex justify-between items-center">
        <Link href="/">
  <div className="flex items-center">
    <Image
      src="/assests/idtr_logo_nw.png"
      alt="IDEATOR"
      width={220}
      height={60}
      priority
      className="h-auto w-auto"
    />
  </div>
</Link>

        <div className="hidden xl:flex">
          <Nav />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
