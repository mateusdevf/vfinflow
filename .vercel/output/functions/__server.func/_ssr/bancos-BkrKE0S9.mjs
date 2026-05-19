import { J as jsxRuntimeExports } from "./server-BaklhXN7.mjs";
import { D as DashboardLayout, B as Building2 } from "./dashboard-layout-BX_Z94qx.mjs";
import { b as banks, d as formatBRL } from "./mock-data-B3m2Utwd.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-fLDTTWSU.mjs";
import "./vfinflow-logo-DcE4yvNX.mjs";
import "./createLucideIcon-DMnZpGcF.mjs";
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardLayout, { title: "Bancos", subtitle: "Contas conectadas via Open Banking", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: banks.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-card p-5", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-md bg-secondary grid place-items-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: b.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: b.account })
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-2xl font-semibold tracking-tight text-foreground", children: formatBRL(b.balance) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-success mt-1", children: "Sincronizado agora" })
] }, b.name)) }) });
export {
  SplitComponent as component
};
