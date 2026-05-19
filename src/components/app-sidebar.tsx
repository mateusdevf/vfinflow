import logo from "@/assets/vfinflow-logo.jpeg";
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  TrendingUp,
  Target,
  FileText,
  Building2,
  Bell,
  Settings,
  X,
} from "lucide-react";

export const nav = [
  { title: "Visão geral", url: "/", icon: LayoutDashboard },
  { title: "Transações", url: "/transacoes", icon: ArrowLeftRight },
  { title: "Fluxo de caixa", url: "/fluxo-de-caixa", icon: Wallet },
  { title: "Previsão IA", url: "/previsao", icon: TrendingUp },
  { title: "Metas", url: "/metas", icon: Target },
  { title: "Relatórios", url: "/relatorios", icon: FileText },
  { title: "Bancos", url: "/bancos", icon: Building2 },
  { title: "Alertas", url: "/alertas", icon: Bell },
] as const;

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto">
      {nav.map((item) => {
        const active = path === item.url;
        return (
          <Link
            key={item.url}
            to={item.url}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
              active
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
            }`}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarBrand() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={logo} alt="VFinFlow" className="h-10 w-auto object-contain rounded-md" />
      <div className="leading-tight">
        <div className="text-[11px] text-sidebar-foreground/60">Gestão financeira</div>
      </div>
    </Link>
  );
}

function SidebarFooter({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="px-2 py-3 border-t border-sidebar-border">
      <Link
        to="/configuracoes"
        onClick={onNavigate}
        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground/75 hover:bg-sidebar-accent/60"
      >
        <Settings className="h-4 w-4" />
        <span>Configurações</span>
      </Link>
      <div className="mt-3 mx-1 rounded-md bg-sidebar-accent/60 p-3">
        <div className="text-xs font-medium">UniCEPLAC Ltda.</div>
        <div className="text-[11px] text-sidebar-foreground/60">Plano Premium</div>
      </div>
    </div>
  );
}

export function AppSidebar() {
  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="px-5 py-5 border-b border-sidebar-border">
        <SidebarBrand />
      </div>
      <NavList />
      <SidebarFooter />
    </aside>
  );
}

export function MobileSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="md:hidden fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <aside className="relative flex w-64 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border animate-in slide-in-from-left">
        <div className="px-5 py-5 border-b border-sidebar-border flex items-center justify-between">
          <SidebarBrand />
          <button
            onClick={onClose}
            className="h-8 w-8 grid place-items-center rounded-md hover:bg-sidebar-accent/60"
            aria-label="Fechar menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <NavList onNavigate={onClose} />
        <SidebarFooter onNavigate={onClose} />
      </aside>
    </div>
  );
}

export function useMobileSidebar() {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}
