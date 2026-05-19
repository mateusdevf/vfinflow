import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";

export const Route = createFileRoute("/metas")({
  component: () => (
    <DashboardLayout title="Metas" subtitle="Acompanhe objetivos financeiros">
      <div className="rounded-lg border border-border bg-card p-10 text-center text-muted-foreground text-sm">
        Em breve.
      </div>
    </DashboardLayout>
  ),
});
