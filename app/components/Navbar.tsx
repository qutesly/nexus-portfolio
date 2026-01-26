import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { TextAlignJustify } from "lucide-react";
import Links from "../data/constant";

const Navbar = () => {
  return (
    <>
      <div className="hidden xl:flex items-center justify-between  px-4 py-2 w-max text-sm fixed border border-white bg-black/80 shadow-md rounded-full gap-15 cursor-pointer z-500">
        {Links.map((link) => (
          <Link
            href={link.url}
            key={link.id}
            className="text-white hover:text-[#BBFF7F] transition-all duration-300 cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex xl:hidden fixed right-4 top-4 z-500">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <TextAlignJustify />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-screen h-[50dvh]">
            <DropdownMenuSeparator />
            {Links.map((link) => (
              <DropdownMenuItem
                key={link.id}
                className="flex items-center justify-center p-8 cursor-pointer "
              >
                <Link
                  href={link.url}
                  className="text-white hover:text-[#BBFF7F] transition-all duration-300"
                >
                  {link.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Navbar;
