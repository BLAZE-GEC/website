import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-4 md:py-5 bg-bgPrimary/95 backdrop-blur-sm sticky top-0 z-50 border-b border-primary/10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2">
<Image
  src="/assests/ideator_plane.png"
  alt=""
  width={60}
  height={60}
  priority
  className="h-14 md:h-16 w-auto object-contain"
/>
            {/* Wordmark — original file is white, forced to solid black
                with a CSS filter so it's visible on the cream header. */}
            <Image
              src="/assests/ideator.png"
              alt="IDEATOR"
              width={140}
              height={46}
              priority
              className="h-7 md:h-8 w-auto object-contain"
              style={{ filter: "brightness(0)" }}
            />
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

<div className="hidden xl:block">
  <a
    href="https://chat.whatsapp.com/I2rhnqfn3W26f3y0CMqY4a"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-accent hover:bg-accent-hover text-white font-semibold text-sm tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
  >
    JOIN OUR COMMUNITY
  </a>
</div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;