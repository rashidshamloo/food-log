import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import navLinks from "@/data/navLinks.json";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="relative flex min-h-[50px] items-stretch justify-between border-b border-border px-4 md:px-0">
      <nav className="flex items-stretch justify-center">
        <h2 className="sr-only">Navigation Menu</h2>
        <ul className="flex items-stretch justify-center gap-8 font-medium">
          <li className="md:hidden">
            <MobileMenu />
          </li>
          <li className="hidden md:block">
            <Link href="/" title="Home" className="header-link h-full">
              <Logo />
            </Link>
          </li>
          {navLinks.map((navItem, i) => (
            <li key={i} className="hidden md:block">
              <Link href={navItem.url} className="header-link h-full">
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-stretch justify-center gap-3">
        <div className="header-link flex items-center justify-center transition-none">
          <ThemeSwitch />
        </div>
        <div className="header-link flex items-center justify-center">
          <SignedOut>
            <SignInButton redirectUrl="/log" />
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
