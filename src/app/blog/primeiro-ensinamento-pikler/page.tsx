import Link from "next/link";

export default function PrimeiroEnsinamentoPikler() {
  return (
    <article className="max-w-4xl mx-auto space-y-8">
      {/* Cabeçalho do Post */}
      <header className="space-y-4">
        <nav className="text-sm text-text-secondary">
          <Link href="/blog" className="hover:text-text-primary">← Voltar ao Blog</Link>
        </nav>
        
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
            O Primeiro Ensinamento de Emmi Pikler: Respeito à Autonomia e Movimento Livre
          </h1>
          <p className="text-text-secondary text-lg">
            Como a liberdade de movimento desde os primeiros dias de vida pode transformar o desenvolvimento neurológico do bebê
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          <time dateTime="2024-12-19">19 de dezembro de 2024</time>
          <span>•</span>
          <span>8 min de leitura</span>
          <span>•</span>
          <span>Emmi Pikler</span>
        </div>
      </header>

      {/* Imagem de destaque */}
      <div className="aspect-[16/9] rounded-xl bg-secondary/60 border border-border flex items-center justify-center">
        <p className="text-text-secondary">[Imagem: Bebê explorando movimentos livres]</p>
      </div>

      {/* Conteúdo do Post */}
      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-text-primary text-lg leading-relaxed">
          Emmi Pikler, renomada pediatra húngara do século XX, revolucionou nossa compreensão do desenvolvimento infantil 
          com um ensinamento fundamental: <strong>o respeito à autonomia e ao movimento livre dos bebês desde os primeiros dias de vida</strong>. 
          Este primeiro princípio não é apenas uma filosofia educacional, mas uma base científica sólida para o desenvolvimento 
          neurológico saudável na primeira infância.
        </p>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
          O Que É o Movimento Livre?
        </h2>
        
        <p className="text-text-primary leading-relaxed">
          O movimento livre, segundo Pikler, é a capacidade do bebê de explorar e desenvolver suas habilidades motoras 
          no seu próprio ritmo, sem intervenções ou acelerações por parte dos adultos. Isso significa permitir que a criança 
          descubra por si mesma como rolar, sentar, engatinhar e caminhar, respeitando seu tempo individual de desenvolvimento.
        </p>

        <div className="bg-secondary/40 border-l-4 border-primary p-6 rounded-r-lg my-8">
          <blockquote className="text-text-primary italic text-lg">
            "Quando os bebês têm a liberdade de explorar seus movimentos sem restrições, eles não apenas desenvolvem 
            suas capacidades motoras de forma mais eficaz, mas também fortalecem sua autoestima e autoconfiança."
          </blockquote>
          <cite className="text-text-secondary text-sm mt-2 block">— Emmi Pikler</cite>
        </div>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
          Por Que o Movimento Livre É Fundamental?
        </h2>

        <p className="text-text-primary leading-relaxed">
          A pesquisa de Pikler demonstrou que o movimento livre promove:
        </p>

        <ul className="space-y-3 text-text-primary">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Desenvolvimento neurológico otimizado:</strong> Cada movimento natural estimula conexões neurais específicas</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Fortalecimento da autoestima:</strong> A criança aprende a confiar em suas próprias capacidades</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Desenvolvimento da coordenação:</strong> Movimentos naturais criam padrões motores mais eficientes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Redução da ansiedade:</strong> A autonomia promove sensação de segurança e controle</span>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
          O Papel do Adulto na Abordagem Pikler
        </h2>

        <p className="text-text-primary leading-relaxed">
          Na metodologia de Pikler, o adulto não é um instrutor, mas sim um <strong>observador atento e facilitador</strong>. 
          Seu papel é criar um ambiente seguro e estimulante que permita ao bebê explorar e aprender por conta própria.
        </p>

        <p className="text-text-primary leading-relaxed">
          Isso significa evitar colocar o bebê em posições que ele ainda não é capaz de alcançar sozinho, como:
        </p>

        <ul className="space-y-2 text-text-primary ml-4">
          <li>• Sentá-lo antes que ele consiga se sentar sozinho</li>
          <li>• Colocá-lo de pé antes do desenvolvimento natural dessa habilidade</li>
          <li>• Usar andadores ou outros dispositivos que forçam posições</li>
          <li>• Interromper bruscamente suas explorações motoras</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
          Aplicação Prática no Dia a Dia
        </h2>

        <p className="text-text-primary leading-relaxed">
          Como aplicar o movimento livre na prática:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-background border border-border rounded-lg p-6">
            <h3 className="font-semibold text-text-primary mb-3">✅ O Que Fazer</h3>
            <ul className="space-y-2 text-sm text-text-primary">
              <li>• Criar espaços seguros para exploração</li>
              <li>• Observar sem intervir desnecessariamente</li>
              <li>• Oferecer objetos interessantes para manipular</li>
              <li>• Respeitar o tempo individual de cada bebê</li>
              <li>• Celebrar cada conquista natural</li>
            </ul>
          </div>
          
          <div className="bg-background border border-border rounded-lg p-6">
            <h3 className="font-semibold text-text-primary mb-3">❌ O Que Evitar</h3>
            <ul className="space-y-2 text-sm text-text-primary">
              <li>• Forçar posições antes do tempo</li>
              <li>• Usar dispositivos que limitam movimento</li>
              <li>• Comparar com outros bebês</li>
              <li>• Interromper explorações constantemente</li>
              <li>• Ansiedade excessiva com marcos de desenvolvimento</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
          Evidências Científicas
        </h2>

        <p className="text-text-primary leading-relaxed">
          Estudos realizados no Instituto Pikler em Budapeste demonstraram que bebês criados com movimento livre:
        </p>

        <ul className="space-y-2 text-text-primary ml-4">
          <li>• Desenvolvem melhor coordenação motora</li>
          <li>• Apresentam maior confiança em suas capacidades</li>
          <li>• Demonstram menor ansiedade em situações novas</li>
          <li>• Têm melhor capacidade de concentração</li>
          <li>• Desenvolvem habilidades sociais mais saudáveis</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
          Conclusão
        </h2>

        <p className="text-text-primary leading-relaxed">
          O primeiro ensinamento de Emmi Pikler nos convida a repensar completamente nossas interações com os bebês. 
          Ao respeitar sua autonomia e permitir o movimento livre, não apenas promovemos um desenvolvimento físico mais 
          saudável, mas também fortalecemos a base neurológica para toda a vida da criança.
        </p>

        <p className="text-text-primary leading-relaxed">
          Este princípio fundamental é a base de toda a metodologia NeuroBase 0-2, que combina os ensinamentos de Pikler 
          com as mais recentes descobertas em neurociência do desenvolvimento infantil.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-text-primary mb-3">Quer Aprender Mais?</h3>
          <p className="text-text-primary text-sm mb-4">
            Agende uma consultoria personalizada para entender como aplicar os princípios de Pikler 
            no desenvolvimento do seu bebê.
          </p>
          <Link 
            href="/consultoria" 
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-95"
          >
            Agendar Consultoria
          </Link>
        </div>
      </div>

      {/* Tags */}
      <footer className="pt-8 border-t border-border">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-secondary/60 text-text-secondary text-sm rounded-full">Emmi Pikler</span>
          <span className="px-3 py-1 bg-secondary/60 text-text-secondary text-sm rounded-full">Movimento Livre</span>
          <span className="px-3 py-1 bg-secondary/60 text-text-secondary text-sm rounded-full">Desenvolvimento Infantil</span>
          <span className="px-3 py-1 bg-secondary/60 text-text-secondary text-sm rounded-full">Neurociência</span>
          <span className="px-3 py-1 bg-secondary/60 text-text-secondary text-sm rounded-full">0-2 anos</span>
        </div>
      </footer>
    </article>
  );
}
