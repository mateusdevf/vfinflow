import { J as jsxRuntimeExports } from "./server-BaklhXN7.mjs";
import { D as DashboardLayout } from "./dashboard-layout-BX_Z94qx.mjs";
import { a as alerts } from "./mock-data-B3m2Utwd.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-fLDTTWSU.mjs";
import "./vfinflow-logo-DcE4yvNX.mjs";
import "./createLucideIcon-DMnZpGcF.mjs";
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Alertas", subtitle: "Notificações financeiras inteligentes", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: alerts.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-lg border border-border bg-card p-4", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-1 h-2 w-2 rounded-full ${a.level === "Alto" ? "bg-destructive" : a.level === "Médio" ? "bg-warning" : "bg-primary"}` }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground", children: a.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
      a.level,
      " • ",
      a.time
    ] })
  ] })
] }, i)) }) });
export {
  SplitComponent as component
};
