import logo from "@/assets/vfinflow-logo.jpeg";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { toast } from "sonner";

export const Route = createFileRoute("/cadastro")({ component: SignupPage });

function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
        emailRedirectTo: window.location.origin,
      },
    });
    setSubmitting(false);
    if (error) return toast.error(error.message);
    toast.success("Conta criada!");
    navigate({ to: "/selecionar-plano" });
  };

  const handleGoogle = async () => {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/selecionar-plano" });
    if (result.error) toast.error("Erro ao entrar com Google");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-6 py-5">
        <Link to="/login" className="inline-flex items-center">
          <img src={logo} alt="VFinFlow" className="h-9 w-auto object-contain rounded-md" />
        </Link>
      </header>

      <main className="flex-1 grid place-items-center px-4 pb-12">
        <div className="w-full max-w-sm">
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-foreground">Criar conta</h1>
              <p className="text-sm text-muted-foreground mt-1">Comece a controlar suas finanças</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Nome</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground">Senha</label>
                <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button disabled={submitting} className="w-full rounded-md bg-primary text-primary-foreground py-2.5 text-sm font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors">
                {submitting ? "Criando..." : "Criar conta"}
              </button>
            </form>

            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center"><span className="bg-card px-2 text-xs text-muted-foreground">ou</span></div>
            </div>

            <button onClick={handleGoogle} className="w-full rounded-md border border-border bg-background py-2.5 text-sm font-medium hover:bg-accent transition-colors">
              Continuar com Google
            </button>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-5">
            Já tem conta? <Link to="/login" className="text-primary font-medium hover:underline">Entrar</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
