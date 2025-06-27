"use client";

import React from "react";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrightness,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { setTheme } = useTheme();
  const pathName = usePathname();

  const handleClick = () => {
    setTheme((pre) => (pre === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className="w-full h-14 flex items-center justify-between px-6
       max-w-4xl"
    >
      <Link href={"/"} className="text-sm font-bold">
        picode
      </Link>
      <div className="flex gap-3">
        <Link target="blank" href={"https://x.com/soumendotcom"}>
          <IconBrandTwitter className="w-4.5 h-4.5 cursor-pointer" />
        </Link>
        <Link target="blank" href={"https://github.com/TheSoumenMondal"}>
          <IconBrandGithub className="w-4.5 h-4.5 cursor-pointer" />
        </Link>
        {pathName !== "/" && (
          <IconBrightness
            onClick={handleClick}
            className="w-4.5 h-4.5 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
