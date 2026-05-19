import { createFileRoute } from "@tanstack/react-router";
import {
  Wallet,
  TrendingUp,
  Percent,
  AlertTriangle,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DashboardLayout } from "@/components/dashboard-layout";
import { StatCard } from "@/components/stat-card";
import {
  alerts,
  cashFlow,
  expensesByCategory,
  forecast,
  formatBRL,
  goals,
  kpis,
  transactions,
} from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  component: DashboardPage,
});

const chartColors = ["#1e2a4a", "#2f9e6b", "#5b6b8c", "#c89b3c", "#b94a3b"];

function DashboardPage() {
  const combined = [
    ...cashFlow.map((d) => ({ month: d.month, real: d.receita - d.despesa, previsto: null as number | null })),
    ...forecast.map((d) => ({ month: d.month, real: null as number | null, previsto: d.previsto - 45000 })),
  ];

  return (
    <DashboardLayout title="Visão geral" subtitle="Resumo financeiro de UniCEPLAC Ltda. — Maio 2026">
      {/* KPIs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          label="Saldo atual"
          value={formatBRL(kpis.saldoAtual)}
          delta="+4,2%"
          trend="up"
          hint="vs. mês anterior"
          icon={Wallet}
        />
        <StatCard
          label="Lucro mensal"
          value={formatBRL(kpis.lucroMensal)}
          delta="+8,4%"
          trend="up"
          hint="margem 31%"
          icon={TrendingUp}
        />
        <StatCard
          label="Crescimento"
          value={`${(kpis.crescimento * 100).toFixed(1)}%`}
          delta="MoM"
          trend="up"
          hint="receita recorrente"
          icon={Percent}
        />
        <StatCard
          label="Inadimplência"
          value={`${(kpis.inadimplencia * 100).toFixed(1)}%`}
          delta="-0,6 p.p."
          trend="down"
          hint="dentro da meta"
          icon={AlertTriangle}
        />
      </section>

      {/* Charts row */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Receita vs Despesas</h3>
              <p className="text-xs text-muted-foreground">Últimos 9 meses</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" /> Receita
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-success" /> Despesa
              </span>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cashFlow} barCategoryGap="25%">
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(v: number) => formatBRL(v)}
                />
                <Bar dataKey="receita" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="despesa" fill="var(--success)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Gastos por categoria</h3>
              <p className="text-xs text-muted-foreground">Maio 2026</p>
            </div>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expensesByCategory} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} stroke="var(--card)" strokeWidth={2}>
                  {expensesByCategory.map((_, i) => (
                    <Cell key={i} fill={chartColors[i % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(v: number) => formatBRL(v)}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-3 space-y-1.5">
            {expensesByCategory.map((c, i) => (
              <li key={c.name} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-2 w-2 rounded-full" style={{ background: chartColors[i] }} />
                  {c.name}
                </span>
                <span className="font-medium text-foreground">{formatBRL(c.value)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Forecast + alerts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-success" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">Previsão de lucro — IA</h3>
                <p className="text-xs text-muted-foreground">Projeção dos próximos 3 meses</p>
              </div>
            </div>
            <span className="text-[11px] rounded-full bg-secondary text-secondary-foreground px-2 py-1">
              Confiança 92%
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={combined}>
                <defs>
                  <linearGradient id="realFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="prevFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--success)" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="var(--success)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
                <Tooltip
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(v: number) => formatBRL(v)}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area type="monotone" dataKey="real" name="Lucro real" stroke="var(--primary)" strokeWidth={2} fill="url(#realFill)" />
                <Area type="monotone" dataKey="previsto" name="Previsto (IA)" stroke="var(--success)" strokeWidth={2} strokeDasharray="5 4" fill="url(#prevFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground">Alertas financeiros</h3>
            <button className="text-xs text-muted-foreground hover:text-foreground">Ver tudo</button>
          </div>
          <ul className="space-y-3">
            {alerts.map((a, i) => (
              <li key={i} className="flex items-start gap-3 rounded-md border border-border p-3">
                <span
                  className={`mt-0.5 h-2 w-2 rounded-full ${
                    a.level === "Alto"
                      ? "bg-destructive"
                      : a.level === "Médio"
                        ? "bg-warning"
                        : "bg-primary"
                  }`}
                />
                <div className="flex-1">
                  <div className="text-sm text-foreground">{a.title}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    {a.level} • {a.time}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t border-border">
            <h4 className="text-sm font-semibold text-foreground mb-3">Metas financeiras</h4>
            <ul className="space-y-3">
              {goals.map((g) => {
                const pct = Math.round((g.current / g.target) * 100);
                return (
                  <li key={g.title}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-foreground">{g.title}</span>
                      <span className="text-muted-foreground">{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full bg-success"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-1">
                      {formatBRL(g.current)} de {formatBRL(g.target)}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Transactions */}
      <section className="rounded-lg border border-border bg-card">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Últimas transações</h3>
            <p className="text-xs text-muted-foreground">Sincronizado via Open Banking</p>
          </div>
          <button className="text-xs px-3 py-1.5 rounded-md border border-border hover:bg-accent">
            Exportar CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs text-muted-foreground bg-secondary/50">
              <tr>
                <th className="text-left font-medium px-5 py-2.5">Descrição</th>
                <th className="text-left font-medium px-5 py-2.5">Categoria</th>
                <th className="text-left font-medium px-5 py-2.5">Data</th>
                <th className="text-left font-medium px-5 py-2.5">Status</th>
                <th className="text-right font-medium px-5 py-2.5">Valor</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-t border-border hover:bg-accent/40">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-7 w-7 rounded-md grid place-items-center ${
                          t.type === "in"
                            ? "bg-success/10 text-success"
                            : "bg-destructive/10 text-destructive"
                        }`}
                      >
                        {t.type === "in" ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                      </span>
                      <div>
                        <div className="text-foreground">{t.desc}</div>
                        <div className="text-[11px] text-muted-foreground">{t.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{t.cat}</td>
                  <td className="px-5 py-3 text-muted-foreground">{t.date}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`text-[11px] px-2 py-1 rounded-full ${
                        t.status === "Concluído"
                          ? "bg-success/10 text-success"
                          : "bg-warning/15 text-warning-foreground"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td
                    className={`px-5 py-3 text-right font-medium ${
                      t.value > 0 ? "text-success" : "text-foreground"
                    }`}
                  >
                    {formatBRL(t.value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
}
