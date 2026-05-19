export const cashFlow = [
  { month: "Jan", receita: 42000, despesa: 31000 },
  { month: "Fev", receita: 45000, despesa: 33000 },
  { month: "Mar", receita: 48500, despesa: 30500 },
  { month: "Abr", receita: 51000, despesa: 36000 },
  { month: "Mai", receita: 55200, despesa: 38400 },
  { month: "Jun", receita: 58900, despesa: 39200 },
  { month: "Jul", receita: 62100, despesa: 41800 },
  { month: "Ago", receita: 64800, despesa: 43200 },
  { month: "Set", receita: 68300, despesa: 44100 },
];

export const forecast = [
  { month: "Out", real: null, previsto: 71500 },
  { month: "Nov", real: null, previsto: 74200 },
  { month: "Dez", real: null, previsto: 78900 },
];

export const expensesByCategory = [
  { name: "Folha de pagamento", value: 18400 },
  { name: "Fornecedores", value: 9800 },
  { name: "Marketing", value: 5200 },
  { name: "Infraestrutura", value: 4100 },
  { name: "Impostos", value: 6600 },
];

export const transactions = [
  { id: "TX-2049", desc: "Pagamento — Cliente Atlas Ltda.", cat: "Receita", value: 12400, date: "12 Mai", status: "Concluído", type: "in" as const },
  { id: "TX-2048", desc: "Fornecedor — Norte Insumos", cat: "Despesa", value: -3450, date: "12 Mai", status: "Concluído", type: "out" as const },
  { id: "TX-2047", desc: "Assinatura — Software CRM", cat: "Despesa", value: -890, date: "11 Mai", status: "Concluído", type: "out" as const },
  { id: "TX-2046", desc: "Pagamento — Cliente Brisa SA", cat: "Receita", value: 8200, date: "10 Mai", status: "Pendente", type: "in" as const },
  { id: "TX-2045", desc: "Folha de pagamento — Maio", cat: "Despesa", value: -18400, date: "10 Mai", status: "Concluído", type: "out" as const },
  { id: "TX-2044", desc: "Pagamento — Cliente Vértice", cat: "Receita", value: 5600, date: "09 Mai", status: "Concluído", type: "in" as const },
  { id: "TX-2043", desc: "Impostos — DAS Simples", cat: "Despesa", value: -2100, date: "08 Mai", status: "Concluído", type: "out" as const },
];

export const alerts = [
  { level: "Alto", title: "Saldo do Itaú abaixo do limite mínimo", time: "há 2h" },
  { level: "Médio", title: "Boleto de R$ 3.450 vence em 3 dias", time: "há 5h" },
  { level: "Info", title: "Previsão IA atualizada para o próximo trimestre", time: "ontem" },
];

export const banks = [
  { name: "Itaú", account: "Conta corrente • 0042-9", balance: 38240.55 },
  { name: "Nubank PJ", account: "Conta digital • 1234-5", balance: 92480.10 },
  { name: "Banco do Brasil", account: "Conta corrente • 7788-1", balance: 24105.30 },
];

export const goals = [
  { title: "Reserva de emergência", current: 62000, target: 100000 },
  { title: "Expansão filial SP", current: 28000, target: 80000 },
  { title: "Compra de equipamentos", current: 15500, target: 20000 },
];

export const kpis = {
  saldoAtual: 154825.95,
  lucroMensal: 24200,
  crescimento: 0.084,
  inadimplencia: 0.032,
};

export function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
