import { S as reactExports, J as jsxRuntimeExports } from "./server-BaklhXN7.mjs";
import { l as logo } from "./vfinflow-logo-DcE4yvNX.mjs";
import { a as useNavigate, u as useAuth, L as Link, s as supabase, t as toast } from "./router-fLDTTWSU.mjs";
import { l as lovable } from "./index-Co68JDQ_.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function LoginPage() {
  const navigate = useNavigate();
  const {
    user,
    loading
  } = useAuth();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!loading && user) navigate({
      to: "/"
    });
  }, [user, loading, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const {
      error
    } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    setSubmitting(false);
    if (error) return toast.error(error.message);
    toast.success("Bem-vindo de volta!");
    navigate({
      to: "/"
    });
  };
  const handleGoogle = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin
    });
    if (result.error) toast.error("Erro ao entrar com Google");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "px-6 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "inline-flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "VFinFlow", className: "h-9 w-auto object-contain rounded-md" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 grid place-items-center px-4 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold text-foreground", children: "Entrar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Acesse sua gestão financeira" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "seu@email.com", className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-foreground", children: "Senha" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/esqueci-senha", className: "text-xs text-muted-foreground hover:text-foreground", children: "Esqueci minha senha" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "••••••••", className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: submitting, className: "w-full rounded-md bg-primary text-primary-foreground py-2.5 text-sm font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors", children: submitting ? "Entrando..." : "Entrar" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative my-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t border-border" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-card px-2 text-xs text-muted-foreground", children: "ou" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleGoogle, className: "w-full rounded-md border border-border bg-background py-2.5 text-sm font-medium hover:bg-accent transition-colors", children: "Continuar com Google" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground mt-5", children: [
        "Não tem conta? ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cadastro", className: "text-primary font-medium hover:underline", children: "Criar conta" })
      ] })
    ] }) })
  ] });
}
export {
  LoginPage as component
};
