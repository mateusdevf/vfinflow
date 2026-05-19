import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";

export const Route = createFileRoute("/selecionar-plano")({ component: PlansPage });

const plans = [
  { id: "starter", name: "Starter", price: "R$ 49", desc: "Para começar", features: ["1 conta bancária", "Transações ilimitadas", "Relatórios básicos"] },
  { id: "pro", name: "Pro", price: "R$ 129", desc: "Mais popular", features: ["Até 5 contas", "Previsões com IA", "Metas e alertas", "Exportação CSV"], highlight: true },
  { id: "business", name: "Business", price: "R$ 299", desc: "Para equipes", features: ["Contas ilimitadas", "IA avançada", "Multi-usuário", "Suporte prioritário"] },
];

function PlansPage() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [user, loading, navigate]);

  const handleSelect = async (planId: string) => {
    if (!user) return;
    setSaving(planId);
    const { error } = await supabase.from("profiles").update({ selected_plan: planId }).eq("id", user.id);
    setSaving(null);
    if (error) return toast.error(error.message);
    toast.success("Plano ativado!");
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-foreground">Escolha seu plano</h1>
          <p className="text-sm text-muted-foreground mt-2">Você pode trocar a qualquer momento. Esta é uma simulação — não há cobrança.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div key={p.id} className={`rounded-lg border bg-card p-6 flex flex-col ${p.highlight ? "border-success" : "border-border"}`}>
              {p.highlight && <span className="text-[11px] uppercase tracking-wide text-success mb-2">Recomendado</span>}
              <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
              <div className="mt-4 text-3xl font-bold text-foreground">{p.price}<span className="text-sm font-normal text-muted-foreground">/mês</span></div>
              <ul className="mt-5 space-y-2 text-sm text-foreground flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSelect(p.id)}
                disabled={saving !== null}
                className={`mt-6 w-full rounded-md py-2 text-sm font-medium disabled:opacity-60 ${
                  p.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border hover:bg-accent"
                }`}
              >
                {saving === p.id ? "Ativando..." : "Selecionar"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
