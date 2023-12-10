import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
};

export default Header;
