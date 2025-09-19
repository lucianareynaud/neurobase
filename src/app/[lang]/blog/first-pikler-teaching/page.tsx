import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/translations";

interface BlogPostProps {
  params: { lang: Locale };
}

export default function FirstPiklerTeaching({ params }: BlogPostProps) {
  const t = getTranslations(params.lang);

  if (params.lang === 'en') {
    return (
      <article className="max-w-4xl mx-auto space-y-8">
        {/* Post Header */}
        <header className="space-y-4">
          <nav className="text-sm text-text-secondary">
            <Link href={`/${params.lang}/blog`} className="hover:text-text-primary">← Back to Blog</Link>
          </nav>
          
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
              Emmi Pikler's First Teaching: Respect for Autonomy and Free Movement
            </h1>
            <p className="text-text-secondary text-lg">
              How freedom of movement from the first days of life can transform the baby's neurological development
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <time dateTime="2024-12-19">December 19, 2024</time>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>Emmi Pikler</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="aspect-[16/9] rounded-xl bg-secondary/60 border border-border flex items-center justify-center">
          <p className="text-text-secondary">[Image: Baby exploring free movements]</p>
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-text-primary text-lg leading-relaxed">
            Emmi Pikler, renowned Hungarian pediatrician of the 20th century, revolutionized our understanding of child development 
            with a fundamental teaching: <strong>respect for autonomy and free movement of babies from the first days of life</strong>. 
            This first principle is not just an educational philosophy, but a solid scientific foundation for healthy 
            neurological development in early childhood.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
            What Is Free Movement?
          </h2>
          
          <p className="text-text-primary leading-relaxed">
            Free movement, according to Pikler, is the baby's ability to explore and develop their motor skills 
            at their own pace, without interventions or accelerations from adults. This means allowing the child 
            to discover for themselves how to roll, sit, crawl, and walk, respecting their individual development time.
          </p>

          <div className="bg-secondary/40 border-l-4 border-primary p-6 rounded-r-lg my-8">
            <blockquote className="text-text-primary italic text-lg">
              "When babies have the freedom to explore their movements without restrictions, they not only develop 
              their motor skills more effectively, but also strengthen their self-esteem and self-confidence."
            </blockquote>
            <cite className="text-text-secondary text-sm mt-2 block">— Emmi Pikler</cite>
          </div>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
            Why Is Free Movement Fundamental?
          </h2>

          <p className="text-text-primary leading-relaxed">
            Pikler's research demonstrated that free movement promotes:
          </p>

          <ul className="space-y-3 text-text-primary">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Optimized neurological development:</strong> Each natural movement stimulates specific neural connections</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Strengthened self-esteem:</strong> The child learns to trust their own abilities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Coordination development:</strong> Natural movements create more efficient motor patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Reduced anxiety:</strong> Autonomy promotes feelings of security and control</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
            The Adult's Role in Pikler's Approach
          </h2>

          <p className="text-text-primary leading-relaxed">
            In Pikler's methodology, the adult is not an instructor, but an <strong>attentive observer and facilitator</strong>. 
            Their role is to create a safe and stimulating environment that allows the baby to explore and learn on their own.
          </p>

          <p className="text-text-primary leading-relaxed">
            This means avoiding putting the baby in positions they are not yet able to achieve on their own, such as:
          </p>

          <ul className="space-y-2 text-text-primary ml-4">
            <li>• Sitting them before they can sit on their own</li>
            <li>• Standing them up before the natural development of this skill</li>
            <li>• Using walkers or other devices that force positions</li>
            <li>• Abruptly interrupting their motor explorations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
            Practical Application in Daily Life
          </h2>

          <p className="text-text-primary leading-relaxed">
            How to apply free movement in practice:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold text-text-primary mb-3">✅ What to Do</h3>
              <ul className="space-y-2 text-sm text-text-primary">
                <li>• Create safe spaces for exploration</li>
                <li>• Observe without unnecessary intervention</li>
                <li>• Offer interesting objects to manipulate</li>
                <li>• Respect each baby's individual time</li>
                <li>• Celebrate each natural achievement</li>
              </ul>
            </div>
            
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-semibold text-text-primary mb-3">❌ What to Avoid</h3>
              <ul className="space-y-2 text-sm text-text-primary">
                <li>• Forcing positions before time</li>
                <li>• Using devices that limit movement</li>
                <li>• Comparing with other babies</li>
                <li>• Constantly interrupting explorations</li>
                <li>• Excessive anxiety about development milestones</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
            Scientific Evidence
          </h2>

          <p className="text-text-primary leading-relaxed">
            Studies conducted at the Pikler Institute in Budapest demonstrated that babies raised with free movement:
          </p>

          <ul className="space-y-2 text-text-primary ml-4">
            <li>• Develop better motor coordination</li>
            <li>• Show greater confidence in their abilities</li>
            <li>• Demonstrate less anxiety in new situations</li>
            <li>• Have better concentration capacity</li>
            <li>• Develop healthier social skills</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">
            Conclusion
          </h2>

          <p className="text-text-primary leading-relaxed">
            Emmi Pikler's first teaching invites us to completely rethink our interactions with babies. 
            By respecting their autonomy and allowing free movement, we not only promote healthier physical 
            development, but also strengthen the neurological foundation for the child's entire life.
          </p>

          <p className="text-text-primary leading-relaxed">
            This fundamental principle is the foundation of the entire NeuroBase 0-2 methodology, which combines 
            Pikler's teachings with the latest discoveries in developmental neuroscience.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="font-semibold text-text-primary mb-3">{t.blogPost.wantToLearnMore}</h3>
            <p className="text-text-primary text-sm mb-4">
              {t.blogPost.consultationDescription}
            </p>
            <Link 
              href={`/${params.lang}/consultoria`} 
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-95"
            >
              {t.blogPost.scheduleConsultation}
            </Link>
          </div>
        </div>

        {/* Tags */}
        <footer className="pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-secondary/60 text-text-secondary text-sm rounded-full">Emmi Pikler</span>
            <span className="px-3 py-1 bg-secondary/60 text-text-secondary text-sm rounded-full">Free Movement</span>
            <span className="px-3 py-1 bg-secondary/60 text-text-secondary text-sm rounded-full">Child Development</span>
            <span className="px-3 py-1 bg-secondary/60 text-text-secondary text-sm rounded-full">Neuroscience</span>
            <span className="px-3 py-1 bg-secondary/60 text-text-secondary text-sm rounded-full">0-2 years</span>
          </div>
        </footer>
      </article>
    );
  }

  // Portuguese version (original)
  return (
    <article className="max-w-4xl mx-auto space-y-8">
      {/* Cabeçalho do Post */}
      <header className="space-y-4">
        <nav className="text-sm text-text-secondary">
          <Link href={`/${params.lang}/blog`} className="hover:text-text-primary">← Voltar ao Blog</Link>
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
          <h3 className="font-semibold text-text-primary mb-3">{t.blogPost.wantToLearnMore}</h3>
          <p className="text-text-primary text-sm mb-4">
            {t.blogPost.consultationDescription}
          </p>
          <Link 
            href={`/${params.lang}/consultoria`} 
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-95"
          >
            {t.blogPost.scheduleConsultation}
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
