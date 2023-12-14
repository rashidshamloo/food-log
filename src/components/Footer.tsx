import Image from "next/image";
import Link from "next/link";

import authorLinks from "@/data/authorLinks.json";

import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Footer = () => {
  return (
    <footer className="flex h-8 items-center justify-center text-xs">
      <div className="flex items-center justify-center gap-1 [&_img]:hover:animate-heart-bounce">
        <span>Made with</span>
        <Image src="/heart.png" alt="heart" width="16" height="16" />
        <span>
          by{" "}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto rounded-none p-0 text-xs"
              >
                Rashid Shamloo
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-auto flex-col gap-1 p-2">
              {authorLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.url}
                  target="_blank"
                  className="header-link text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </PopoverContent>
          </Popover>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
