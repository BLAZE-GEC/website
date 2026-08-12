"use client";

import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();

  // Matrix page has its own fixed-position background canvas.
  // The page-fade-in animation uses CSS transform which creates a
  // containing block that breaks position:fixed — skip it here.
  if (pathname?.toLowerCase().startsWith("/matrix")) {
    return <>{children}</>;
  }

  return <div className="page-fade-in">{children}</div>;
}