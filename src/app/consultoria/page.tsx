export default function ConsultoriaPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Consultoria</h1>
      <p className="text-text-secondary">Serviços para famílias, educadores e creches.</p>
      <form className="grid gap-4 max-w-xl">
        <div>
          <label className="block text-sm mb-1" htmlFor="nome">Nome</label>
          <input id="nome" name="nome" className="w-full rounded-md border border-border bg-background px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="w-full rounded-md border border-border bg-background px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="servico">Tipo de serviço</label>
          <select id="servico" name="servico" className="w-full rounded-md border border-border bg-background px-3 py-2">
            <option>Consultoria para família</option>
            <option>Treinamento para educadores</option>
            <option>Implementação em creches/berçários</option>
            <option>Consultoria internacional (online)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="descricao">Descrição</label>
          <textarea id="descricao" name="descricao" rows={5} className="w-full rounded-md border border-border bg-background px-3 py-2" />
        </div>
        <div className="flex gap-3">
          <button type="submit" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-sm font-medium shadow-sm">Enviar</button>
          <p className="text-xs text-text-secondary">Integração com Google Sheets em breve.</p>
        </div>
      </form>
    </div>
  );
}


