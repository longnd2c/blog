"use client";

import { Toggle } from "@/components/ui/toggle";
import MoonIcon from "@/assets/icons/MoonIcon.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="font-bold">MyBlg</span>
        </Link>
        <Toggle aria-label="Toggle dark mode" className="rounded-full">
          <Image
            alt="location"
            src={MoonIcon}
            className="text-gray-500 dark:text-gray-400"
            width={20}
            height={20}
          />
        </Toggle>
      </div>
    </header>
  );
}

export default Header;
