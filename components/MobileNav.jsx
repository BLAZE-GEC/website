"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/About" },
  { name: "PROJECTS", path: "/Projects" },
  { name: "GALLERY", path: "/Gallery" },
  { name: "EVENTS", path: "/Events" },
  { name: "TEAM", path: "/Team" },
  { name: "CONTACT", path: "/Contact" },
  { name: "ALUMNI", path: "/Alumni" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[28px] my-auto text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-bgPrimary border-l border-primary/10">
        <nav className="flex flex-col justify-center items-center gap-7 my-auto">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <Link
                href={link.path}
                key={index}
                className={`capitalize text-lg font-bold pb-1 border-b-2 transition-all ${
                  isActive
                    ? "text-accent border-accent"
                    : "text-primary border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/Contact?type=apply"
            className="mt-4 bg-accent hover:bg-accent-hover text-white text-sm font-semibold tracking-wide px-6 py-3 rounded-full transition-colors"
          >
            JOIN OUR COMMUNITY
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;