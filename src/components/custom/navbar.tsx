"use client";

import React from "react";
import { IconBrightness } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const { setTheme } = useTheme();

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
      <IconBrightness
        onClick={handleClick}
        className="w-4 h-4 cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
