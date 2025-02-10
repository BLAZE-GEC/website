"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/About" },
  { name: "PROJECTS", path: "/Projects" },
  { name: "EVENTS", path: "/Events" },
  { name: "TEAM", path: "/Team" },
  { name: "CONTACT", path: "/Contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[28px] my-auto text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav className="flex flex-col justify-center text-base1 items-center gap-8 my-auto">
        {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
                link.path === pathname && "text-base1 border-b-2 border-base1"
              } capitalize font-medium hover:text-base3 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
