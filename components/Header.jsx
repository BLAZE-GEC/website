import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 md:py-6 text-primary bg-[#f5f5f5]">
      <div className="container  mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex">
            <h1 className="lg:text-3xl text-xl font-semibold">IDEATOR.</h1>


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
