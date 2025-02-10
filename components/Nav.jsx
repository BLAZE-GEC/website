"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/About" },
  { name: "PROJECTS", path: "/Projects" },
  { name: "EVENTS", path: "/Events" },
  { name: "TEAM", path: "/Team" },
  { name: "CONTACT", path: "/Contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
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
  );
};

export default Nav;
