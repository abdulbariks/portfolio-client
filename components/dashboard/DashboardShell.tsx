"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar className="hidden lg:flex" />
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <div className="flex flex-1 flex-col overflow-hidden">
          <Topbar onOpenChange={setSidebarOpen} />
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
        <SheetContent side="left" className="p-0 w-64 lg:hidden">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
