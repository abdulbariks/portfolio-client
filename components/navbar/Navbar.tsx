import { Button } from "@/components/ui/button";
import { GithubLogo, LinkedInLogo, XLogo } from "../icons/Icons";
import Link from "next/link";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { NavigationSheet } from "./NavigationSheet";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-3xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <Link
            href="https://www.linkedin.com/in/abdul-barik1997"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full shadow-none"
              size="icon"
            >
              <LinkedInLogo />
            </Button>
          </Link>
          <Link
            href="https://x.com/your-x-account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full shadow-none"
              size="icon"
            >
              <XLogo />
            </Button>
          </Link>
          <Link
            href="https://github.com/abdulbariks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              size="icon"
            >
              <GithubLogo className="h-5! w-5!" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
