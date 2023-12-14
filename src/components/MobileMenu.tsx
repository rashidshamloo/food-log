"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

import navLinks from "@/data/navLinks.json";

import Logo from "./Logo";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const MobileMenu = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={null} className="p-0">
            <Menu className="border-none" size={32} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="mt-8">
            <SheetTitle>
              <Link href="/" title="Home" className="header-link h-full">
                <Logo />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col items-center justify-center gap-6 py-6">
            {navLinks.map((navItem, i) => (
              <li key={i}>
                <SheetClose asChild>
                  <Link href={navItem.url} className="header-link h-full">
                    {navItem.title}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
