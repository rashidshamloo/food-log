import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

import navLinks from "@/data/navLinks.json";

import Logo from "./Logo";

const Header = () => {
  return (
    <header className="mb-16 flex items-stretch justify-between border-b border-border">
      <nav className="flex items-stretch justify-center">
        <ul className="flex items-stretch justify-center gap-8 font-medium">
          <li>
            <Link href="/" title="Home" className="header-link mb-4">
              <Logo />
            </Link>
          </li>
          {navLinks.map((navItem, i) => (
            <li key={i}>
              <Link href={navItem.url} className="header-link">
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-link flex items-center justify-center">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};

export default Header;
