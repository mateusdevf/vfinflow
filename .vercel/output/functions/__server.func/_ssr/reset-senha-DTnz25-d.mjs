import { S as reactExports, J as jsxRuntimeExports } from "./server-BaklhXN7.mjs";
import { a as useNavigate, s as supabase, t as toast } from "./router-fLDTTWSU.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ResetPage() {
  const navigate = useNavigate();
  const [password, setPassword] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const {
      error
    } = await supabase.auth.updateUser({
      password
    });
    setSubmitting(false);
    if (error) return toast.error(error.message);
    toast.success("Senha atualizada!");
    navigate({
      to: "/"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold text-foreground", children: "Nova senha" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Defina uma nova senha para sua conta" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, minLength: 6, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Nova senha", className: "w-full rounded-md border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: submitting, className: "w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-medium hover:bg-primary/90 disabled:opacity-60", children: submitting ? "Salvando..." : "Salvar nova senha" })
    ] })
  ] }) });
}
export {
  ResetPage as component
};
