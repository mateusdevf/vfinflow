import { S as reactExports, J as jsxRuntimeExports } from "./server-BaklhXN7.mjs";
import { L as Link, s as supabase, t as toast } from "./router-fLDTTWSU.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ForgotPage() {
  const [email, setEmail] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [sent, setSent] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const {
      error
    } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-senha`
    });
    setSubmitting(false);
    if (error) return toast.error(error.message);
    setSent(true);
    toast.success("Email enviado!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold text-foreground", children: "Recuperar senha" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Enviaremos um link para redefinição" })
    ] }),
    sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-border bg-card p-4 text-sm text-muted-foreground text-center", children: [
      "Verifique sua caixa de entrada em ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: email }),
      "."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "seu@email.com", className: "w-full rounded-md border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: submitting, className: "w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-medium hover:bg-primary/90 disabled:opacity-60", children: submitting ? "Enviando..." : "Enviar link" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-muted-foreground hover:text-foreground", children: "Voltar ao login" }) })
  ] }) });
}
export {
  ForgotPage as component
};
