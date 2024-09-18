"use client";
import Link from "next/link";

import { X } from "lucide-react";
import { navLinkData } from "@/lib/data/data";
import SocialIcons from "./social-icons";
import { kaunshan } from "@/lib/fonts";
import { Button } from "../ui/button";

const MobileNavbar = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  return (
    <div className={isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
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
            <Button variant={"outline"} onClick={toggleMenu}>
              <X size={25} />
            </Button>
          </div>
          <div className="my-4 border-b border-gray-300">
            <p className="w-[85%] md:w-[90%] py-4">{"Let's build something legendary together"}</p>
          </div>
        </div>
        <div className="flex flex-col py-4">
          <ul className="flex flex-col gap-6">
            {navLinkData.map(({ text, href }) => {
              return (
                <li key={"side-link_" + text} onClick={toggleMenu}>
                  <Link className=" hover:text-[#5651e5] transition-all duration-300" href={href}>
                    {text}
                  </Link>
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
    </div>
  );
};
export default MobileNavbar;
