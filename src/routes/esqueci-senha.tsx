import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/esqueci-senha")({ component: ForgotPage });

function ForgotPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-senha`,
    });
    setSubmitting(false);
    if (error) return toast.error(error.message);
    setSent(true);
    toast.success("Email enviado!");
  };

  return (
    <div className="min-h-screen grid place-items-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground">Recuperar senha</h1>
          <p className="text-sm text-muted-foreground mt-1">Enviaremos um link para redefinição</p>
        </div>
        {sent ? (
          <div className="rounded-md border border-border bg-card p-4 text-sm text-muted-foreground text-center">
            Verifique sua caixa de entrada em <span className="text-foreground">{email}</span>.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com"
              className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring" />
            <button disabled={submitting} className="w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-medium hover:bg-primary/90 disabled:opacity-60">
              {submitting ? "Enviando..." : "Enviar link"}
            </button>
          </form>
        )}
        <div className="text-center text-xs">
          <Link to="/login" className="text-muted-foreground hover:text-foreground">Voltar ao login</Link>
        </div>
      </div>
    </div>
  );
}
