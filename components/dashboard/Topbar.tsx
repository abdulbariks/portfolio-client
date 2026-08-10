"use client";

import { Menu } from "lucide-react";
import { Logo } from "@/components/navbar/Logo";
import { Button } from "@/components/ui/button";

const Topbar = ({
  onOpenChange,
}: {
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b bg-background/80 px-4 backdrop-blur-xs py-5">
      <Button
        variant="ghost"
        size="icon-sm"
        className="lg:hidden"
        onClick={() => onOpenChange(true)}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </Button>
      <div className="hidden lg:block" />
      <Logo className="h-8 w-auto" />
    </header>
  );
};

export default Topbar;
