import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Club", path: "/About" },
  { name: "Projects Gallery", path: "/Projects" },
  { name: "Photo Gallery", path: "/Gallery" },
  { name: "Upcoming Events", path: "/Events" },
  { name: "Our Team", path: "/Team" },
];

const socials = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/ideatorgect/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/ideator_gect?igsh=MWc4Z2d6cnRiZmw5Ng==",
    label: "Instagram",
  },
  {
    icon: FaGithub,
    href: "https://github.com/", // Replace with Ideator's GitHub when available
    label: "GitHub",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-bgPrimary mt-20">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand column */}
        <div>
          <div className="flex items-center gap-1 mb-4">
            <span className="font-heading text-2xl font-bold text-bgPrimary">
              IDEATOR
            </span>
            <span className="text-accent font-heading text-2xl font-bold">.</span>
          </div>
          <p className="text-bgTertiary text-sm leading-relaxed max-w-xs">
            The official Innovation &amp; Prototyping Club of Government Engineering College,
            Thrissur (GECT). Empowering minds since 2014.
          </p>
        </div>

        {/* Quick Links column */}
        <div>
          <h3 className="text-accent-light font-heading text-lg font-bold uppercase tracking-wide mb-5">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-bgSecondary text-sm hover:text-accent-light transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Find Us column */}
        <div>
          <h3 className="text-accent-light font-heading text-lg font-bold uppercase tracking-wide mb-5">
            Find Us
          </h3>
          <p className="text-bgSecondary text-sm leading-relaxed mb-4">
            Ideator Maker Lab,<br />
            Govt. Engineering College,<br />
            Ramavarmapuram, Thrissur,<br />
            Kerala, India – 680009
          </p>
          <p className="text-bgSecondary text-sm">
            Email:{" "}
            <a href="mailto:cfi.gec@gmail.com" className="hover:text-accent-light transition-colors">
              cfi.gec@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-bgPrimary/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-bgTertiary text-sm text-center sm:text-left">
            © {year} Club Ideator GECT. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-md bg-bgPrimary/10 hover:bg-accent flex items-center justify-center text-bgPrimary transition-colors"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;