import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <span className="inline-flex items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium p-2 shadow-none">
          <Menu />
        </span>
      </SheetTrigger>
      <SheetContent className="pt-3 px-6">
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />
      </SheetContent>
    </Sheet>
  );
};