import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";

export const Route = createFileRoute("/previsao")({
  component: () => (
    <DashboardLayout title="Previsão IA" subtitle="Projeções inteligentes de receita e lucro">
      <div className="rounded-lg border border-border bg-card p-10 text-center text-muted-foreground text-sm">
        Em breve.
      </div>
    </DashboardLayout>
  ),
});
