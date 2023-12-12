import Image from "next/image";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import authorLinks from "@/data/authorLinks.json";

import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="flex h-8 items-center justify-center text-xs">
      <div className="[&_img]:hover:animate-heart-bounce mb-[1px] flex items-center justify-center gap-1">
        <span>Made with</span>
        <Image src="/heart.png" alt="heart" width="16" height="16" />
        <span>
          by{" "}
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="-mb-[1px] h-auto rounded-none border-b border-dotted border-foreground/50 p-0 text-xs"
                >
                  Rashid Shamloo
                </Button>
              </TooltipTrigger>
              <TooltipContent className="flex flex-col gap-1">
                {authorLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.url}
                    target="_blank"
                    className="header-link"
                  >
                    {link.title}
                  </Link>
                ))}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
