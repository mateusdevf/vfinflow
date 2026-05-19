import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard-layout";
import { alerts } from "@/lib/mock-data";

export const Route = createFileRoute("/alertas")({
  component: () => (
    <DashboardLayout title="Alertas" subtitle="Notificações financeiras inteligentes">
      <ul className="space-y-3">
        {alerts.map((a, i) => (
          <li key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
            <span
              className={`mt-1 h-2 w-2 rounded-full ${
                a.level === "Alto" ? "bg-destructive" : a.level === "Médio" ? "bg-warning" : "bg-primary"
              }`}
            />
            <div>
              <div className="text-sm text-foreground">{a.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{a.level} • {a.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </DashboardLayout>
  ),
});
