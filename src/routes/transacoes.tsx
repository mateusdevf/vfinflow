import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";

export const Route = createFileRoute("/transacoes")({
  component: () => (
    <DashboardLayout title="Transações" subtitle="Histórico completo de movimentações">
      <div className="rounded-lg border border-border bg-card p-10 text-center text-muted-foreground text-sm">
        Em breve — visualização completa de transações.
      </div>
    </DashboardLayout>
  ),
});
