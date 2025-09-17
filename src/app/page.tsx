import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
            Desenvolvimento Neurológico Respeitoso para Bebês 0-2 Anos
          </h1>
          <p className="text-text-secondary text-base md:text-lg">
            Metodologia científica baseada em Emmi Pikler e Magda Gerber
          </p>
          <div className="flex gap-4">
            <a href="#abordagem" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">
              Conheça Nossa Abordagem
            </a>
            <a href="/consultoria" className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-text-primary hover:bg-secondary/40">
              Agende Consultoria
            </a>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-xl bg-secondary/60 border border-border" aria-hidden />
      </section>

      <section className="grid sm:grid-cols-3 gap-4" aria-label="credibilidade">
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-text-secondary">10 anos de experiência, 7 nos EUA</p>
        </div>
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-text-secondary">Formação no Vale do Silício</p>
        </div>
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="text-sm text-text-secondary">Metodologias cientificamente comprovadas</p>
        </div>
      </section>
    </div>
  );
}
