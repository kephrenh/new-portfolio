"use client";

import data from "@/lib/data/data";
import { kaunshan } from "@/lib/fonts";
import Link from "next/link";
import CustomLink from "../custom-link";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

import { useDrawer } from "@/hooks/use-drawer";
import MobileNavbar from "./mobile-navbar";

export default function FrontHeader() {
  const { isOpen, handleToggleMenu } = useDrawer();

  const { menu, login } = data;

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <div>
            <Link href="/">
              <span className={`text-lg text-[#5651e5] tracking-widest ${kaunshan.className}`}>
                MA
              </span>
            </Link>
          </div>
          <div>
            <ul className="hidden sm:flex gap-4 text-sm">
              {menu.map(({ text, href }) => (
                <li key={text}>
                  <Link key={text} href={href}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <Button onClick={handleToggleMenu} className="sm:hidden" variant="outline">
              <MenuIcon size={20} />
            </Button>
          </div>
        </div>

        <MobileNavbar isOpen={isOpen} toggleMenu={handleToggleMenu} />
        <div>
          <ul className="text-sm flex items-center gap-4">
            {login.map(({ text, href }) => (
              <li key={text}>
                <CustomLink text={text} href={href} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
