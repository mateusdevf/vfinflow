import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";

export const Route = createFileRoute("/fluxo-de-caixa")({
  component: () => (
    <DashboardLayout title="Fluxo de caixa" subtitle="Entradas e saídas consolidadas">
      <div className="rounded-lg border border-border bg-card p-10 text-center text-muted-foreground text-sm">
        Em breve.
      </div>
    </DashboardLayout>
  ),
});
