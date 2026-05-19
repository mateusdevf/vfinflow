import { Bell, LogOut, Menu, Search } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";

export function DashboardHeader({
  title,
  subtitle,
  onMenuClick,
}: {
  title: string;
  subtitle?: string;
  onMenuClick?: () => void;
}) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const initials = (user?.user_metadata?.full_name || user?.email || "U")
    .split(" ").map((s: string) => s[0]).join("").slice(0, 2).toUpperCase();

  const handleLogout = async () => {
    await signOut();
    toast.success("Você saiu");
    navigate({ to: "/login" });
  };

  return (
    <header className="flex items-center justify-between gap-3 border-b border-border bg-background px-4 md:px-6 py-4">
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onMenuClick}
          className="md:hidden h-9 w-9 grid place-items-center rounded-md border border-border bg-card hover:bg-accent shrink-0"
          aria-label="Abrir menu"
        >
          <Menu className="h-4 w-4" />
        </button>
        <div className="min-w-0">
          <h1 className="text-lg md:text-xl font-semibold tracking-tight text-foreground truncate">{title}</h1>
          {subtitle && <p className="text-xs md:text-sm text-muted-foreground mt-0.5 truncate">{subtitle}</p>}
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        <div className="hidden lg:flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground w-64">
          <Search className="h-4 w-4" />
          <input
            placeholder="Buscar transações..."
            className="bg-transparent outline-none flex-1 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <button className="relative h-9 w-9 grid place-items-center rounded-md border border-border bg-card hover:bg-accent">
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-destructive" />
        </button>
        <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-medium" title={user?.email ?? ""}>
          {initials}
        </div>
        <button
          onClick={handleLogout}
          className="h-9 px-3 grid place-items-center rounded-md border border-border bg-card hover:bg-accent text-sm gap-2 inline-flex"
          aria-label="Sair"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Sair</span>
        </button>
      </div>
    </header>
  );
}
