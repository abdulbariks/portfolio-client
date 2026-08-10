"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Trophy,
  GraduationCap,
  FolderOpen,
  User,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type NavItem = {
  href?: string;
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
};

const navItems: NavItem[] = [
  { href: "/admin-dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin-dashboard/blogs", label: "Blogs", icon: FileText },
  { href: "/admin-dashboard/experience", label: "Experience", icon: Briefcase },
  {
    href: "/admin-dashboard/achievements",
    label: "Achievements",
    icon: Trophy,
  },
  {
    href: "/admin-dashboard/education",
    label: "Education",
    icon: GraduationCap,
  },
  { href: "/admin-dashboard/projects", label: "Projects", icon: FolderOpen },
  { href: "/admin-dashboard/about", label: "About", icon: User },
  { href: "/admin-dashboard/contract", label: "Contract", icon: Mail },
];

const bottomItems: NavItem[] = [
  { href: "/admin-dashboard/settings", label: "Setting", icon: Settings },
  { label: "Logout", icon: LogOut, onClick: () => console.log("Logout") },
];

const Sidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/admin-dashboard") {
      return pathname === "/admin-dashboard";
    }
    return pathname.startsWith(href);
  };

  const renderNavItems = (items: NavItem[]) => (
    <nav className="flex flex-col gap-1">
      {items.map((item) => {
        const Icon = item.icon;
        const active = item.href ? isActive(item.href) : false;

        if (item.onClick) {
          return (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                "justify-start gap-3 px-3",
                active && "bg-muted text-foreground",
              )}
              onClick={item.onClick}
            >
              <Icon className="size-4" />
              {item.label}
            </Button>
          );
        }

        if (!item.href) return null;

        return (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "justify-start gap-3 px-3 w-full",
                active && "bg-muted text-foreground",
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <aside
      className={cn("flex h-full w-64 flex-col border-r bg-background", className)}
    >
      <div className="p-4">
        <h2 className="font-heading text-lg font-semibold">Admin</h2>
      </div>
      <Separator />
      <div className="flex-1 overflow-y-auto p-2">
        {renderNavItems(navItems)}
      </div>
      <Separator />
      <div className="p-2">{renderNavItems(bottomItems)}</div>
    </aside>
  );
};

export default Sidebar;
