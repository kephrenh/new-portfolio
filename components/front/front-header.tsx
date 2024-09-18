"use client";
import { useEffect, useState } from "react";
import { loginLinkData, navLinkData } from "@/lib/data/data";
import { kaunshan } from "@/lib/fonts";
import Link from "next/link";
import CustomLink from "../custom-link";
import { Button } from "../ui/button";
import { MenuIcon, X } from "lucide-react";

import SocialIcons from "./social-icons";
import { useDrawer } from "@/hooks/use-drawer";
import MobileNavbar from "./mobile-navbar";

export default function FrontHeader() {
  const { isOpen, handleToggleMenu } = useDrawer();

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
              {navLinkData.map(({ text, href }) => (
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
        {/* <div className={isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
          <div
            className={
              isOpen
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
            }>
            <div>
              <div className="flex items-center justify-between wfull">
                <Link href="/">
                  <span className={`text-3xl text-[#5651e5] ${kaunshan.className}`}>MA</span>
                </Link>
                <Button variant={"outline"} onClick={handleToggleMenu}>
                  <X size={25} />
                </Button>
              </div>
              <div className="my-4 border-b border-gray-300">
                <p className="w-[85%] md:w-[90%] py-4">
                  {"Let's build something legendary together"}
                </p>
              </div>
            </div>
            <div className="flex flex-col py-4">
              <ul className="uppercase">
                {navLinkData.map(({ text, href }) => {
                  return (
                    <li
                      key={"side-link_" + text}
                      className="py-4 text-sm hover:text-[#5651e5] transition-all duration-300"
                      onClick={handleToggleMenu}>
                      <Link href={href}>{text}</Link>
                    </li>
                  );
                })}
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">{"Let's Connect"}</p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <SocialIcons padding="p-3" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <MobileNavbar isOpen={isOpen} toggleMenu={handleToggleMenu} />
        <div>
          <ul className="text-sm flex items-center gap-4">
            {loginLinkData.map(({ text, href }) => (
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
