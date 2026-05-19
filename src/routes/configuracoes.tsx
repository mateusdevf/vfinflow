import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";

export const Route = createFileRoute("/configuracoes")({
  component: () => (
    <DashboardLayout title="Configurações" subtitle="Preferências da conta e do plano">
      <div className="rounded-lg border border-border bg-card p-10 text-center text-muted-foreground text-sm">
        Em breve.
      </div>
    </DashboardLayout>
  ),
});
