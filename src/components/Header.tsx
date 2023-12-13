import { auth, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import navLinks from "@/data/navLinks.json";

import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  const { userId } = auth();
  return (
    <header className="mb-8 flex items-stretch justify-between border-b border-border">
      <nav className="flex items-stretch justify-center">
        <ul className="flex items-stretch justify-center gap-8 font-medium">
          <li>
            <Link href="/" title="Home" className="header-link mb-4 h-full">
              <Logo />
            </Link>
          </li>
          {navLinks.map((navItem, i) => (
            <li key={i}>
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
          {!userId && <SignInButton redirectUrl="/log" />}
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </header>
  );
};

export default Header;
