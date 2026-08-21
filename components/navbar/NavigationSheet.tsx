"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import Link from "next/link";
import { useState } from "react";

const mobileLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#projects", label: "Projects" },
];

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <span className="inline-flex items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium p-2 shadow-none">
          <Menu />
        </span>
      </SheetTrigger>
      <SheetContent className="pt-3 px-6 flex flex-col">
        <Logo />
        <nav className="mt-12 flex flex-col items-start gap-4">
          {mobileLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
