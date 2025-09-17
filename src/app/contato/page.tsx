export default function ContatoPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Contato</h1>
      <form className="grid gap-4 max-w-xl">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm mb-1" htmlFor="nome">Nome</label>
            <input id="nome" name="nome" className="w-full rounded-md border border-border bg-background px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="telefone">Telefone</label>
            <input id="telefone" name="telefone" className="w-full rounded-md border border-border bg-background px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="w-full rounded-md border border-border bg-background px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="assunto">Assunto</label>
          <select id="assunto" name="assunto" className="w-full rounded-md border border-border bg-background px-3 py-2">
            <option>Geral</option>
            <option>Consultoria</option>
            <option>Parcerias</option>
            <option>Suporte</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows={5} className="w-full rounded-md border border-border bg-background px-3 py-2" />
        </div>
        <div className="flex gap-3">
          <button type="submit" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-sm font-medium shadow-sm">Enviar</button>
          <p className="text-xs text-text-secondary">Integração com Google Sheets em breve.</p>
        </div>
      </form>
      <div className="text-sm text-text-secondary">
        <p>Email: contato@neurobase.com.br</p>
        <p>Redes: Instagram, LinkedIn, YouTube</p>
      </div>
    </div>
  );
}


