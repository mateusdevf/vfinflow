import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AppSidebar, MobileSidebar } from "./app-sidebar";
import { DashboardHeader } from "./dashboard-header";
import { useAuth } from "@/hooks/use-auth";

export function DashboardLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  if (loading || !user) {
    return <div className="min-h-screen grid place-items-center text-sm text-muted-foreground">Carregando...</div>;
  }

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader title={title} subtitle={subtitle} onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6">{children}</main>
      </div>
    </div>
  );
}
