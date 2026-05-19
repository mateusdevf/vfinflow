import { S as reactExports, J as jsxRuntimeExports } from "./server-BaklhXN7.mjs";
import { a as useNavigate, u as useAuth, s as supabase, t as toast } from "./router-fLDTTWSU.mjs";
import { c as createLucideIcon } from "./createLucideIcon-DMnZpGcF.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
const plans = [{
  id: "starter",
  name: "Starter",
  price: "R$ 49",
  desc: "Para começar",
  features: ["1 conta bancária", "Transações ilimitadas", "Relatórios básicos"]
}, {
  id: "pro",
  name: "Pro",
  price: "R$ 129",
  desc: "Mais popular",
  features: ["Até 5 contas", "Previsões com IA", "Metas e alertas", "Exportação CSV"],
  highlight: true
}, {
  id: "business",
  name: "Business",
  price: "R$ 299",
  desc: "Para equipes",
  features: ["Contas ilimitadas", "IA avançada", "Multi-usuário", "Suporte prioritário"]
}];
function PlansPage() {
  const navigate = useNavigate();
  const {
    user,
    loading
  } = useAuth();
  const [saving, setSaving] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({
      to: "/login"
    });
  }, [user, loading, navigate]);
  const handleSelect = async (planId) => {
    if (!user) return;
    setSaving(planId);
    const {
      error
    } = await supabase.from("profiles").update({
      selected_plan: planId
    }).eq("id", user.id);
    setSaving(null);
    if (error) return toast.error(error.message);
    toast.success("Plano ativado!");
    navigate({
      to: "/"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold text-foreground", children: "Escolha seu plano" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Você pode trocar a qualquer momento. Esta é uma simulação — não há cobrança." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border bg-card p-6 flex flex-col ${p.highlight ? "border-success" : "border-border"}`, children: [
      p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-wide text-success mb-2", children: "Recomendado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: p.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: p.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-3xl font-bold text-foreground", children: [
        p.price,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "/mês" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2 text-sm text-foreground flex-1", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-success mt-0.5 shrink-0" }),
        " ",
        f
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleSelect(p.id), disabled: saving !== null, className: `mt-6 w-full rounded-md py-2 text-sm font-medium disabled:opacity-60 ${p.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border hover:bg-accent"}`, children: saving === p.id ? "Ativando..." : "Selecionar" })
    ] }, p.id)) })
  ] }) });
}
export {
  PlansPage as component
};
