import { UserButton } from "@clerk/nextjs";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between p-4 px-8 h-[60px]">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        RemindMe
      </h1>
      <div className="flex gap-4 items-center">
        <UserButton afterSignOutUrl="/" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
