import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { banks, formatBRL } from "@/lib/mock-data";
import { Building2 } from "lucide-react";

export const Route = createFileRoute("/bancos")({
  component: () => (
    <DashboardLayout title="Bancos" subtitle="Contas conectadas via Open Banking">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {banks.map((b) => (
          <div key={b.name} className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-secondary grid place-items-center text-primary">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{b.name}</div>
                <div className="text-xs text-muted-foreground">{b.account}</div>
              </div>
            </div>
            <div className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              {formatBRL(b.balance)}
            </div>
            <div className="text-xs text-success mt-1">Sincronizado agora</div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  ),
});
