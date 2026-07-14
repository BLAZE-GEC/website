"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Matches the target design's exact nav set and order.
// SRISHTI and ALUMNI pages still exist in the project (still reachable
// by URL) — they're just not in the main visible menu anymore, matching
// the target design exactly.
const links = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/About" },
  { name: "PROJECTS", path: "/Projects" },
  { name: "GALLERY", path: "/Gallery" },
  { name: "EVENTS", path: "/Events" },
  { name: "TEAM", path: "/Team" },
  { name: "CONTACT", path: "/Contact" },
  { name: "ALUMINI", path: "/Alumni" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-7">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize text-sm font-bold pb-1 border-b-2 transition-all ${
              isActive
                ? "text-accent border-accent"
                : "text-primary border-transparent hover:text-accent hover:border-accent/50"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;